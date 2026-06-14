export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  logo: string;
  liveUrl?: string;
  repoUrl?: string;
  category: 'featured' | 'ai' | 'professional';
  tags: string[];
};

export const projects: Project[] = [
  {
    id: 'mindspace-studio',
    title: 'MindSpace Studio',
    description:
      'A high-end architectural and interior design portfolio featuring a minimal, immersive aesthetic. The site includes a strategic service offering, a team showcase, and an interactive "Visual Atelier" for atmosphere exploration, built with Next.js, Three.js, and Framer Motion to create a seamless, premium user experience.',
    image: '/assets/images/mind.png',
    logo: '/assets/images/logo_mind.png',
    liveUrl: 'https://arhitecture-design-app.vercel.app/',
    repoUrl: 'https://github.com/Andrei1loc1/arhitecture-design-app',
    category: 'featured',
    tags: ['Next.js', 'Three.js', 'Framer Motion', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'nutri-track-ai-vision',
    title: 'NutriTrack AI Vision',
    description:
      'An advanced AI-powered nutritional analysis tool that leverages computer vision to identify food items and estimate caloric intake. The application provides real-time dietary insights, health reports, and personalized nutrition tracking to help users maintain a healthy lifestyle through an intuitive visual interface.',
    image: '/assets/images/nutri_captura.png',
    logo: '/assets/images/nutri_logo.png',
    liveUrl: 'https://nutri-track-ai-vision.vercel.app/',
    repoUrl: 'https://github.com/Andrei1loc1/NutriTrack-AI-Vision',
    category: 'featured',
    tags: ['AI', 'Computer Vision', 'React', 'TypeScript'],
  },
  {
    id: 'threatMap',
    title: 'ThreatMap',
    description:
      'A cybersecurity monitoring tool that transforms raw security logs into a 3D interactive visual experience. It uses Java/Spring Boot for brute-force detection and an Electron/React frontend with Mapbox to visualize global attack vectors, integrated with AI for real-time risk assessment.',
    image: '/assets/images/ThreatMap.png',
    logo: '/assets/images/threat_logo.png',
    liveUrl: 'https://github.com/Andrei1loc1/ThreatMap/tree/main',
    repoUrl: 'https://github.com/Andrei1loc1/ThreatMap/tree/main',
    category: 'featured',
    tags: ['Java', 'Spring Boot', 'Electron', 'React', 'Mapbox', 'AI'],
  },
  {
    id: 'ai-multi-model',
    title: 'AI Multi-model',
    description:
      'A unified AI hub that integrates multiple LLMs through OpenRouter, allowing users to switch between models like Grok, Llama, Gemini, and DeepSeek in a single interface. Designed for high-productivity research and comparative AI analysis with a clean, intuitive UX.',
    image: '/assets/images/AI_capture.png',
    logo: '/assets/images/M_logo.png',
    liveUrl: 'https://ai-multi-model.vercel.app/',
    repoUrl: 'https://github.com/Andrei1loc1/ai-multi-model',
    category: 'ai',
    tags: ['Next.js', 'OpenRouter', 'LLMs', 'TypeScript'],
  },
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer',
    description:
      'An intelligent ATS-optimizing tool that analyzes resumes using AI to identify strengths, weaknesses, and keyword gaps. It provides users with a performance score and actionable optimization tips to increase their visibility to recruiters and pass automated tracking systems.',
    image: '/assets/images/captura_resumind.png',
    logo: '/assets/images/logo_resumind.png',
    liveUrl: 'https://ai-resume-analyzer-azure-omega.vercel.app/',
    repoUrl: 'https://github.com/Andrei1loc1/ai-resume-analyzer',
    category: 'ai',
    tags: ['AI', 'ATS', 'React', 'TypeScript'],
  },
  {
    id: 'booking-app',
    title: 'Fullstack SaaS Template',
    description:
      'A production-ready, multi-tenant SaaS boilerplate for appointment-based businesses. Featuring dedicated Firebase project isolation per client, a centralized configuration system for rapid branding, and a scalable architecture designed for rapid deployment of branded service instances.',
    image: '/assets/images/booking_capture.png',
    logo: '/assets/images/booking_logo.png',
    liveUrl: 'https://booking-salon-template.vercel.app/',
    repoUrl: 'https://github.com/Andrei1loc1/BOOKING_SALON_TEMPLATE',
    category: 'professional',
    tags: ['Firebase', 'Next.js', 'SaaS', 'Multi-tenancy'],
  },
  {
    id: 'playProcessor',
    title: 'Campaign Play Processor',
    description:
      'A full-stack simulation system for asynchronous campaign event processing. It features a Node.js/Express event-queue backend and a glassmorphism React dashboard for real-time monitoring of campaign plays and screen performance, mimicking a professional digital signage control room.',
    image: '/assets/images/playprocessor.png',
    logo: '/assets/images/procesLogo.jpg',
    liveUrl: 'https://github.com/Andrei1loc1/campaign-play-processor',
    repoUrl: 'https://github.com/Andrei1loc1/campaign-play-processor',
    category: 'professional',
    tags: ['Node.js', 'Express', 'React', 'Vite', 'Asynchronous'],
  },
  {
    id: 'financial-app',
    title: 'Financial App',
    description:
      'A comprehensive personal finance manager that combines real-time expense tracking with AI-driven budgeting insights. The app features interactive data visualizations and gamification elements to encourage healthy spending habits and long-term financial planning.',
    image: '/assets/images/financial_captura.png',
    logo: '/assets/images/logo.png',
    liveUrl: 'https://financialapp-gules.vercel.app/',
    repoUrl: 'https://github.com/Andrei1loc1/financialapp/tree/main',
    category: 'professional',
    tags: ['AI', 'Data Visualization', 'React', 'TypeScript'],
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description:
      'A sleek, responsive weather application providing hyper-local forecasts and real-time conditions. It leverages precise geolocation and global weather APIs to deliver hourly updates, humidity, and wind data through a polished, modern interface.',
    image: '/assets/images/captura_wheather_app.png',
    logo: '/assets/images/logo_weather.jpg',
    liveUrl: 'https://weather-app-mocha-ten-63.vercel.app/',
    repoUrl: 'https://github.com/Andrei1loc1/WeatherApp/tree/main/frontend',
    category: 'professional',
    tags: ['React', 'Geolocation', 'Weather API'],
  },
];
