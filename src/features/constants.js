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
  IMMoviesBack,
  ESMukingiBack,
  IMBrainwaveBack,
  IMConnectBack,
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
      "IMMovies is a sleek front-end application built with React and Tailwind CSS, providing users with an intuitive and visually engaging interface for exploring movie concepts. The project emphasizes responsiveness, user-friendly design, and optimal performance across various devices.",
    detailedDescription:
      "IMMovies is a front-end web application showcasing advanced UI/UX design principles. The interface is built with React for modular development, ensuring maintainable and scalable code. Tailwind CSS was used for styling, enabling a responsive design adaptable to different screen sizes. The application also focuses on performance optimization using Vite for faster build times, while React Router ensures seamless navigation between pages.",
    challengesFaced:
      "One of the biggest challenges was implementing an intuitive and efficient search mechanism to simulate movie data exploration without external data. Ensuring the app was responsive across all devices required leveraging Tailwind CSS’s utility-first classes to quickly test and adjust layouts for a seamless user experience.",
    skillsDeveloped:
      "This project strengthened my expertise in React.js, particularly in component-based architecture and state management with React hooks. I gained deeper knowledge of Tailwind CSS for rapidly building responsive UIs and improved my development workflow with Vite. Additionally, I enhanced my design sensibilities to create engaging user interfaces.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Vite"],
    status: "Completed",
    image: {
      img: IMMoviesProject,
      imgPlaceHolder: IMMoviesProjectSmall,
      backCover: IMMoviesBack,
    },
    url: "https://immovies.vercel.app/",
    additionalLinks: [
      {
        label: "GitHub Repo",
        url: "https://github.com/miracleibanze/IMMovies",
      },
    ],
    projectHighlights: [
      "Designed a visually engaging UI with React and Tailwind CSS",
      "Implemented responsive design for various screen sizes",
      "Optimized performance using Vite for faster builds",
    ],
    duration: "1 month, 5 days",
    role: "Frontend Developer",
    projectType: "Individual Project",
  },
  {
    index: 2,
    name: "Mukingi Secondary School",
    description:
      "E-S Mukingi is a platform designed to showcase school information, news, and events. The focus was on creating a user-friendly hub for students and staff to interact with educational content and updates.",
    detailedDescription:
      "This project streamlines communication within Mukingi Secondary School by presenting news, events, and educational resources through a clean, responsive interface. Built with React.js and Tailwind CSS, the platform’s design emphasizes simplicity and usability. React’s component-based structure ensured easy updates and maintenance, while responsive layouts cater to users on both desktop and mobile devices.",
    challengesFaced:
      "Creating a user-centric platform that effectively displays content without relying on external data was a key challenge. I focused on crafting reusable components for dynamic content presentation. Ensuring the platform maintained a clean and responsive interface also required iterative testing and styling adjustments.",
    skillsDeveloped:
      "I advanced my skills in creating intuitive, responsive designs using React and Tailwind CSS. This project helped me improve my ability to design user-friendly interfaces tailored to specific user groups, ensuring accessibility and ease of use.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Vite"],
    status: "Completed",
    image: {
      img: MukingiSSProject,
      imgPlaceHolder: MukingiSSProjectSmall,
      backCover: ESMukingiBack,
    },
    url: "https://e-s-mukingi.vercel.app/",
    additionalLinks: [
      {
        label: "GitHub Repo",
        url: "https://github.com/miracleibanze/E.S.Mukingi",
      },
    ],
    projectHighlights: [
      "Developed a responsive, user-friendly design for school updates",
      "Designed reusable components to simplify content management",
      "Optimized layouts for mobile and desktop devices",
    ],
    duration: "1 month, 20 days",
    role: "Frontend Developer",
    projectType: "Individual Project",
  },
  {
    index: 3,
    name: "BrainWave App",
    description:
      "BrainWave is a front-end application designed to improve focus and productivity by providing users with minimalist visual content in a calming interface.",
    detailedDescription:
      "BrainWave offers a clean, minimalist user interface aimed at enhancing productivity. Built with React.js and Tailwind CSS, the app prioritizes simplicity and performance. The design incorporates calming elements to maintain a distraction-free experience, with lightweight components ensuring smooth performance across devices.",
    challengesFaced:
      "The biggest challenge was creating a visually calming yet interactive design that encouraged productivity. Balancing minimalism with functionality required careful UI/UX design choices, ensuring that the app’s features complemented its purpose without overwhelming users.",
    skillsDeveloped:
      "This project enhanced my ability to design applications focused on user experience and aesthetic simplicity. I also refined my skills in optimizing app performance and learned to strike a balance between functional and minimalistic design.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Vite"],
    status: "Completed",
    image: {
      img: brainwaveProject,
      imgPlaceHolder: brainwaveProjectSmall,
      backCover: IMBrainwaveBack,
    },
    url: "https://imbrainwave.vercel.app/",
    additionalLinks: [
      {
        label: "GitHub Repo",
        url: "https://github.com/miracleibanze/Brainwave",
      },
    ],
    projectHighlights: [
      "Designed a minimalist, productivity-focused user interface",
      "Ensured lightweight performance with React.js and Tailwind CSS",
      "Created a distraction-free app environment for users",
    ],
    duration: "29 days",
    role: "Frontend Developer",
    projectType: "Individual Project",
  },
];

export const fullStackProjects = [
  {
    index: 4,
    name: "IMConnect",
    description:
      "IMConnect is a full-stack application designed for seamless communication and collaboration, offering features like real-time messaging, group chats, and media sharing.",
    detailedDescription:
      "IMConnect is a dynamic application emphasizing user interaction and collaboration. Built with the MERN stack, it features real-time messaging, group chats, and a clean, responsive interface. The front-end, developed with React, utilizes state management through Context API and hooks, while the back-end, built with Node.js and Express, handles routing and application logic. MongoDB was used for structuring mock data to simulate user interaction scenarios.",
    challengesFaced:
      "Developing realistic simulations of real-time messaging without live server connections was a unique challenge. I implemented creative logic on the front end to mimic real-time interactions and designed the interface for ease of use and visual appeal.",
    skillsDeveloped:
      "This project provided an in-depth understanding of creating seamless user experiences in communication apps. I honed my React and Node.js skills, focusing on UI/UX design and mock data handling for a full-stack simulation.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    status: "Completed",
    image: {
      img: IMConnectProject,
      imgPlaceHolder: IMConnectProjectSmall,
      backCover: IMConnectBack,
    },
    url: "https://imconnect.vercel.app/",
    additionalLinks: [
      {
        label: "GitHub Repo",
        url: "https://github.com/miracleibanze/IMConnect-client",
        url: "https://github.com/miracleibanze/IMConnect-api",
      },
    ],
    projectHighlights: [
      "Simulated real-time messaging features",
      "Designed and built front-end and back-end mock logic",
      "Created a responsive, user-friendly UI with Tailwind CSS",
    ],
    duration: "2 month, 3 days",
    role: "Full-Stack Developer",
    projectType: "Individual Project",
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
