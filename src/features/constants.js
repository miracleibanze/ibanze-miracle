import {
  brainwaveProject,
  brainwaveProjectSmall,
  css,
  css3Svg,
  envelopeSvg,
  express,
  facebook,
  git,
  github,
  gitSvg,
  html,
  html5Svg,
  IMConnectProject,
  IMConnectProjectSmall,
  IMMoviesProject,
  IMMoviesProjectSmall,
  javascript,
  jsSvg,
  linkedin,
  mail,
  mapPinSvg,
  mongodb,
  MongoDBSvg,
  MukingiSSProject,
  MukingiSSProjectSmall,
  mySQL,
  MySQLSvg,
  nextJsSvg,
  nodejs,
  NodeJsSvg,
  npmSvg,
  phoneSvg,
  react,
  reactSvg,
  sass,
  sassSvg,
  socketio,
  SocketIoSvg,
  tailwindcss,
  tailwindCssSvg,
  ExpressSvg,
} from "../assets";

// Navigation links
export const navlinks = [
  { id: 0, name: "Home", link: "hero" },
  { id: 1, name: "Skills", link: "skills" },
  { id: 3, name: "Projects", link: "projects" },
  { id: 4, name: "Contact", link: "contact" },
];

// Social links
export const social = [
  { name: "Github", icon: github, url: "https://github.com/miracleibanze/" },
  {
    name: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/ibanze-miracle/",
  },
  {
    name: "Facebook",
    icon: facebook,
    url: "https://facebook.com/MiracleCode/",
  },
  {
    name: "Mail",
    icon: mail,
    url: "mailto:miracleibanze@gmail.com",
  },
];

// Resume sections
export const resume = [
  { id: 0, name: "Summary" },
  { id: 1, name: "Education" },
  { id: 2, name: "Skills" },
  { id: 3, name: "About Me" },
];
export const frontendProjects = [
  {
    index: 1,
    name: "IMMovies",
    description:
      "IMMovies is a sleek front-end application built with React and Tailwind CSS, allowing users to search and explore movies. This project involved the use of the Movie Database API to fetch movie data, which is then displayed in a user-friendly interface. My primary goal was to create a responsive, intuitive interface for users to browse and interact with movie data, while ensuring optimal performance and user experience across different screen sizes and devices.",
    detailedDescription:
      "IMMovies is a front-end web application that integrates the Movie Database API to provide users with a seamless experience in searching, viewing, and exploring movies. It features a dynamic interface built with React, where I utilized components for modular development, making the codebase maintainable and easy to update. Tailwind CSS was chosen for rapid styling, enabling me to implement responsive designs that adjust to different screen sizes. The application’s performance was optimized using Vite for faster build times, and the routing was handled with React Router to ensure smooth navigation between pages.",
    challengesFaced:
      "One of the biggest challenges I faced during the development of IMMovies was implementing an efficient search and filter mechanism that could handle large data sets retrieved from the API. I tackled this challenge by optimizing the API requests and implementing lazy loading to improve the performance of the app. Another challenge was ensuring the app was responsive across all devices. I used Tailwind CSS’s utility-first classes to quickly test and adjust the layout for different screen sizes, ensuring a seamless user experience.",
    skillsDeveloped:
      "Through this project, I gained further expertise in React.js, particularly with component-based architecture and managing state with React hooks. Tailwind CSS proved to be an excellent choice for rapidly building responsive, well-designed UIs. Additionally, I became proficient in using Vite for fast development and optimized builds, which greatly improved the development workflow.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Vite"],
    status: "Completed",
    image: { img: IMMoviesProject, imgPlaceHolder: IMMoviesProjectSmall },
    url: "https://immovies.vercel.app/",
    additionalLinks: [
      {
        label: "GitHub Repo",
        url: "https://github.com/username/immovies",
      },
      {
        label: "API Documentation",
        url: "https://www.themoviedb.org/documentation/api",
      },
    ],
    projectHighlights: [
      "Implemented search and filtering system for movie data",
      "Built a responsive design using Tailwind CSS",
      "Used React Router for seamless navigation",
    ],
    duration: "3 months",
    role: "Frontend Developer",
    projectType: "Individual Project",
  },
  {
    index: 2,
    name: "Mukingi Secondary School",
    description:
      "E-S Mukingi is a platform for Mukingi Secondary School that provides essential information such as news, events, and educational resources. The goal was to create a central hub for students and staff to access important school-related information, stay updated with news and announcements, and participate in online discussions.",
    detailedDescription:
      "This project aimed to streamline communication within Mukingi Secondary School by creating a dedicated online platform. It was built with React.js and Tailwind CSS to provide a user-friendly interface. React’s component-based structure allowed for easy updates to the content while ensuring the app remained responsive across devices. The app includes features like a live news feed, event calendar, and user authentication to enable staff and students to post and interact with content. Vite was used for faster build times during development.",
    challengesFaced:
      "One challenge I encountered was creating a flexible content management system for the events and news section. I had to design a backend that could easily manage content updates without requiring a developer to make changes to the codebase. To solve this, I created an admin panel with role-based access control, ensuring that only authorized staff members could update the platform. Additionally, integrating the app with the school’s existing communication tools was a challenge, but I successfully implemented a notification system to keep users engaged with timely updates.",
    skillsDeveloped:
      "This project helped me hone my skills in React.js, particularly with managing complex state using hooks and Context API. I also learned about authentication and authorization, implementing JWT for secure logins. The biggest takeaway was the value of designing a user-centric, intuitive interface that catered to the needs of both students and staff.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Vite"],
    status: "Completed",
    image: { img: MukingiSSProject, imgPlaceHolder: MukingiSSProjectSmall },
    url: "https://e-s-mukingi.vercel.app/",
    additionalLinks: [
      {
        label: "GitHub Repo",
        url: "https://github.com/username/mukingi-ss",
      },
      {
        label: "API Documentation",
        url: "https://mock-api.mukingi-ss.com/docs",
      },
    ],
    projectHighlights: [
      "Designed and built the front-end interface for the school platform",
      "Created UI design for user friendly for news and events",
      "Developed responsive layouts for mobile and desktop views",
    ],
    duration: "2 months",
    role: "Frontend Developer",
    projectType: "Individual Project",
  },
  {
    index: 3,
    name: "BrainWave app",
    description:
      "BrainWave is an AI-powered front-end application designed to help users improve focus and productivity by generating personalized images and videos. The app leverages machine learning models to create visual content that boosts cognitive function and reduces distractions.",
    detailedDescription:
      "BrainWave is a unique front-end application that uses artificial intelligence to generate images and videos tailored to improve users' focus and productivity. The app was built with React.js and Tailwind CSS, with the user interface designed to be minimalist and calming. Integrating machine learning models for content generation was the most exciting part of the project. I used APIs to interact with the models and deliver personalized media. The app was designed to be as lightweight as possible for quick load times, ensuring that users could use the tool without delays.",
    challengesFaced:
      "A significant challenge in this project was integrating the machine learning models into the app. The models generated large files that impacted the app’s performance. To overcome this, I optimized the way the media files were loaded and displayed, using techniques like lazy loading and image compression. I also needed to ensure that the app’s interface remained distraction-free while delivering personalized content. This required careful design choices and continuous testing to balance usability with functionality.",
    skillsDeveloped:
      "Through this project, I gained valuable experience in integrating AI-powered APIs into a front-end application. I learned about performance optimization techniques, such as lazy loading, image compression, and optimizing API calls. Additionally, the project enhanced my understanding of how user experience design can complement productivity tools, ensuring that the app remains both functional and pleasant to use.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Vite"],
    status: "Completed",
    image: { img: brainwaveProject, imgPlaceHolder: brainwaveProjectSmall },
    url: "https://imbrainwave.vercel.app/",
    additionalLinks: [
      {
        label: "GitHub Repo",
        url: "https://github.com/username/brainwave-app",
      },
      {
        label: "AI Models Documentation",
        url: "https://docs.ai.model.com",
      },
    ],
    projectHighlights: [
      "stunning UI Integrated AI models to generate personalized content",
      "Designed a minimalist interface focused on productivity",
      "Implemented lazy loading and image compression techniques",
    ],
    duration: "4 months",
    role: "Frontend Developer",
    projectType: "Individual Project",
  },
];

export const fullStackProjects = [
  {
    index: 4,
    name: "IMConnect",
    description:
      "IMConnect is a user-friendly app that facilitates communication and collaboration, built with MERN Stack technologies. It enables real-time messaging, group chats, and media sharing, offering an intuitive platform for teams to interact and collaborate on projects.",
    detailedDescription:
      "IMConnect is a comprehensive full-stack application built with the MERN stack (MongoDB, Express, React, Node.js) that facilitates communication and collaboration between teams. Users can send real-time messages, create group chats, share media, and manage their profiles. The front-end was built using React, with state management handled via Context API and React hooks. On the back-end, Node.js and Express were used to build RESTful APIs for message handling, authentication, and real-time communication via Socket.io. The app also includes MongoDB for database storage, handling user data, and chat history.",
    challengesFaced:
      "A major challenge in developing IMConnect was ensuring smooth real-time communication across different devices. This was achieved using Socket.io for real-time messaging and by optimizing the WebSocket connection. Another challenge was building a secure authentication system to protect user data and messages. I integrated JWT-based authentication and authorization for a more secure experience.",
    skillsDeveloped:
      "This project provided hands-on experience with full-stack development, particularly with real-time communication technologies like Socket.io. I also improved my skills in database management with MongoDB and learned more about building secure applications using JWT for authentication. Working with the MERN stack gave me deeper insights into both front-end and back-end development.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    status: "Pending",
    image: { img: IMConnectProject, imgPlaceHolder: IMConnectProjectSmall },
    url: "https://imconnect.vercel.app/",
    additionalLinks: [
      {
        label: "GitHub Repo",
        url: "https://github.com/username/imconnect",
      },
    ],
    projectHighlights: [
      "Built real-time messaging features using Socket.io",
      "Developed RESTful APIs for user authentication and messaging",
      "Integrated JWT-based authentication for secure logins",
      "Designed the UI with Tailwind CSS for responsiveness",
    ],
    duration: "6 months",
    role: "Full-Stack Developer",
    projectType: "Collaborative Project",
  },
];

// Contact info
export const contact = [
  { id: 0, title: "Phone", content: "(+250) 794881466", icon: phoneSvg },
  {
    id: 1,
    title: "Email",
    content: "miracleibanze@gmail.com",
    icon: envelopeSvg,
  },
  { id: 2, title: "Address", content: "Ruhango, Rwanda", icon: mapPinSvg },
  {
    id: 3,
    title: "Github",
    content: "https://github.com/miracleibanze/",
    icon: github,
  },
  {
    id: 4,
    title: "LinkedIn",
    content: "https://www.linkedin.com/in/ibanze-miracle/",
    icon: linkedin,
  },
  {
    id: 5,
    title: "Facebook",
    content: "https://facebook.com/MiracleCode/",
    icon: facebook,
  },
];
export const frontendTechnologies = {
  name: "Front-End Technologies",
  elements: [
    {
      index: 0,
      name: "HTML",
      image: html,
      description:
        "HTML5 is the backbone of any web application, enabling the creation of semantic and well-structured content that forms the foundation of user experiences. My journey with HTML started during my high school years, where I developed a strong interest in web development as part of my Computer Science specialization in Mathematics, Computer Science, and Economics. This foundational knowledge has grown into expertise in crafting responsive and accessible designs that cater to users across diverse devices and platforms. By leveraging best practices and semantic HTML, I have significantly improved SEO performance and ensured adherence to accessibility standards. My proficiency in creating intuitive layouts and collaborating with designers to implement pixel-perfect user interfaces has been instrumental in delivering engaging and functional applications.",
      highlights: [
        "Built multi-page static websites",
        "Improved website SEO by 30% through semantic structure",
        "Collaborated on projects requiring pixel-perfect UI.",
      ],
      problemSolved:
        "I resolved challenges related to broken accessibility by implementing ARIA roles, benefiting users with disabilities.",
      projects: [
        "IMMovies",
        "Mukingi Secondary School",
        "BrainWave app",
        "IMConnect",
      ],
      icon: html5Svg,
    },
    {
      index: 1,
      name: "CSS",
      image: css,
      description:
        "CSS is a powerful tool for styling and creating visually engaging web applications. My proficiency in CSS began with foundational lessons in high school, where I first explored its potential during my Computer Science specialization in Mathematics, Computer Science, and Economics. This early exposure laid the groundwork for my advanced knowledge of modern CSS techniques, including responsive design, animations, and layouts like Flexbox and Grid. Over time, I have mastered the art of cross-browser compatibility, ensuring consistent and seamless experiences across diverse platforms. By leveraging CSS3, I have designed interfaces that not only enhance user engagement but also adhere to modern web standards. My expertise in creating visually appealing and functional designs has been a key factor in delivering exceptional user experiences.",
      highlights: [
        "Designed responsive designs that increased user engagement by 40%",
        "Implemented complex animations for better UX.",
      ],
      problemSolved:
        "Fixed layout inconsistencies across browsers, ensuring seamless rendering in Chrome, Firefox, and Safari.",
      projects: [
        "IMMovies",
        "Mukingi Secondary School",
        "BrainWave app",
        "IMConnect",
      ],
      icon: css3Svg,
    },
    {
      index: 2,
      name: "SASS",
      image: sass,
      description:
        "SASS is an essential tool in modern web development, allowing for modular and maintainable CSS through features like variables, mixins, and nesting. With extensive experience in SASS, I have streamlined the styling process for large-scale projects by reducing redundancy and ensuring consistency across components. My proficiency in SASS has enabled me to implement complex theming systems and efficiently manage scalable architectures, making it easier to maintain and update codebases over time. This skill has proven invaluable in creating cohesive and flexible designs.",
      highlights: [
        "Reduced code redundancy by 50% through SASS mixins",
        "Created a theme-switching system using SASS variables.",
      ],
      problemSolved:
        "Managed scalable and maintainable CSS architecture for large projects, reducing styling conflicts. Try clicking on ⚙ icon on the top right corner to experience that, where you can toggle between themes.",
      icon: sassSvg,
    },
    {
      index: 3,
      name: "Tailwind CSS",
      image: tailwindcss,
      description:
        "Tailwind CSS is a utility-first framework that accelerates the development of clean and responsive user interfaces. By using Tailwind, I have drastically reduced development time while maintaining a consistent and scalable design system. Its utility classes allow me to focus on building components efficiently without sacrificing flexibility or creativity. Tailwind has been instrumental in adhering to DRY (Don't Repeat Yourself) principles, enabling me to deliver professional and polished projects that are visually consistent and highly functional.",
      highlights: [
        "Reduced development time by 60% due to Tailwind utility classes",
        "Built components adhering to DRY principles.",
      ],
      problemSolved:
        "Eliminated repetitive CSS by integrating Tailwind for consistent UI across the project.",
      projects: [
        "IMMovies",
        "Mukingi Secondary School",
        "BrainWave app",
        "IMConnect",
      ],
      icon: tailwindCssSvg,
    },
    {
      index: 4,
      name: "JavaScript",
      image: javascript,
      description:
        "JavaScript is at the core of modern web development, and my journey with it is deeply rooted in the inspiration I gained during high school. As part of my specialization in Mathematics, Computer Science, and Economics, I was introduced to programming through Object-Oriented Programming (OOP) and Java. This early exposure sparked my passion for coding and laid the foundation for my advanced understanding of JavaScript. Today, I excel in using ES6+ features, DOM manipulation, and asynchronous programming to build dynamic and interactive web applications. From creating seamless single-page applications (SPAs) to optimizing code performance, my proficiency in JavaScript allows me to craft solutions that deliver exceptional functionality and performance.",
      highlights: [
        "Built dynamic SPAs with seamless data updates",
        "Optimized code performance by reducing execution time by 30%.",
      ],
      problemSolved:
        "Resolved UI freezes caused by inefficient loops by implementing asynchronous operations with Promises and async/await.",
      projects: [
        "IMMovies",
        "Mukingi Secondary School",
        "BrainWave app",
        "IMConnect",
      ],
      icon: jsSvg,
    },
    {
      index: 5,
      name: "React.js",
      image: react,
      description:
        "React.js is a powerful library for building interactive and scalable user interfaces. With a strong command of React's component-based architecture, I excel at creating reusable, maintainable, and efficient UI components. By utilizing state management tools such as Context API and React hooks, I have developed complex SPAs with seamless user experiences. My approach to React development focuses on performance optimization through techniques like lazy loading and memoization, ensuring applications remain responsive and engaging under heavy loads.",
      highlights: [
        "Developed scalable SPAs using React hooks and Context API",
        "Improved app performance through lazy loading and memoization.",
      ],
      problemSolved:
        "Solved prop drilling issues by integrating Context API, simplifying state management across multiple components.",
      projects: [
        "IMMovies",
        "Mukingi Secondary School",
        "BrainWave app",
        "IMConnect",
      ],
      icon: reactSvg,
    },
  ],
};

export const backendTechnologies = {
  name: "Back-End Technologies",
  elements: [
    {
      index: 6,
      name: "Node.js",
      image: nodejs,
      description:
        "Node.js is a versatile runtime environment that empowers developers to create fast and scalable server-side applications. My expertise in Node.js includes building RESTful APIs, handling asynchronous operations, and implementing event-driven architectures to optimize performance. By leveraging middleware and caching strategies, I have significantly enhanced API response times and ensured reliable operation for high-traffic applications. Node.js enables me to create robust back-end systems that support complex real-time interactions and seamless integration with front-end interfaces.",
      highlights: [
        "Built RESTful APIs serving 1,000+ requests daily",
        "Optimized API response time by 25% using middleware.",
      ],
      problemSolved:
        "Fixed memory leaks by improving garbage collection and optimizing asynchronous operations.",
      projects: ["IMConnect"],
      icon: NodeJsSvg,
    },
    {
      index: 7,
      name: "Express.js",
      image: express,
      description:
        "Express.js is a minimalist and flexible framework that simplifies the development of robust server-side applications. With expertise in building RESTful APIs and middleware for logging, authentication, and data validation, I have delivered scalable and maintainable back-end solutions. Express.js enables me to handle routing efficiently, ensuring smooth and optimized API communication. My experience in error handling and route optimization has resolved bottlenecks, improving overall application performance and reliability.",
      highlights: [
        "Developed middleware for logging, authentication, and data validation",
        "Built scalable backend services for e-commerce projects.",
      ],
      problemSolved:
        "Resolved slow API responses by implementing route optimization and proper error handling",
      projects: ["IMConnect"],
      icon: ExpressSvg,
    },
  ],
};

export const databaseTechnologies = {
  name: "Database",
  elements: [
    {
      index: 8,
      name: "MongoDB",
      image: mongodb,
      description:
        "MongoDB is a NoSQL database that provides unparalleled flexibility and scalability for modern applications. With a solid understanding of schema design and CRUD operations, I have developed robust database systems tailored to specific project needs. My expertise includes optimizing queries through indexing and leveraging aggregation pipelines to analyze and process complex datasets. MongoDB empowers me to build data-driven applications that can handle real-time interactions with efficiency and reliability.",
      highlights: [
        "Designed scalable databases for real-time apps",
        "Optimized queries with indexing, reducing query time by 40%.",
      ],
      problemSolved:
        "Resolved performance bottlenecks by implementing aggregation pipelines for data analysis.",
      projects: ["IMConnect"],
      icon: MongoDBSvg,
    },
    {
      index: 9,
      name: "MySQL",
      image: mySQL,
      description:
        "MySQL is a relational database management system that offers robust data organization and querying capabilities. I specialize in designing normalized database schemas, implementing advanced queries, and securing data through role-based access controls. My strong foundation in MySQL began in high school, where I learned its basics during computer science lessons as part of my specialization in Mathematics, Computer Science, and Economics. Building on this early knowledge, I have optimized query performance, eliminated redundancies, and developed efficient database models that enhance application performance and ensure data integrity. MySQL enables me to manage structured data effectively and provide reliable solutions for a variety of use cases.",
      highlights: [
        "Built relational models for user and product data",
        "Secured databases using role-based access control.",
      ],
      problemSolved:
        "Eliminated duplicate entries and optimized queries using JOINs and indexing.",
      icon: MySQLSvg,
    },
  ],
};
export const otherTechnologies = {
  name: "Others",
  elements: [
    {
      index: 10,
      name: "Socket.io",
      image: socketio,
      description:
        "Socket.io is an essential library for building real-time communication systems, enabling instant data transfer between clients and servers. With expertise in Socket.io, I have developed live messaging applications, event-driven systems, and real-time updates for various projects. My focus on robust error handling and reconnection strategies ensures seamless user experiences even under challenging network conditions. Socket.io allows me to deliver responsive and engaging applications that foster instant interaction.",
      highlights: [
        "Built real-time messaging apps with zero-latency",
        "Created event-driven systems for live sports scores.",
      ],
      problemSolved:
        "Resolved connection issues by implementing robust error handling and reconnection strategies.",
      projects: ["IMConnect"],
      icon: SocketIoSvg,
    },
    {
      index: 11,
      name: "Git",
      image: git,
      description:
        "Git is a cornerstone of modern development workflows, facilitating version control and collaboration in team environments. My proficiency in Git includes managing complex branching strategies, resolving merge conflicts, and ensuring seamless integration of code changes. By implementing Git flow conventions and best practices, I have streamlined collaborative development processes, ensuring code quality and minimizing risks during deployment. Git enables me to work efficiently on large-scale projects with distributed teams.",
      highlights: [
        "Managed team workflows with branching strategies",
        "Resolved merge conflicts efficiently in large projects.",
      ],
      problemSolved:
        "Streamlined collaboration by implementing Git flow strategies and proper commit conventions.",
      projects: [
        "IMMovies",
        "Mukingi Secondary School",
        "BrainWave app",
        "IMConnect",
      ],
      icon: gitSvg,
    },
  ],
};
