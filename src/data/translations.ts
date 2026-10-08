export const translations = {
  es: {
    // Nav
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      insurance: 'Seguros',
      business: 'Empresas & Auto',
      retirement: 'Retiro y Protección',
      contact: 'Contacto',
      quoteBtn: 'Cotiza Ahora',
      agentBadge: 'Agente Autorizada',
      mobileCall: 'Llamar',
      mobileWhatsapp: 'WhatsApp',
      mobileQuote: 'Cotizar',
    },

    // Hero
    hero: {
      eyebrow: 'AGENCIA DE SEGUROS EN PUERTO RICO',
      title: 'Protege lo que más importa.',
      subtitle:
        'Seguros diseñados para cuidar tu salud, tu familia, tu patrimonio y tu futuro con el respaldo de las mejores aseguradoras.',
      quoteCta: 'Cotiza Ahora',
      talkJanetCta: 'Habla con Janet',
      trustPills: 'Atención personalizada · Orientación profesional · Soluciones a tu medida',
      agentCard: {
        name: 'Janet López',
        role: 'Agente Licenciada de Seguros',
        phone: '786-356-5990',
        directHelp: 'Orientación sin costo en Puerto Rico',
      },
    },

    // Trust Bar
    trustBar: {
      heading: '¿Por qué elegir MV Insurance?',
      items: [
        {
          title: 'Experiencia Comprobada',
          desc: 'Más de 8 años en la industria asegurando familias y negocios en Puerto Rico.',
          icon: 'shield-check',
        },
        {
          title: 'Orientación Personalizada',
          desc: 'No solo vendemos pólizas. Te explicamos cada beneficio y cláusula con total transparencia.',
          icon: 'user-check',
        },
        {
          title: 'Protección Integral',
          desc: 'Salud, Cáncer, Vida, Auto Full Cover, Propiedad Comercial y Planes de Retiro.',
          icon: 'layers',
        },
        {
          title: 'Atención Directa',
          desc: 'Habla directamente con un representante humano y accesible. Sin llamadas automáticas.',
          icon: 'phone-call',
        },
      ],
    },

    // Products
    products: {
      title: 'Encuentra la protección que necesitas',
      subtitle: 'Coberturas pensadas para cada etapa de tu vida personal, familiar y profesional.',
      learnMore: 'Conocer más',
      getQuote: 'Solicitar cotización',
      filterAll: 'Todos',
      filterPersonal: 'Personales',
      filterFamily: 'Familia',
      filterVehicle: 'Vehículos',
      filterBusiness: 'Negocios',
      filterFuture: 'Futuro',
      items: [
        {
          id: 'health',
          category: 'personal',
          title: 'Plan Médico',
          shortDesc: 'Opciones de cobertura para proteger tu salud y la de tu familia ante cualquier eventualidad médica.',
          fullDesc: 'La medicina es cada vez más costosa y el plan médico es una necesidad básica innegociable. Te asesoramos sobre las distintas opciones de beneficios, copagos y primas disponibles en Puerto Rico con los principales aseguradores.',
          features: ['Cobertura ambulatoria y hospitalaria', 'Farmacia y medicamentos recetados', 'Planes individuales y para familias', 'Red amplia de especialistas en PR'],
          badge: 'Esencial',
        },
        {
          id: 'cancer',
          category: 'family',
          title: 'Seguro de Cáncer',
          shortDesc: 'Más de 40 beneficios disponibles según la cobertura para respaldar gastos de diagnóstico y tratamiento.',
          fullDesc: 'Un diagnóstico no debe comprometer tus ahorros ni el futuro de tu hogar. Esta póliza ofrece indemnizaciones directas en efectivo para cubrir traslados, hospitalización, quimioterapia y gastos que los planes regulares no cubren.',
          features: ['Más de 40 beneficios indemnizatorios', 'Pagos directos al asegurado', 'Cobertura para el cónyuge e hijos', 'Beneficios por primera ocurrencia'],
          badge: 'Alta Demanda',
        },
        {
          id: 'life',
          category: 'future',
          title: 'Seguro de Vida',
          shortDesc: 'Protege el bienestar económico y la estabilidad financiera de quienes más amas, con beneficios en vida.',
          fullDesc: 'El seguro de vida moderno no es solo para cuando ya no estés: te protege en vida ante enfermedades graves, terminales o incapacidad crónica, además de brindar paz financiera duradera a tu familia.',
          features: ['Pólizas a término y permanentes', 'Cláusulas de beneficios en vida', 'Protección hipotecaria garantizada', 'Opciones con acumulación de valor'],
          badge: 'Beneficia en Vida',
        },
        {
          id: 'auto',
          category: 'vehicle',
          title: 'Seguro de Auto / Full Cover',
          shortDesc: 'Protege tu vehículo con opciones de cobertura completa adaptadas a tu presupuesto y modelo.',
          fullDesc: 'Cotizamos tu Full Cover directamente con Universal, Multinational, Seguros Múltiples, Guardian y MAPFRE para obtener la prima más competitiva con protección ante colisión, hurto, cristales y asistencia en carretera 24/7.',
          features: ['Colisión y cobertura comprensiva', 'Responsabilidad pública (Liability)', 'Asistencia en carretera y grúa 24/7', 'Gestión rápida de reclamaciones'],
          badge: '5 Estrellas',
        },
        {
          id: 'property',
          category: 'business',
          title: 'Seguro de Propiedad y Negocio',
          shortDesc: 'Protege tu negocio, local comercial y patrimonio ante huracanes, terremotos, robos y demandas.',
          fullDesc: 'Resguarda tu inversión física, inventario, equipos y responsabilidades legales ante fenómenos climáticos severos o interrupciones de negocio imprevistas en Puerto Rico.',
          features: ['Cobertura ante huracanes y terremotos', 'Responsabilidad pública comercial (CGL)', 'Pérdida de ingresos por interrupción', 'Fianzas comerciales'],
          badge: 'Comercial',
        },
        {
          id: 'travel',
          category: 'personal',
          title: 'Seguro de Viaje',
          shortDesc: 'Viaja con tranquilidad dentro y fuera de Puerto Rico con asistencia médica de emergencia.',
          fullDesc: 'Respaldo internacional con One Alliance Travel Assist para cancelaciones de vuelo, pérdida de equipaje, emergencias médicas y repatriación en cualquier destino.',
          features: ['Gastos médicos de emergencia internacional', 'Pérdida de equipaje y retrasos', 'Evacuación y repatriación', 'Soporte multilingüe 24/7'],
          badge: 'Global',
        },
        {
          id: 'retirement',
          category: 'future',
          title: 'Plan de Retiro',
          shortDesc: 'Prepárate hoy para disfrutar el retiro que imaginas con crecimiento seguro y libre de pérdidas de mercado.',
          fullDesc: 'Estructuramos anualidades y planes de ahorro con ventajas contributivas diseñados para generar un flujo de ingresos garantizado de por vida cuando decidas culminar tu vida laboral.',
          features: ['Protección del principal contra caídas', 'Crecimiento vinculado a índices', 'Ingreso garantizado vitalicio', 'Asesoría para jubilación en PR'],
          badge: 'Modo Futuro',
        },
        {
          id: 'disability',
          category: 'personal',
          title: 'Seguro de Incapacidad',
          shortDesc: 'Te respaldamos cuando una lesión o enfermedad imprevista te impida trabajar y generar ingresos.',
          fullDesc: 'Protege tu capacidad para pagar hipoteca, comida y compromisos mensuales si sufres una incapacidad temporal o prolongada.',
          features: ['Reemplazo de porcentaje de ingresos', 'Períodos de espera ajustables', 'Cobertura dentro y fuera del trabajo', 'Paz mental para trabajadores independientes'],
          badge: 'Ingreso Seguro',
        },
      ],
    },

    // About intro on Home
    storyIntro: {
      eyebrow: 'NUESTRA FILOSOFÍA',
      title: 'No vendemos seguros. Te ayudamos a proteger tu futuro.',
      p1: 'En MV Insurance creemos que escoger un seguro no debe ser un laberinto de letras pequeñas. Nuestro compromiso es orientarte con paciencia, explicarte cada opción y encontrar la póliza que de verdad responda cuando lo necesites.',
      p2: 'Somos una agencia independiente basada en Las Piedras, Puerto Rico, con más de 8 años de trayectoria y alianzas estratégicas con las aseguradoras más sólidas de la isla.',
      cta: 'Conoce nuestra historia completa',
      stats: [
        { label: 'Años de Experiencia', value: '8+' },
        { label: 'Compañías Aliadas', value: '6+' },
        { label: 'Familias Asesoradas', value: '1,500+' },
        { label: 'Pueblos Atendidos', value: '78' },
      ],
    },

    // Janet Section
    janet: {
      eyebrow: 'ATENCIÓN CERCANA Y PERSONAL',
      title: 'Conoce a Janet López',
      subtitle: 'Tu representante personal de seguros',
      quote1: '“Tener seguro no es una opción. Es una importancia.”',
      quote2: '“Hoy tomas la decisión; mañana tu tranquilidad y la de los que amas te lo agradecerá.”',
      quote3: '“Tu salud puede cambiar. Tu protección también debería hacerlo.”',
      bio: 'Con más de 8 años de experiencia en la industria de seguros y un compromiso genuino con sus clientes, Janet López trabaja día a día para brindar orientación clara, honesta y personalizada en cada etapa de la vida.',
      phone: '786-356-5990',
      officePhone: '787-710-1313',
      email: 'oficina@mvinsurancespr.com',
      callBtn: 'Llamar a Janet',
      whatsappBtn: 'Hablar por WhatsApp',
    },

    // Education
    education: {
      eyebrow: 'EDUCACIÓN FINANCIERA Y PROTECCIÓN',
      title: '¿Sabías que...?',
      subtitle: 'Tres preguntas que toda persona en Puerto Rico debería hacerse hoy.',
      cards: [
        {
          q: '¿Tu seguro médico cubre todo lo que necesitas?',
          ans: 'Los deducibles altos y los copagos en tratamientos especializados pueden drenar los ahorros familiares en semanas. Una póliza suplementaria de cáncer o salud indemniza dinero en efectivo directo a tus manos para gastos no médicos.',
        },
        {
          q: '¿Qué pasaría con tu familia si faltara tu ingreso?',
          ans: 'Las pólizas modernas cuentan con cláusulas de beneficios en vida. Esto significa que no solo respaldan a tus herederos, sino que puedes recibir anticipos en vida si enfrentas un infarto, derrame o incapacidad grave.',
        },
        {
          q: '¿Tu negocio o auto resistiría un evento inesperado?',
          ans: 'En Puerto Rico, huracanes, sismos y accidentes viales son realidades constantes. Tener una póliza comercial o auto Full Cover bien estructurada evita la quiebra y acelera la recuperación inmediata.',
        },
      ],
      cta: 'Descubre qué tipo de protección necesitas',
    },

    // Carriers
    carriers: {
      eyebrow: 'RESPALDO CORPORATIVO',
      title: 'Trabajamos con las aseguradoras líderes de Puerto Rico',
      subtitle: 'Comparamos pólizas de múltiples compañías para encontrarte la mejor cobertura y precio.',
    },

    // Final CTA
    finalCta: {
      title: '¿Listo para proteger lo que más importa?',
      desc: 'Permítenos orientarte sin costo ni compromiso sobre las opciones que pueden cuidar tu salud, familia, patrimonio y futuro.',
      btnQuote: 'Solicita tu Cotización Gratis',
      btnWhatsapp: 'Escríbenos al WhatsApp',
      phoneText: 'O llámanos directamente al',
    },

    // About Page Full
    aboutPage: {
      heroTitle: 'Más que seguros. Una relación de confianza.',
      heroSubtitle: 'Fundada con la convicción de que cada familia y negocio en Puerto Rico merece una orientación honesta, transparente y humana.',
      storyTitle: 'Nuestra Historia',
      storyDesc: 'Un camino construido sobre la experiencia, la ética profesional y la lealtad a nuestros asegurados.',
      timeline: [
        {
          num: '01',
          title: 'Los Comienzos',
          desc: 'Inicios en el sector asegurador de Puerto Rico dentro de Triple-S Vida, conociendo de primera mano las necesidades reales de salud y vida de las familias puertorriqueñas.',
        },
        {
          num: '02',
          title: 'Experiencia y Formación',
          desc: 'Más de 3 años de servicio directo como especialistas, dominando los aspectos técnicos de pólizas de vida, cáncer, incapacidad y retiros.',
        },
        {
          num: '03',
          title: 'Paso a la Independencia',
          desc: 'Obtención de licencias completas y fundación de MV Insurance como agencia independiente, priorizando siempre el interés del cliente sobre una sola marca.',
        },
        {
          num: '04',
          title: 'Nuevas Oportunidades y Alianzas',
          desc: 'Ampliación del portafolio al aliarse con Universal, Multinational, Seguros Múltiples, Guardian, MAPFRE y One Alliance para ofrecer soluciones multirriesgo.',
        },
        {
          num: '05',
          title: 'Hoy',
          desc: 'Una agencia consolidada en Las Piedras con presencia en toda la isla, un equipo comprometido y cientos de pólizas activas cuidando el patrimonio de Puerto Rico.',
        },
      ],
      missionTitle: 'Nuestra Misión y Pilares',
      missionStatement: '“Ayudar a nuestros clientes a tomar decisiones informadas y seguras para proteger aquello que más valoran.”',
      pillars: [
        {
          title: 'Orientar',
          desc: 'Traducimos términos técnicos a explicaciones claras y sencillas. Te damos las herramientas para que tomes la mejor decisión.',
        },
        {
          title: 'Proteger',
          desc: 'Diseñamos planes robustos adaptados a tu presupuesto real, garantizando que tu póliza responda con efectividad en el momento de una reclamación.',
        },
        {
          title: 'Acompañar',
          desc: 'No desaparecemos después de la firma. Somos tu asesor personal durante renovaciones, cambios familiares y trámites de beneficios.',
        },
      ],
      teamTitle: 'Nuestro Equipo de Consultoras',
      teamDesc: 'Mujeres profesionales capacitadas y dedicadas a brindar un servicio ágil, empático y de alta precisión.',
    },

    // Business & Auto Page
    businessPage: {
      heroTitle: 'Protege lo que has construido con tanto esfuerzo.',
      heroSubtitle: 'Soluciones integrales de Auto Full Cover y Seguros Comerciales para proteger tus vehículos, operaciones y continuidad de negocio en Puerto Rico.',
      autoSection: {
        title: 'Seguro de Auto / Full Cover',
        subtitle: 'Cotiza con 5 estrellas de tranquilidad para tu vehículo personal o flota.',
        features: [
          'Cobertura contra Choque y Volcamiento (Collision)',
          'Cobertura Amplia contra Fuego, Hurto y Huracán (Comprehensive)',
          'Responsabilidad Pública por Daños a Terceros (Bodily Injury & Property Damage)',
          'Rotura de Cristales sin Deducible',
          'Asistencia en Carretera, Remolque y Cerrajería 24/7',
          'Opciones de Vehículo de Reemplazo durante reparación',
        ],
        cta: 'Cotizar Mi Auto',
      },
      commercialSection: {
        title: 'Seguro Comercial y Propiedad',
        subtitle: 'Blindaje integral ante riesgos que pueden paralizar tus operaciones.',
        cards: [
          {
            title: 'Propiedad Comercial',
            desc: 'Cubre tu edificio, mejoras al local, inventario, mobiliario y maquinaria contra fuegos, vandalismo, huracanes y terremotos.',
          },
          {
            title: 'Responsabilidad Pública (CGL)',
            desc: 'Protege tu empresa ante demandas de clientes o terceros por caídas, accidentes en tus facilidades o daños a propiedad ajena.',
          },
          {
            title: 'Interrupción de Negocio',
            desc: 'Recupera ingresos y mantén el pago de nómina mientras tu negocio se recupera de un evento catastrófico cubierto.',
          },
          {
            title: 'Flotas y Fianzas',
            desc: 'Pólizas de vehículos comerciales de trabajo y fianzas de cumplimiento para licitaciones y contratos en Puerto Rico.',
          },
        ],
        cta: 'Solicitar Asesoría Comercial',
      },
    },

    // Retirement Page
    retirementPage: {
      heroTitle: 'Tu futuro comienza hoy.',
      heroSubtitle: '¿Cómo imaginas tu jubilación? Te ayudamos a explorar opciones para prepararte para un retiro digno, con tranquilidad financiera y sin riesgo de mercado.',
      quoteBanner: '“Asegúrate. Piensa en modo futuro.”',
      quoteAuthor: 'Janet López · MV Insurance',
      timelineTitle: 'La Ruta hacia un Retiro Seguro',
      timelineSteps: [
        { step: '01', title: 'Hoy', desc: 'Analizamos tus finanzas actuales, metas y años restantes antes del retiro deseado.' },
        { step: '02', title: 'Planifica', desc: 'Diseñamos una estrategia a tu medida aprovechando instrumentos con diferimiento contributivo.' },
        { step: '03', title: 'Protege', desc: 'Blindamos tu capital: tu dinero nunca pierde valor por caídas o correcciones de la bolsa.' },
        { step: '04', title: 'Crece', desc: 'Tu dinero genera rendimientos compuestos a lo largo de los años de forma segura y consistente.' },
        { step: '05', title: 'Disfruta', desc: 'Recibe un flujo de ingresos garantizado de por vida para vivir tu jubilación con total plenitud.' },
      ],
      livingBenefitsTitle: 'Pólizas que te benefician en vida',
      livingBenefitsDesc: 'A diferencia de los seguros antiguos que solo se cobraban al fallecer, nuestras opciones de protección moderna te permiten acceder a tus beneficios en vida si te diagnostican una condición médica calificada o incapacidad severa.',
      cta: 'Habla con un asesor de retiro',
    },

    // Contact Page
    contactPage: {
      heroTitle: 'Estamos aquí para orientarte.',
      heroSubtitle: 'Cuéntanos qué tipo de protección estás buscando y Janet López o nuestro equipo se comunicará contigo rápidamente.',
      form: {
        title: 'Solicitar Cotización y Orientación Gratuita',
        firstName: 'Nombre *',
        lastName: 'Apellido',
        phone: 'Teléfono *',
        email: 'Correo Electrónico',
        insuranceType: '¿Qué tipo de seguro buscas? *',
        preferredContact: 'Método preferido de contacto',
        contactWhatsApp: 'WhatsApp',
        contactPhone: 'Llamada telefónica',
        contactEmail: 'Correo electrónico',
        notes: 'Comentarios o detalles adicionales',
        notesPlaceholder: 'Ej: Año y modelo de auto, cuántos miembros en la familia, etc.',
        consent: 'Autorizo a MV Insurance a utilizar la información proporcionada para comunicarse conmigo y brindarme orientación personalizada.',
        submitBtn: 'Solicitar Orientación Ahora',
        sending: 'Enviando solicitud...',
        successTitle: '¡Solicitud Recibida con Éxito!',
        successMsg: 'Gracias por confiar en MV Insurance. Janet López o una de nuestras asesoras te responderá muy pronto. ¿Deseas agilizar tu cotización por WhatsApp ahora mismo?',
        continueWhatsapp: 'Abrir Chat en WhatsApp',
      },
      directCards: {
        phoneTitle: 'Teléfonos Directos',
        phoneJanet: '786-356-5990 (Janet López)',
        phoneOffice: '787-710-1313 (Oficina)',
        emailTitle: 'Correo Electrónico',
        emailMain: 'oficina@mvinsurancespr.com',
        emailAlt: 'jlinsurance2025@gmail.com',
        officeTitle: 'Oficina Central',
        address: '4 Calle Ramos Antonini, Las Piedras, Puerto Rico 00771',
        hoursTitle: 'Horario de Atención',
        hours: 'Lunes a Viernes: 8:30 AM – 5:30 PM | Sábados: 9:00 AM – 1:00 PM',
      },
      faqTitle: 'Preguntas Frecuentes sobre Seguros en Puerto Rico',
      faqs: [
        {
          q: '¿La orientación y cotización tienen algún costo?',
          a: 'No. En MV Insurance todas las consultas, comparativas de seguros y cotizaciones son 100% gratuitas y sin ningún compromiso de compra.',
        },
        {
          q: '¿Puedo asegurar mi vehículo si está financiado en el banco?',
          a: 'Sí, absolutamente. Trabajamos pólizas Full Cover que cumplen con todos los requerimientos de bancos y cooperativas de Puerto Rico, a menudo con primas más accesibles que las que impone el banco.',
        },
        {
          q: '¿Qué diferencia hay entre un seguro de cáncer y el plan médico general?',
          a: 'El plan médico le paga a médicos y hospitales con deducibles. El seguro de cáncer te entrega dinero en efectivo directo a ti para que lo uses en lo que necesites: gastos del hogar, viajes a citas o medicamentos de alto costo.',
        },
        {
          q: '¿Qué son los beneficios en vida de una póliza de seguro?',
          a: 'Son cláusulas que te permiten adelantar parte de la suma asegurada de tu póliza de vida en caso de enfermedad terminal, cáncer invasivo, derrame cerebral o incapacidad prolongada.',
        },
        {
          q: '¿Atienden clientes fuera del área de Las Piedras?',
          a: 'Sí, brindamos servicio en los 78 municipios de Puerto Rico tanto de forma presencial como telefónica y digital.',
        },
      ],
    },

    // Footer
    footer: {
      tagline: 'Soluciones de seguros diseñadas a la medida de tu vida, familia y empresa en Puerto Rico.',
      productsTitle: 'Seguros',
      companyTitle: 'Empresa',
      contactTitle: 'Contacto',
      rights: '© 2026 MV Insurance. Todos los derechos reservados.',
      privacy: 'Política de Privacidad',
      terms: 'Términos y Condiciones',
      licenseNote: 'Janet López · Agente Licenciada de Seguros en el Estado Libre Asociado de Puerto Rico.',
    },
  },

  en: {
    // Nav
    nav: {
      home: 'Home',
      about: 'About Us',
      insurance: 'Insurance Solutions',
      business: 'Business & Auto',
      retirement: 'Retirement & Future',
      contact: 'Get a Quote',
      quoteBtn: 'Get a Quote',
      agentBadge: 'Licensed Agent',
      mobileCall: 'Call',
      mobileWhatsapp: 'WhatsApp',
      mobileQuote: 'Quote',
    },

    // Hero
    hero: {
      eyebrow: 'LEADING INSURANCE AGENCY IN PUERTO RICO',
      title: 'Protect what matters most.',
      subtitle:
        'Insurance solutions crafted to protect your health, family, assets, and future, backed by top-rated carriers in Puerto Rico.',
      quoteCta: 'Get a Quote Now',
      talkJanetCta: 'Talk with Janet',
      trustPills: 'Personalized guidance · Professional advice · Tailored solutions',
      agentCard: {
        name: 'Janet López',
        role: 'Licensed Insurance Agent',
        phone: '786-356-5990',
        directHelp: 'Free consultation in Puerto Rico',
      },
    },

    // Trust Bar
    trustBar: {
      heading: 'Why choose MV Insurance?',
      items: [
        {
          title: 'Proven Experience',
          desc: 'Over 8 years in the insurance industry safeguarding families and businesses in Puerto Rico.',
          icon: 'shield-check',
        },
        {
          title: 'Personalized Advice',
          desc: 'We do not just sell policies. We take the time to explain every benefit and clause with transparency.',
          icon: 'user-check',
        },
        {
          title: 'Comprehensive Coverage',
          desc: 'Health, Cancer, Life, Auto Full Cover, Commercial Property, and Retirement Plans.',
          icon: 'layers',
        },
        {
          title: 'Direct Human Support',
          desc: 'Talk directly with a friendly, knowledgeable advisor. No frustrating automated phone trees.',
          icon: 'phone-call',
        },
      ],
    },

    // Products
    products: {
      title: 'Find the protection you need',
      subtitle: 'Coverages designed for every milestone in your personal, family, and professional life.',
      learnMore: 'Learn More',
      getQuote: 'Request Quote',
      filterAll: 'All',
      filterPersonal: 'Personal',
      filterFamily: 'Family',
      filterVehicle: 'Vehicles',
      filterBusiness: 'Business',
      filterFuture: 'Future',
      items: [
        {
          id: 'health',
          category: 'personal',
          title: 'Health Plans',
          shortDesc: 'Comprehensive medical coverage to protect your health and your family against medical emergencies.',
          fullDesc: 'Healthcare costs continue to rise and medical insurance is a non-negotiable basic necessity. We guide you across available benefit options, copays, and premiums with Puerto Rico’s top providers.',
          features: ['Inpatient and outpatient coverage', 'Prescription pharmacy benefits', 'Individual and family plans', 'Broad specialist network in PR'],
          badge: 'Essential',
        },
        {
          id: 'cancer',
          category: 'family',
          title: 'Cancer Insurance',
          shortDesc: 'Over 40 available benefits to support diagnostic and treatment expenses directly.',
          fullDesc: 'A medical diagnosis should never jeopardize your savings or your family’s financial future. This policy provides direct cash payments to cover travel, hospital stays, chemotherapy, and out-of-pocket costs.',
          features: ['Over 40 indemnity benefits', 'Direct cash payments to policyholder', 'Coverage for spouse and children', 'First-occurrence lump sum benefits'],
          badge: 'High Demand',
        },
        {
          id: 'life',
          category: 'future',
          title: 'Life Insurance',
          shortDesc: 'Safeguard the financial stability of those you love most, with modern living benefits.',
          fullDesc: 'Modern life insurance is not only for when you pass away: it protects you in life against critical, chronic, or terminal illness, while leaving lasting financial peace for your family.',
          features: ['Term and permanent whole life policies', 'Living benefit rider clauses', 'Guaranteed mortgage protection', 'Cash-value accumulation options'],
          badge: 'Living Benefits',
        },
        {
          id: 'auto',
          category: 'vehicle',
          title: 'Auto Insurance / Full Cover',
          shortDesc: 'Protect your vehicle with full coverage options customized to your vehicle model and budget.',
          fullDesc: 'We quote your Full Cover directly with Universal, Multinational, Seguros Múltiples, Guardian, and MAPFRE to get you the most competitive rate for collision, theft, glass breakage, and 24/7 roadside assistance.',
          features: ['Collision and comprehensive coverage', 'Bodily injury & property damage liability', '24/7 roadside assistance & towing', 'Fast claims processing'],
          badge: '5 Stars',
        },
        {
          id: 'property',
          category: 'business',
          title: 'Property & Commercial Insurance',
          shortDesc: 'Protect your business, commercial facility, and assets against hurricanes, earthquakes, and lawsuits.',
          fullDesc: 'Shield your physical investment, inventory, machinery, and legal responsibilities against severe weather and unforeseen business disruptions in Puerto Rico.',
          features: ['Hurricane & earthquake protection', 'Commercial General Liability (CGL)', 'Business interruption income loss', 'Commercial surety bonds'],
          badge: 'Commercial',
        },
        {
          id: 'travel',
          category: 'personal',
          title: 'Travel Insurance',
          shortDesc: 'Travel with complete peace of mind inside and outside Puerto Rico with 24/7 medical assistance.',
          fullDesc: 'International emergency protection backed by One Alliance Travel Assist for trip cancellations, lost baggage, medical emergencies, and medical evacuation.',
          features: ['International emergency medical expenses', 'Lost luggage & flight delay coverage', 'Medical evacuation & repatriation', '24/7 multilingual support'],
          badge: 'Global',
        },
        {
          id: 'retirement',
          category: 'future',
          title: 'Retirement Plans',
          shortDesc: 'Prepare today to enjoy the retirement you envision with safe growth and zero market loss risks.',
          fullDesc: 'We structure annuities and tax-advantaged savings vehicles designed to deliver guaranteed lifetime income streams when you decide to finish your working years.',
          features: ['Principal protection against market dips', 'Indexed interest growth potential', 'Guaranteed lifetime income stream', 'Expert retirement advisory in PR'],
          badge: 'Future Mode',
        },
        {
          id: 'disability',
          category: 'personal',
          title: 'Disability Insurance',
          shortDesc: 'We back you up when an unexpected injury or illness prevents you from working and earning.',
          fullDesc: 'Protects your ability to pay your mortgage, grocery expenses, and daily bills if a temporary or extended disability strikes.',
          features: ['Income replacement percentage', 'Flexible elimination periods', 'On-and-off-the-job coverage', 'Peace of mind for self-employed professionals'],
          badge: 'Income Shield',
        },
      ],
    },

    // About intro on Home
    storyIntro: {
      eyebrow: 'OUR PHILOSOPHY',
      title: 'We do not just sell insurance. We help protect your future.',
      p1: 'At MV Insurance, we believe choosing an insurance policy should never feel like deciphering fine print. Our mission is to guide you patiently, explain every option, and connect you with coverage that truly responds when you need it.',
      p2: 'We are an independent agency based in Las Piedras, Puerto Rico, with over 8 years of industry experience and strategic partnerships with the island’s most reputable insurance carriers.',
      cta: 'Explore our full story',
      stats: [
        { label: 'Years of Experience', value: '8+' },
        { label: 'Carrier Partners', value: '6+' },
        { label: 'Families Advised', value: '1,500+' },
        { label: 'Municipalities Served', value: '78' },
      ],
    },

    // Janet Section
    janet: {
      eyebrow: 'WARM & PERSONAL GUIDANCE',
      title: 'Meet Janet López',
      subtitle: 'Your Personal Insurance Advisor',
      quote1: '“Having insurance is not an option. It is an essential necessity.”',
      quote2: '“Today you make the decision; tomorrow your peace of mind and the ones you love will thank you.”',
      quote3: '“Your health can change. Your protection should change with it.”',
      bio: 'With over 8 years of dedicated experience in the insurance industry and a genuine commitment to her clients, Janet López works every day to deliver clear, honest, and tailored guidance across every stage of life.',
      phone: '786-356-5990',
      officePhone: '787-710-1313',
      email: 'oficina@mvinsurancespr.com',
      callBtn: 'Call Janet',
      whatsappBtn: 'Chat on WhatsApp',
    },

    // Education
    education: {
      eyebrow: 'FINANCIAL EDUCATION & PROTECTION',
      title: 'Did you know...?',
      subtitle: 'Three key questions every person in Puerto Rico should consider today.',
      cards: [
        {
          q: 'Does your primary health plan cover everything you need?',
          ans: 'High deductibles and coinsurance on specialized treatments can deplete family savings in weeks. A supplemental cancer or hospital policy delivers tax-free cash directly into your hands for living and non-medical costs.',
        },
        {
          q: 'What would happen to your family without your income?',
          ans: 'Modern life policies include living benefit riders. This means you do not have to pass away to benefit: you can access cash advances during your lifetime if you face a heart attack, stroke, or chronic illness.',
        },
        {
          q: 'Could your business or car withstand an unexpected storm?',
          ans: 'In Puerto Rico, hurricanes, seismic events, and road collisions are real threats. Having a properly structured commercial policy or Full Cover prevents catastrophic loss and accelerates recovery.',
        },
      ],
      cta: 'Discover what protection fits you',
    },

    // Carriers
    carriers: {
      eyebrow: 'CORPORATE BACKING',
      title: 'Backed by Puerto Rico’s Premier Insurance Carriers',
      subtitle: 'We compare multiple top-rated companies to ensure you get optimal coverage and competitive premiums.',
    },

    // Final CTA
    finalCta: {
      title: 'Ready to protect what matters most?',
      desc: 'Allow us to guide you with zero obligation on the best options to protect your health, family, property, and future.',
      btnQuote: 'Request Free Quote',
      btnWhatsapp: 'Chat on WhatsApp',
      phoneText: 'Or call us directly at',
    },

    // About Page Full
    aboutPage: {
      heroTitle: 'More than insurance. A relationship built on trust.',
      heroSubtitle: 'Founded on the conviction that every family and business in Puerto Rico deserves honest, transparent, and empathetic guidance.',
      storyTitle: 'Our Story',
      storyDesc: 'A path founded on experience, professional ethics, and unwavering loyalty to our policyholders.',
      timeline: [
        {
          num: '01',
          title: 'The Beginnings',
          desc: 'Started in Puerto Rico’s insurance sector with Triple-S Vida, learning first-hand the real health and life protection needs of local families.',
        },
        {
          num: '02',
          title: 'Experience & Mastery',
          desc: 'Over 3 years of dedicated service as direct specialists, mastering the technical aspects of life, cancer, disability, and retirement plans.',
        },
        {
          num: '03',
          title: 'The Step into Independence',
          desc: 'Secured full broker licensing and founded MV Insurance as an independent agency, prioritizing client needs over single-carrier quotas.',
        },
        {
          num: '04',
          title: 'Expanded Carrier Partnerships',
          desc: 'Expanded our portfolio by partnering with Universal, Multinational, Seguros Múltiples, Guardian, MAPFRE, and One Alliance for multi-line security.',
        },
        {
          num: '05',
          title: 'Today',
          desc: 'A respected agency based in Las Piedras serving all 78 municipalities in Puerto Rico, with hundreds of active policies safeguarding our community.',
        },
      ],
      missionTitle: 'Our Mission & Pillars',
      missionStatement: '“To empower our clients to make informed, confident decisions to safeguard what they value most.”',
      pillars: [
        {
          title: 'Guide',
          desc: 'We translate complex policy jargon into simple, clear explanations, giving you clarity to make the right choice.',
        },
        {
          title: 'Protect',
          desc: 'We structure robust coverage aligned with your real budget, ensuring your policy genuinely responds when claims happen.',
        },
        {
          title: 'Accompany',
          desc: 'We do not vanish after the signature. We are your personal advocate throughout renewals, family life transitions, and claims processing.',
        },
      ],
      teamTitle: 'Our Team of Advisors',
      teamDesc: 'Skilled female professionals dedicated to prompt, compassionate, and precise insurance advisory.',
    },

    // Business & Auto Page
    businessPage: {
      heroTitle: 'Protect what you have worked so hard to build.',
      heroSubtitle: 'Comprehensive Auto Full Cover and Commercial Property solutions to safeguard your vehicles, operations, and business continuity in Puerto Rico.',
      autoSection: {
        title: 'Auto Insurance / Full Cover',
        subtitle: '5-star peace of mind for your personal car or commercial fleet.',
        features: [
          'Collision and rollover protection',
          'Comprehensive protection against fire, theft, and hurricanes',
          'Third-party Bodily Injury & Property Damage Liability',
          'Zero-deductible glass breakage',
          '24/7 roadside assistance, towing, and locksmith service',
          'Rental car reimbursement options during covered repairs',
        ],
        cta: 'Quote My Vehicle',
      },
      commercialSection: {
        title: 'Commercial & Property Insurance',
        subtitle: 'Comprehensive protection against perils that can halt your operations.',
        cards: [
          {
            title: 'Commercial Property',
            desc: 'Covers your building, tenant improvements, inventory, equipment, and furnishings against fire, vandalism, hurricanes, and earthquakes.',
          },
          {
            title: 'Commercial General Liability (CGL)',
            desc: 'Protects your company against third-party lawsuits alleging slips, falls, premises injuries, or property damage.',
          },
          {
            title: 'Business Interruption',
            desc: 'Replaces lost operating income and keeps payroll afloat while your business recovers from a covered catastrophic event.',
          },
          {
            title: 'Commercial Fleets & Bonds',
            desc: 'Policies for commercial work vehicles and surety compliance bonds for bidding and construction contracts in Puerto Rico.',
          },
        ],
        cta: 'Request Commercial Advisory',
      },
    },

    // Retirement Page
    retirementPage: {
      heroTitle: 'Your future starts today.',
      heroSubtitle: 'How do you picture your retirement? We help you explore options to prepare for dignified retirement, complete financial tranquility, and zero market loss risk.',
      quoteBanner: '“Get insured. Think in future mode.”',
      quoteAuthor: 'Janet López · MV Insurance',
      timelineTitle: 'The Roadmap to a Secure Retirement',
      timelineSteps: [
        { step: '01', title: 'Today', desc: 'We assess your current financial status, savings goals, and timeline until your desired retirement.' },
        { step: '02', title: 'Plan', desc: 'We design a tailored strategy taking advantage of tax-deferred accumulation instruments.' },
        { step: '03', title: 'Protect', desc: 'We protect your principal: your savings are never exposed to market downturns or stock crashes.' },
        { step: '04', title: 'Grow', desc: 'Your money compounds safely and predictably over time.' },
        { step: '05', title: 'Enjoy', desc: 'Receive a guaranteed lifetime income stream so you can enjoy your retirement with total freedom.' },
      ],
      livingBenefitsTitle: 'Policies that benefit you while alive',
      livingBenefitsDesc: 'Unlike old-fashioned policies that only paid out upon death, our modern life solutions grant you access to your benefits during your lifetime if you encounter a qualified critical illness or severe disability.',
      cta: 'Talk with a Retirement Advisor',
    },

    // Contact Page
    contactPage: {
      heroTitle: 'We are here to guide you.',
      heroSubtitle: 'Tell us what protection you are looking for, and Janet López or our team will get in touch promptly.',
      form: {
        title: 'Request a Free Quote & Guidance',
        firstName: 'First Name *',
        lastName: 'Last Name',
        phone: 'Phone *',
        email: 'Email Address',
        insuranceType: 'What type of insurance do you need? *',
        preferredContact: 'Preferred contact method',
        contactWhatsApp: 'WhatsApp',
        contactPhone: 'Phone call',
        contactEmail: 'Email',
        notes: 'Additional details or comments',
        notesPlaceholder: 'E.g., Vehicle year & model, number of family members, etc.',
        consent: 'I authorize MV Insurance to use the provided information to contact me and provide personalized guidance.',
        submitBtn: 'Request Guidance Now',
        sending: 'Submitting request...',
        successTitle: 'Request Received Successfully!',
        successMsg: 'Thank you for trusting MV Insurance. Janet López or one of our advisors will respond shortly. Would you like to speed up your quote on WhatsApp right now?',
        continueWhatsapp: 'Open WhatsApp Chat',
      },
      directCards: {
        phoneTitle: 'Direct Phone Lines',
        phoneJanet: '786-356-5990 (Janet López)',
        phoneOffice: '787-710-1313 (Main Office)',
        emailTitle: 'Email Addresses',
        emailMain: 'oficina@mvinsurancespr.com',
        emailAlt: 'jlinsurance2025@gmail.com',
        officeTitle: 'Central Office',
        address: '4 Calle Ramos Antonini, Las Piedras, Puerto Rico 00771',
        hoursTitle: 'Operating Hours',
        hours: 'Monday to Friday: 8:30 AM – 5:30 PM | Saturday: 9:00 AM – 1:00 PM',
      },
      faqTitle: 'Frequently Asked Questions about Insurance in Puerto Rico',
      faqs: [
        {
          q: 'Does consultation and quotation cost anything?',
          a: 'No. At MV Insurance, all consultations, policy comparisons, and quotes are 100% free with no purchase obligation.',
        },
        {
          q: 'Can I insure my car if it is financed through a bank or credit union?',
          a: 'Yes, absolutely. We write Full Cover policies that satisfy all requirements of banks and cooperativas across Puerto Rico, often at much better rates than standard lender-placed policies.',
        },
        {
          q: 'How does cancer insurance differ from a standard health plan?',
          a: 'Health insurance pays doctors and hospitals with deductibles. Cancer insurance delivers direct tax-free cash into your hands so you can cover travel, household expenses, or specialized medications without stress.',
        },
        {
          q: 'What are living benefits in a life insurance policy?',
          a: 'Living benefit riders allow you to accelerate part of your life insurance death benefit while still living if diagnosed with a qualifying terminal illness, invasive cancer, stroke, or extended disability.',
        },
        {
          q: 'Do you serve clients outside of Las Piedras?',
          a: 'Yes, we actively serve clients across all 78 municipalities in Puerto Rico via phone, virtual consultation, and in-person visits.',
        },
      ],
    },

    // Footer
    footer: {
      tagline: 'Insurance solutions tailored to your life, family, and business across Puerto Rico.',
      productsTitle: 'Insurance',
      companyTitle: 'Company',
      contactTitle: 'Contact',
      rights: '© 2026 MV Insurance. All Rights Reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      licenseNote: 'Janet López · Licensed Insurance Agent in the Commonwealth of Puerto Rico.',
    },
  },
};
