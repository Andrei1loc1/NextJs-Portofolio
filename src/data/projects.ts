export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  logo: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer',
    description:
      'Resumind is a web application that uses AI to evaluate resumes, highlight strengths and weaknesses, and provide actionable optimization suggestions. Users can upload their resumes and receive a score along with concrete tips to improve their chances with applicant tracking systems (ATS) and recruiters.',
    image: '/assets/images/captura_resumind.png',
    logo: '/assets/images/logo_resumind.png',
    liveUrl: 'https://ai-resume-analyzer-azure-omega.vercel.app/',
    repoUrl: 'https://github.com/Andrei1loc1/ai-resume-analyzer',
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description:
      'This is a responsive web app that provides fast, accurate local weather information. Users can search by city or allow location access to see current conditions, hourly and daily forecasts, and useful details like humidity, wind speed, and sunrise and sunset times - all presented in a clean, easy-to-read interface.',
    image: '/assets/images/captura_wheather_app.png',
    logo: '/assets/images/logo_weather.jpg',
    liveUrl: 'https://weather-app-mocha-ten-63.vercel.app/',
    repoUrl: 'https://github.com/Andrei1loc1/WeatherApp/tree/main/frontend',
  },
  {
    id: 'fitmate',
    title: 'Fitness Tracker App',
    description:
      'FitMate is a mobile fitness app designed to help you stay active and healthy by tracking your workouts, daily movement, distance traveled, calories burned, and water intake. It provides a simple, easy-to-use interface that lets you set goals, monitor your progress over time, and maintain a balanced lifestyle.',
    image: '/assets/images/captura_fitmate.png',
    logo: '/assets/images/logo_fit.png',
    liveUrl: 'https://landing-page-fitmate.vercel.app/',
    repoUrl: 'https://github.com/Andrei1loc1/FitMate',
  },
  
];
