/**
 * Free Real Stock Photos (Unsplash High-Resolution CDN & Local Backups)
 * Used across the website to present authentic, realistic photography
 * instead of vector/cartoon illustrations.
 */

export const stockPhotos = {
  // Hero & Background Banners
  autoHero: {
    primary: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=85', // Luxury dark/silver sedan on modern road
    secondary: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1920&q=85', // Modern sleek vehicle on scenic highway
    local: '/images/auto-hero-bg.jpg',
  },
  lifestyleSunset: {
    primary: '/images/hero-woman-sunset.jpg',
    secondary: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85', // Warm Caribbean tropical sunset
    local: '/images/hero-sunset.jpg',
  },
  teamHero: {
    primary: '/images/team-advisors.jpg',
    secondary: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=85', // Professional women advisory team
    local: '/images/team-banner.jpg',
  },
  retirementHero: {
    primary: '/images/retirement-peace.jpg',
    secondary: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1600&q=85', // Happy smiling senior couple relaxing by the coast
    local: '/images/retirement-peace.jpg',
  },
  commercialHero: {
    primary: '/images/commercial-building.jpg',
    secondary: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85', // Modern architectural glass commercial building
    local: '/images/commercial-building.jpg',
  },
  familyProtectionHero: {
    primary: '/images/family-protection.jpg',
    secondary: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=85', // Real family smiling together outdoors
    local: '/images/family-protection.jpg',
  },
  ctaBackground: {
    primary: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1920&q=85', // Confident professional executive in modern architectural setting
    secondary: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=85',
  },

  // Product Cards (Real, High-Fidelity Photography)
  products: {
    health: {
      url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80', // Real doctor consultation with patient
      fallback: '/images/health-medical.jpg',
      alt: 'Plan Médico y Salud Integral en Puerto Rico',
    },
    cancer: {
      url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=900&q=80', // Compassionate medical care & patient support
      fallback: '/images/health-medical.jpg',
      alt: 'Póliza de Cáncer con 40+ Beneficios en Vida',
    },
    life: {
      url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=80', // Real happy loving family hugging outdoors
      fallback: '/images/family-protection.jpg',
      alt: 'Seguro de Vida con Beneficios en Vida',
    },
    auto: {
      url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80', // Sleek modern luxury car on the road
      fallback: '/images/auto-full-cover.jpg',
      alt: 'Seguro de Auto Full Cover 100% Puerto Rico',
    },
    property: {
      url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80', // Modern commercial corporate architecture
      fallback: '/images/commercial-building.jpg',
      alt: 'Seguro de Propiedad y Negocio Comercial',
    },
    travel: {
      url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80', // Passenger flight & airport international travel
      fallback: '/images/travel-plane.jpg',
      alt: 'Seguro de Asistencia de Viaje Internacional',
    },
    retirement: {
      url: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=900&q=80', // Real joyful retired couple by sunny beach
      fallback: '/images/retirement-peace.jpg',
      alt: 'Plan de Retiro y Crecimiento Seguro en Modo Futuro',
    },
    disability: {
      url: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80', // Rehabilitation and physical recovery with dignity
      fallback: '/images/health-medical.jpg',
      alt: 'Seguro de Incapacidad y Reemplazo de Ingresos',
    },
  },

  // Educational Cards (¿Sabías que...?)
  education: [
    {
      url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80', // Modern driving and automobile safety
      alt: 'Diferencia entre Compulsorio y Full Cover',
    },
    {
      url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80', // Caring doctor checking patient record
      alt: 'Póliza de Cáncer y Beneficios en Vida',
    },
    {
      url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80', // Financial planning and pension growth
      alt: 'Planificación de Retiro e Interés Compuesto',
    },
  ],

  // Real Customer Testimonials & Case Studies
  testimonials: [
    {
      name: 'Carmen R. Morales',
      location: 'Caguas, PR',
      insurance: 'Full Cover Auto & Cáncer',
      quote:
        'Tras el huracán y un choque inesperado, Janet se encargó de todo el trámite con Universal en menos de 48 horas. Jamás había tenido una atención tan humana y rápida.',
      avatarUrl:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80',
      rating: 5,
    },
    {
      name: 'Ing. Héctor Rivera',
      location: 'Humacao, PR',
      insurance: 'Propiedad Comercial (CGL)',
      quote:
        'Para mi ferretería y almacén necesitaba pólizas exigidas por el banco. Janet comparó con MAPFRE y Multinational y me ahorró más de $1,400 anuales.',
      avatarUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80',
      rating: 5,
    },
    {
      name: 'Dra. Vanessa Ortiz',
      location: 'San Juan, PR',
      insurance: 'Retiro Modo Futuro & Vida',
      quote:
        'Estructuramos un plan de retiro indexado libre de pérdidas bursátiles. Su asesoría fue transparente, sin presiones y con total dominio del mercado de Puerto Rico.',
      avatarUrl:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300&q=80',
      rating: 5,
    },
  ],

  // Janet López (Founder/CEO/Agent - Authentic Uploaded Photo)
  janet: {
    official: '/images/janet-lopez.png',
    consulting: '/images/janet-lopez.png',
    originalUploadOfficial: '/Janet López.png',
    originalUploadConsulting: '/Janet López.png',
  },

  // Free Hero Stock Videos (Local MP4 with remote CDN fallbacks)
  heroVideos: [
    {
      id: 'road',
      title: { es: 'Ruta Panorámica', en: 'Scenic Mountain Road' },
      url: '/videos/hero-road.mp4',
      remoteFallback: 'https://cdn.coverr.co/videos/coverr-a-road-through-the-hills-6377/720p.mp4',
      poster: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=85',
    },
    {
      id: 'sunrise',
      title: { es: 'Atardecer & Paz', en: 'Golden Sunset & Peace' },
      url: '/videos/hero-sunrise.mp4',
      remoteFallback: 'https://cdn.coverr.co/videos/coverr-sunrise-in-costa-rica-1299/720p.mp4',
      poster: '/images/hero-woman-sunset.jpg',
    },
    {
      id: 'car',
      title: { es: 'Auto en Autopista', en: 'Highway Car Drive' },
      url: '/videos/hero-car.mp4',
      remoteFallback: 'https://cdn.coverr.co/videos/coverr-red-ford-gt-car-7551/720p.mp4',
      poster: '/images/auto-hero-bg.jpg',
    },
  ],

  // Free Real Stock Photo Slides for Hero Background Slider
  heroSlides: [
    {
      id: 'family',
      imageUrl: '/images/family-protection.jpg',
      fallbackUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1920&q=85',
      title: { es: 'Protección para tu Familia', en: 'Protection for your Family' },
      badge: { es: 'Familia & Vida', en: 'Family & Life' },
      caption: { es: 'Pólizas de vida y salud que respaldan a quienes más amas en vida.', en: 'Life & health policies supporting your loved ones in life.' },
    },
    {
      id: 'auto',
      imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=85',
      fallbackUrl: '/images/auto-hero-bg.jpg',
      title: { es: 'Seguro de Auto Full Cover', en: 'Full Cover Auto Insurance' },
      badge: { es: 'Auto 100% PR', en: 'Auto 100% PR' },
      caption: { es: 'Protección completa ante choques, hurto, huracán y cristales.', en: 'Full collision, storm, theft and glass breakage protection.' },
    },
    {
      id: 'retirement',
      imageUrl: '/images/retirement-peace.jpg',
      fallbackUrl: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1920&q=85',
      title: { es: 'Plan de Retiro Modo Futuro', en: 'Future-Mode Retirement Plan' },
      badge: { es: 'Retiro & Ahorro', en: 'Retirement & Savings' },
      caption: { es: 'Construye un capital seguro sin riesgo de pérdida en el mercado.', en: 'Build safe wealth without stock market volatility.' },
    },
    {
      id: 'lifestyle',
      imageUrl: '/images/hero-woman-sunset.jpg',
      fallbackUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85',
      title: { es: 'Paz Mental y Tranquilidad', en: 'Peace of Mind & Tranquility' },
      badge: { es: 'Tranquilidad Total', en: 'Total Peace' },
      caption: { es: 'Más de 8 años guiando a Puerto Rico con honestidad y calor humano.', en: 'Over 8 years guiding Puerto Rico with honesty and human warmth.' },
    },
  ],
};
