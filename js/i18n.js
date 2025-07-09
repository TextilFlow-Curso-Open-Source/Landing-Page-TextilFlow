$(document).ready(function () {
  const resources = {
    es: {
      translation: {
        navProduct: "Producto",
        navAbout: "Nosotros",
        navVideos: "Videos", // ✅ AGREGADO
        navPlans: "Planes",
        navRegister: "Registrar",
        navLogin: "Iniciar Sesión",

        heroTitle: "DIGITALIZA EL<br><span class='text-highlight'>CONTROL DE</span> CALIDAD TEXTIL",
        heroDesc: "La plataforma colaborativa que asegura la trazabilidad de tus lotes de tela, optimiza tus procesos y reduce pérdidas en la cadena de suministro.",
        heroButton: "Conoce más",

        benefitsTitle: "¿Por qué elegir TextilFlow?",
        benefit1Title: "Evita pérdidas y errores en la cadena de suministro",
        benefit1Item1: "Registro de entradas y salidas",
        benefit1Item2: "Alertas de stock bajo",
        benefit1Item3: "Consulta rápida del inventario disponible",
        benefit1Item4: "Trazabilidad por fechas y responsables",

        benefit2Title: "Gana respaldo con documentación clara y ordenada",
        benefit2Item1: "Registro diario de asistencia",
        benefit2Item2: "Identificación por rol o cuadrilla",
        benefit2Item3: "Visualización de horas trabajadas",

        benefit3Title: "Fortalece la confianza con tus distribuidores y clientes",
        benefit3Item1: "Exportación de reportes en PDF o Excel",
        benefit3Item2: "Seguimiento de avances físicos",
        benefit3Item3: "Envío directo a oficinas administrativas",
        benefitsButton: "Ver cómo funciona",

        companyTitle: "QUIENES SOMOS",
        companyIntro: "Startup fundada por estudiantes de la UPC, comprometida con digitalizar y optimizar la gestión de calidad en el sector textil. Nuestra plataforma facilita el control, la trazabilidad y la transparencia en cada lote de tela.",
        mission: "Brindar una herramienta digital que permita verificar, documentar y respaldar la calidad textil, fortaleciendo la confianza y reduciendo errores en la cadena de suministro.",
        vision: "Liderar la trazabilidad textil en Latinoamérica con una solución open source que impulse relaciones más justas y eficientes en la industria.",

        plansTitle: "PLANES",
        basicPlanTitle: "Plan Básico",
        basicPlanPrice: "9.99$",
        basicPlanItem1: "Registro y verificación de hasta 10 lotes mensuales",
        basicPlanItem2: "Subida de hasta 30 fotos/mes como evidencia",
        basicPlanItem3: "4 Reportes de calidad en PDF básicos",

        corpPlanTitle: "Plan Corporativo",
        corpPlanPrice: "49.99$",
        corpPlanItem1: "Registro y control ilimitado",
        corpPlanItem2: "Dashboard personalizado",
        corpPlanItem3: "Hasta 100 fotos mensuales",
        corpPlanItem4: "Reportes de calidad en PDF",
        corpPlanItem5: "Fotos ilimitadas",
        corpPlanItem6: "Acceso a Chatbot de TextilFlow",

        faqTitle: "PREGUNTAS FRECUENTES",
        faq1Question: "¿Cómo funciona TextilFlow?",
        faq1Answer: "TextilFlow permite registrar, verificar y documentar el estado de los lotes de tela en tiempo real. Puedes agregar observaciones, fotos de evidencia y generar reportes automáticos que respaldan cada entrega o recepción.",
        faq2Question: "¿A quién está dirigido?",
        faq2Answer: "A empresas textiles, talleres de confección y distribuidores de insumos que buscan mejorar el control de calidad, reducir pérdidas y fortalecer la transparencia en su cadena de suministro.",
        faq3Question: "¿Qué necesito para empezar a usarlo?",
        faq3Answer: "Solo necesitas acceso a internet y un dispositivo (PC, tablet o celular).",

        contactTitle: "CONTÁCTANOS",
        formName: "Nombre",
        formSurname: "Apellido",
        formEmail: "Email",
        formAddress: "Dirección",
        formDescription: "Descripción",
        formSubmit: "Enviar",

        copyright: "© 2025 TextilFlow Todos los derechos reservados",
        formPaymentTitle: "Datos de Pago",
        formPaymentNote: "Todos los campos son necesarios.",
        formPlanType: "Tipo de plan",
        formPaymentOption: "Opción de pago",
        formCountry: "País",
        formCardName: "Nombre del titular",
        formCardNumber: "Número de tarjeta",
        formExpiryMonth: "Mes",
        formExpiryYear: "Año",
        formCVV: "Código de seguridad (CVV)",
        formPay: "Pagar Ahora",
        formPlaceholderName: "Ej: Juan Pérez",
        formPlaceholderCard: "1234 5678 9012 3456",
        formPlaceholderCVV: "Ej: 123",
        formCountryPlaceholder: "Seleccione su país",

        subscribeButton: "Suscribirme",
        paymentSuccess: "¡Pago exitoso! Gracias por tu suscripción.",

        // ✅ Nueva sección de videos
        videosTitle: "CONOCE MÁS SOBRE TEXTILFLOW",
        video1Title: "Conoce Nuestro Producto",
        video1Desc: "Descubre cómo TextilFlow revoluciona el control de calidad textil con tecnología innovadora y procesos optimizados.",
        video2Title: "Conoce Nuestro Equipo",
        video2Desc: "Conoce al equipo de estudiantes de la UPC comprometidos con transformar la industria textil a través de la digitalización."
      }
    },
    en: {
      translation: {
        navProduct: "Product",
        navAbout: "About Us",
        navVideos: "Videos", // ✅ AGREGADO
        navPlans: "Plans",
        navRegister: "Register",
        navLogin: "Login",

        heroTitle: "DIGITIZE<br><span class='text-highlight'>TEXTILE</span> QUALITY CONTROL",
        heroDesc: "The collaborative platform that ensures traceability of your fabric batches, optimizes your processes, and reduces losses in the supply chain.",
        heroButton: "Learn more",

        benefitsTitle: "Why choose TextilFlow?",
        benefit1Title: "Avoid losses and errors in the supply chain",
        benefit1Item1: "Entry and exit records",
        benefit1Item2: "Low stock alerts",
        benefit1Item3: "Quick inventory lookup",
        benefit1Item4: "Traceability by date and person in charge",

        benefit2Title: "Get support with clear, organized documentation",
        benefit2Item1: "Daily attendance record",
        benefit2Item2: "Identification by role or team",
        benefit2Item3: "Visualization of hours worked",

        benefit3Title: "Build trust with your distributors and clients",
        benefit3Item1: "PDF or Excel report export",
        benefit3Item2: "Tracking of physical progress",
        benefit3Item3: "Direct delivery to administrative offices",
        benefitsButton: "See how it works",

        companyTitle: "ABOUT US",
        companyIntro: "Startup founded by UPC students, committed to digitizing and optimizing quality management in the textile sector. Our platform facilitates control, traceability and transparency for every fabric batch.",
        
        mission: "Provide a digital tool to verify, document and support textile quality, building trust and reducing errors in the supply chain.",
        vision: "Lead textile traceability in Latin America with an open source solution that fosters fairer and more efficient industry relationships.",

        plansTitle: "PLANS",
        basicPlanTitle: "Basic Plan",
        basicPlanPrice: "$9.99",
        basicPlanItem1: "Record and verify up to 10 batches per month",
        basicPlanItem2: "Upload up to 30 photos/month as evidence",
        basicPlanItem3: "4 basic quality reports in PDF",

        corpPlanTitle: "Corporate Plan",
        corpPlanPrice: "$49.99",
        corpPlanItem1: "Unlimited records and control",
        corpPlanItem2: "Custom dashboard",
        corpPlanItem3: "Up to 100 photos per month",
        corpPlanItem4: "Quality reports in PDF",
        corpPlanItem5: "Unlimited photos",
        corpPlanItem6: "TextilFlow's Chatbot access",


        faqTitle: "FREQUENTLY ASKED QUESTIONS",
        faq1Question: "How does TextilFlow work?",
        faq1Answer: "TextilFlow allows you to register, verify and document the status of fabric batches in real time. You can add notes, photo evidence and generate automatic reports to back every delivery or reception.",
        faq2Question: "Who is it for?",
        faq2Answer: "For textile companies, clothing workshops, and suppliers who want to improve quality control, reduce losses and increase transparency.",
        faq3Question: "What do I need to start using it?",
        faq3Answer: "You just need internet access and a device (PC, tablet or smartphone).",

        contactTitle: "CONTACT US",
        formName: "First Name",
        formSurname: "Last Name",
        formEmail: "Email",
        formAddress: "Address",
        formDescription: "Description",
        formSubmit: "Submit",

        copyright: "© 2025 TextilFlow All rights reserved",
        formPaymentTitle: "Payment Details",
        formPaymentNote: "All fields are required.",
        formPlanType: "Plan type",
        formPaymentOption: "Payment option",
        formCountry: "Country",
        formCardName: "Cardholder name",
        formCardNumber: "Card number",
        formExpiryMonth: "Month",
        formExpiryYear: "Year",
        formCVV: "Security code (CVV)",
        formPay: "Pay Now",
        formPlaceholderName: "e.g. John Smith",
        formPlaceholderCard: "1234 5678 9012 3456",
        formPlaceholderCVV: "e.g. 123",
        formCountryPlaceholder: "Select your country",
        subscribeButton: "Subscribe",
        paymentSuccess: "Payment successful! Thank you for your subscription.",

        // ✅ Nueva sección de videos
        videosTitle: "LEARN MORE ABOUT TEXTILFLOW",
        video1Title: "Meet Our Product",
        video1Desc: "Discover how TextilFlow revolutionizes textile quality control with innovative technology and optimized processes.",
        video2Title: "Meet Our Team",
        video2Desc: "Meet the team of UPC students committed to transforming the textile industry through digitalization."
      }
    }
  };

  // Initialize i18next
  i18next
    .use(i18nextBrowserLanguageDetector)
    .init({
      debug: false,
      fallbackLng: 'en',
      resources: resources
    }, function(err, t) {
      updateContent();
      updateActiveLanguageButton(i18next.language);
    });

  function updateContent() {
    // Navegación
    $('nav a:nth-child(1)').text(i18next.t('navProduct'));
    $('nav a:nth-child(2)').text(i18next.t('navAbout'));
    $('nav a:nth-child(3)').text(i18next.t('navVideos')); // ✅ AGREGADO
    $('nav a:nth-child(4)').text(i18next.t('navPlans')); // ✅ CORREGIDO
    $('nav a.register-button').text(i18next.t('navRegister'));
    $('nav a.login-button').text(i18next.t('navLogin'));

    // Hero Section
    $('.banner-content h1').html(i18next.t('heroTitle'));
    $('.banner-content p').text(i18next.t('heroDesc'));
    $('.cta-main').text(i18next.t('heroButton'));

    // Benefits Section
    $('.benefits-section h2').text(i18next.t('benefitsTitle'));

    $('.benefit-card:nth-child(1) h3').text(i18next.t('benefit1Title'));
    $('.benefit-card:nth-child(1) li:nth-child(1)').text(i18next.t('benefit1Item1'));
    $('.benefit-card:nth-child(1) li:nth-child(2)').text(i18next.t('benefit1Item2'));
    $('.benefit-card:nth-child(1) li:nth-child(3)').text(i18next.t('benefit1Item3'));
    $('.benefit-card:nth-child(1) li:nth-child(4)').text(i18next.t('benefit1Item4'));

    $('.benefit-card:nth-child(2) h3').text(i18next.t('benefit2Title'));
    $('.benefit-card:nth-child(2) li:nth-child(1)').text(i18next.t('benefit2Item1'));
    $('.benefit-card:nth-child(2) li:nth-child(2)').text(i18next.t('benefit2Item2'));
    $('.benefit-card:nth-child(2) li:nth-child(3)').text(i18next.t('benefit2Item3'));

    $('.benefit-card:nth-child(3) h3').text(i18next.t('benefit3Title'));
    $('.benefit-card:nth-child(3) li:nth-child(1)').text(i18next.t('benefit3Item1'));
    $('.benefit-card:nth-child(3) li:nth-child(2)').text(i18next.t('benefit3Item2'));
    $('.benefit-card:nth-child(3) li:nth-child(3)').text(i18next.t('benefit3Item3'));

    $('.demo-button').text(i18next.t('benefitsButton'));

    // Company Section
    $('.company-heading').text(i18next.t('companyTitle'));
    $('.company-intro').text(i18next.t('companyIntro'));
    $('.company-values p:nth-child(1)').html('<strong>Misión:</strong> ' + i18next.t('mission'));
    $('.company-values p:nth-child(2)').html('<strong>Visión:</strong> ' + i18next.t('vision'));

    // Plans
    $('.pricing-heading').text(i18next.t('plansTitle'));

    $('.price-card:nth-child(1) .plan-name').text(i18next.t('basicPlanTitle'));
    $('.price-card:nth-child(1) .plan-cost').text(i18next.t('basicPlanPrice'));
    $('.price-card:nth-child(1) li:nth-child(1)').text(i18next.t('basicPlanItem1'));
    $('.price-card:nth-child(1) li:nth-child(2)').text(i18next.t('basicPlanItem2'));
    $('.price-card:nth-child(1) li:nth-child(3)').text(i18next.t('basicPlanItem3'));

    $('.price-card:nth-child(2) .plan-name').text(i18next.t('corpPlanTitle'));
    $('.price-card:nth-child(2) .plan-cost').text(i18next.t('corpPlanPrice'));
    $('.price-card:nth-child(2) li:nth-child(1)').text(i18next.t('corpPlanItem1'));
    $('.price-card:nth-child(2) li:nth-child(2)').text(i18next.t('corpPlanItem2'));
    $('.price-card:nth-child(2) li:nth-child(3)').text(i18next.t('corpPlanItem3'));
    $('.price-card:nth-child(2) li:nth-child(4)').text(i18next.t('corpPlanItem4'));
    $('.price-card:nth-child(2) li:nth-child(5)').text(i18next.t('corpPlanItem5'));

    // FAQs
    $('.faq-section h2').text(i18next.t('faqTitle'));
    $('.faq-item:nth-child(1) .faq-question h3').text(i18next.t('faq1Question'));
    $('.faq-item:nth-child(1) .faq-answer p').text(i18next.t('faq1Answer'));

    $('.faq-item:nth-child(2) .faq-question h3').text(i18next.t('faq2Question'));
    $('.faq-item:nth-child(2) .faq-answer p').text(i18next.t('faq2Answer'));

    $('.faq-item:nth-child(3) .faq-question h3').text(i18next.t('faq3Question'));
    $('.faq-item:nth-child(3) .faq-answer p').text(i18next.t('faq3Answer'));

    // Videos Section ✅ AGREGADO
    $('.videos-section h2').text(i18next.t('videosTitle'));
    $('.video-card:nth-child(1) h3').text(i18next.t('video1Title'));
    $('.video-card:nth-child(1) p').text(i18next.t('video1Desc'));
    $('.video-card:nth-child(2) h3').text(i18next.t('video2Title'));
    $('.video-card:nth-child(2) p').text(i18next.t('video2Desc'));

    // Contacto
    $('.contact-form-container h2, .form-wrapper h2').text(i18next.t('contactTitle'));
    $('label[for="nombre"]').text(i18next.t('formName'));
    $('label[for="apellido"]').text(i18next.t('formSurname'));
    $('label[for="email"]').text(i18next.t('formEmail'));
    $('label[for="direccion"]').text(i18next.t('formAddress'));
    $('label[for="descripcion"]').text(i18next.t('formDescription'));
    $('.submit-button').text(i18next.t('formSubmit'));

    // Footer
    $('.site-footer .copyright p').text(i18next.t('copyright'));
    
    // Modal de Pago
    $('#payment-modal h2').text(i18next.t('formPaymentTitle'));
    $('#payment-modal p').text(i18next.t('formPaymentNote'));
    $('label[for="plan-type"]').text(i18next.t('formPlanType'));
    $('label[for="payment-option"]').text(i18next.t('formPaymentOption'));
    $('label[for="country"]').text(i18next.t('formCountry'));
    $('label[for="card-name"]').text(i18next.t('formCardName'));
    $('label[for="card-number"]').text(i18next.t('formCardNumber'));
    $('label[for="expiry-month"]').text(i18next.t('formExpiryMonth'));
    $('label[for="expiry-year"]').text(i18next.t('formExpiryYear'));
    $('label[for="cvv"]').text(i18next.t('formCVV'));

    $('#card-name').attr('placeholder', i18next.t('formPlaceholderName'));
    $('#card-number').attr('placeholder', i18next.t('formPlaceholderCard'));
    $('#cvv').attr('placeholder', i18next.t('formPlaceholderCVV'));

    $('#country option:first-child').text(i18next.t('formCountryPlaceholder'));

    $('.checkout-form .submit-button').text(i18next.t('formPay'));

    // Botones "Suscribirme"
    $('.subscribe-button').text(i18next.t('subscribeButton'));
  }

  // Actualizar botón de idioma activo
  function updateActiveLanguageButton(language) {
    $('#language-switcher button').removeClass('active');
    $('#language-switcher button[data-language="' + language + '"]').addClass('active');
  }

  // Función global para cambiar de idioma
  window.changeLanguage = function (lng) {
    i18next.changeLanguage(lng, function () {
      updateContent();
      updateActiveLanguageButton(lng);
      localStorage.setItem('i18nextLng', lng);
    });
  }
  
});