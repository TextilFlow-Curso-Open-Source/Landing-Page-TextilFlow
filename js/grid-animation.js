// Grid animation for TextilFlow "Quienes Somos" section
console.log("Iniciando animación de grid");

let container, camera, scene, renderer;
let uniforms;

window.onload = function() {
  console.log("Página cargada, buscando contenedor");

  container = document.getElementById('company-bg-animation');
  
  if (!container) {
    console.error("No se encontró el contenedor #company-bg-animation");
    return;
  }
  
  console.log("Contenedor encontrado, dimensiones:", container.offsetWidth, "x", container.offsetHeight);

  init();
  animate();
};

function init() {

  scene = new THREE.Scene();
  

  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  

  uniforms = {
    u_time: { value: 0.0 },
    u_resolution: { value: new THREE.Vector2() },
    u_mouse: { value: new THREE.Vector2(0.5, 0.5) }
  };
  
  // Crear material con shaders
  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: `
      varying vec2 vUv;
      
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 vUv;
      
      // Función para rotar un punto 2D
      vec2 rotate2D(vec2 p, float angle) {
        float s = sin(angle);
        float c = cos(angle);
        return mat2(c, -s, s, c) * p;
      }
      
      // Patrón de grid
      float gridPattern(vec2 p) {
        vec2 grid = abs(fract(p - 0.5) - 0.5) / fwidth(p);
        return min(grid.x, grid.y);
      }
      
      // Grid isométrico
      float isoGrid(vec2 p) {
        p = rotate2D(p, 3.14159 / 4.0);
        vec2 grid1 = p;
        vec2 grid2 = rotate2D(p, 3.14159 / 3.0);
        return min(gridPattern(grid1 * 8.0), gridPattern(grid2 * 8.0));
      }
      
      void main() {
        // Ajustar coordenadas UV para mantener la relación de aspecto
        vec2 uv = vUv;
        vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
        uv = (uv - 0.5) * aspect + 0.5;
        
        // Efecto de distorsión con el mouse
        vec2 mousePos = u_mouse;
        vec2 mouseInfluence = mousePos - uv;
        float mouseDist = length(mouseInfluence);
        float distortionAmount = smoothstep(0.3, 0.0, mouseDist) * 0.2;
        vec2 distortedUV = uv + normalize(mouseInfluence) * distortionAmount;
        
        // Calcular el patrón de grid con animación
        float grid = isoGrid(distortedUV + u_time * 0.05);
        
        // Definir colores (tonos marrones para TextilFlow)
        vec3 color1 = vec3(0.29, 0.22, 0.16);  // Marrón medio
        vec3 color2 = vec3(0.165, 0.1, 0.02);  // Marrón oscuro
        vec3 bgColor = vec3(0.96, 0.95, 0.92); // Fondo claro
        
        // Mezclar colores basado en el grid y el tiempo
        float gridLines = smoothstep(0.8, 0.2, grid);
        vec3 finalColor = mix(bgColor, mix(color1, color2, sin(u_time) * 0.5 + 0.5), gridLines);
        
        // Color final con transparencia
        gl_FragColor = vec4(finalColor, gridLines * 0.8);
      }
    `,
    transparent: true
  });
  
  // Crear geometría (un simple plano que cubre toda la pantalla)
  const geometry = new THREE.PlaneGeometry(2, 2);
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  
  // Configurar renderer
  renderer = new THREE.WebGLRenderer({ 
    alpha: true,
    antialias: true 
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);
  
  // Actualizar uniforms con el tamaño del contenedor
  uniforms.u_resolution.value.x = container.offsetWidth;
  uniforms.u_resolution.value.y = container.offsetHeight;
  
  document.addEventListener('mousemove', function(e) {
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = 1.0 - (e.clientY - rect.top) / rect.height; 
    
    uniforms.u_mouse.value.x = x;
    uniforms.u_mouse.value.y = y;
  });
  
  // Event listener para redimensionar la ventana
  window.addEventListener('resize', onWindowResize);
  
  console.log("Inicialización completada");
}

function onWindowResize() {
  // Actualizar tamaño del renderer y las resoluciones
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  uniforms.u_resolution.value.x = container.offsetWidth;
  uniforms.u_resolution.value.y = container.offsetHeight;
}

function animate() {
  requestAnimationFrame(animate);
  
  uniforms.u_time.value += 0.01;
  
  renderer.render(scene, camera);
}