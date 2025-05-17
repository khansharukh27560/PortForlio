export const projects = [
   {
      id: "resumeera-react-resume-builder",
  title: "ResumeEra - Free Resume Builder",
  description: "ResumeEra is a React-based web application that allows users to create professional resumes and cover letters for free. It offers a modern, user-friendly interface to input personal details, job experience, education, and skills. Users can preview, download, and track their job applications. All data is stored in localStorage for persistence without requiring login.",
  features: [
    "Create professional resumes online for free",
    "Generate cover letters instantly",
    "Track job applications with status updates",
    "Countdown timer to job deadlines",
    "Save resume data in browser using localStorage",
    "Download resumes in PDF format",
    "Responsive design with fast performance",
    "Popup alerts and interactive UI"
  ],
  techStack: ["React", "JavaScript", "CSS", "HTML", "localStorage", "React Helmet", "React Router", "React Popup", "React Redux", "Bootstrap"],
  liveLink: "https://resumeera.xyz",
  githubLink: "https://github.com/khansharukh27/ResumeEra", // Replace with actual GitHub repo if available
  image: "/assets/resumeera-preview.png", // Optional image path
  status: "Ongoing",
  date: "May 2025",
},
 
{
      id: "todo-list-react-project",
  title: "Todo List App",
  description: "A React-based Todo List application that allows users to add, complete, uncheck, and delete tasks. It uses localStorage for data persistence and Redux for action dispatching.",
  features: [
    "Add new todo items",
    "Mark items as complete or active",
    "Delete completed items",
    "Data is saved in localStorage",
    "Redux integrated for dispatching actions",
    "Checkbox-based status control",
    "Live task tracking with completed task history"
  ],
  techStack: ["React", "Redux", "CSS", "localStorage", "JavaScript", "Bootstrap"],
  liveLink: "/to-do-list", // replace with actual URL
  githubLink: "https://github.com/khansharukh27560/PortForlio/tree/main/src/component/To-Do-List", // replace with actual repo
  image: "/assets/todo-preview.png", // optional image for card preview
  status: "Completed",
  date: "May 2025",
},
 
 {
      id: "weather-data-dashboard",
  title: "Weather Data Dashboard",
  description: "A React component that fetches weather data from an API and displays it in a table and a line chart. Includes search functionality to filter by time and temperature. Features data loading states, error handling, and responsive chart rendering using Recharts.",
  features: [
    "Fetches weather data from Open-Meteo API",
    "Displays weather data in a table format",
    "Provides a responsive line chart with temperature data",
    "Includes search input to filter data by time or temperature",
    "Handles loading and error states",
    "Responsive layout with Recharts and CSS styling",
    "Clean and user-friendly interface"
  ],
  techStack: ["React", "JavaScript", "Recharts", "CSS", "Open-Meteo API"],
  liveLink: "/weather-data", // Replace with actual deployment URL
  githubLink: "https://github.com/khansharukh27560/PortForlio/tree/main/src/component/weatherData", // Replace with your repo
  image: "/assets/weather-dashboard-preview.png", // optional preview image
  status: "In Progress", // or "Completed" if finalized
  date: "May 2025",
},
{
      id: "countdown-timer-app",
  title: "Countdown Timer App",
  description: "A React-based countdown timer that lets users input a future date and time, and displays a live countdown. The event time is saved in localStorage to persist across refreshes. The component includes automatic expiration detection and stops when the countdown ends.",
  features: [
    "Allows users to set a future event date and time",
    "Real-time countdown with days, hours, minutes, and seconds",
    "Persists event time in localStorage for consistency across reloads",
    "Automatically clears interval and displays 'Time expired!' when countdown ends",
    "Handles state updates efficiently with cleanup on unmount",
    "Responsive and simple UI"
  ],
  techStack: ["React", "JavaScript", "LocalStorage", "HTML5 Input Types"],
  liveLink: "/counter", // Replace with actual deployment URL
  githubLink: "https://github.com/khansharukh27560/PortForlio/tree/main/src/component/CountDown", // Replace with your repo
  image: "/assets/countdown-timer-preview.png", // optional preview image
  status: "Completed",
  date: "May 2025",
},
 {
    id: "expenses-tracker-react-project",
  title: "Expenses Tracker",
  description:
    "A React-based Expenses Tracker that allows users to manage their income and expenses efficiently. Users can input income, categorize and record expenses, and view remaining balance. Data is stored in localStorage for persistence.",
  features: [
    "Add and track income",
    "Categorized expense entry (food, rent, etc.)",
    "Search expenses by category or amount",
    "Live balance calculation (income - expenses)",
    "Data persistence using localStorage",
    "Filterable expense history by category or amount",
    "Date and time display for each transaction"
  ],
  techStack: ["React", "JavaScript", "CSS", "localStorage", "HTML5"],
  liveLink: "https://resumeera.xyz/expenses-tracker", // replace with actual live link if deployed
  githubLink: "https://github.com/khansharukh27560/PortForlio/tree/main/src/component/ExpencesTracker", // replace with actual GitHub repo
  image: "/assets/expenses-tracker-preview.png", // optional image path for preview
  status: "Completed",
  date: "May 2025",
  
},
{
      id: "job-application-tracker",
  title: "Job Application Tracker",
  description: "A React-based job application tracker that allows users to log, save, and view job applications. The form includes fields like company name, job title, application date, and a job description URL. Data is persisted using localStorage, and users can add new applications via a popup form.",
  features: [
    "Add new job applications via a popup modal",
    "Track company name, job title, application date, and job description link",
    "Persistent data using `localStorage`",
    "View all previously submitted applications",
    "Responsive and clean layout using CSS",
    "Form validation for empty fields (optional enhancement)",
    "Displays total applications count dynamically",
  ],
  techStack: [
    "React",
    "JavaScript",
    "HTML5 (datetime-local input)",
    "CSS",
    "LocalStorage",
    "reactjs-popup"
  ],
  liveLink: "/job-application-tracker", // Replace with real URL
  githubLink: "https://github.com/khansharukh27560/PortForlio/tree/main/src/component/Application%20Tracker", // Replace with real repo
  image: "/assets/job-tracker-preview.png", // Optional screenshot
  status: "Completed",
  date: "May 2025",
},
{
  id: "crypto-dashboard-react",
  title: "Crypto Dashboard - Real-time Crypto Tracker",
  description: "Crypto Dashboard is a modern and responsive React-based cryptocurrency tracking application. It allows users to monitor real-time prices, market cap, volume, and performance charts for top cryptocurrencies. The UI is minimal yet powerful, providing filtering, searching, and sorting capabilities with dynamic API data fetching. The dashboard is optimized for both desktop and mobile devices.",
  features: [
    "Track real-time cryptocurrency prices",
    "Interactive charts for price history",
    "Responsive and animated dashboard UI",
    "Search and filter crypto coins by name or symbol",
    "Live market data using CoinGecko API",
    "Dark/light theme toggle",
    "Pagination for large data handling",
    "Smooth animations using Framer Motion"
  ],
  techStack: [
    "React", 
    "JavaScript", 
    "CSS", 
    "HTML", 
    "Axios", 
    "Chart.js", 
    "Framer Motion", 
    "React Router", 
    "CoinGecko API"
  ],
  liveLink: "https://khansharukh27.github.io/cryptoDashboard",
  githubLink: "https://github.com/khansharukh27/cryptoDashboard",
  image: "/assets/crypto-dashboard-preview.png", // Optional, replace with actual preview if you have it
  status: "Completed",
  date: "April 2025"
}


]
