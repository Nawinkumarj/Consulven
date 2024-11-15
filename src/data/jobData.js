const jobData = [
  {
    id: 1,
    title: "Frontend Developer",
    workType: "FULL-TIME",
    experience: "2-4 YEARS",
    qualifications: "Bachelor's",
    latest: "2 days ago",
    location: "San Francisco, CA",
    shortDescription: "Looking for a skilled frontend developer with experience in React.",
    fullDescription: "We are seeking a talented frontend developer who can craft high-quality, responsive, and dynamic user interfaces using React. You'll work closely with our design team to translate wireframes into intuitive and functional web experiences. Your role will involve optimizing components for maximum performance across a range of devices and browsers, ensuring a seamless and accessible user experience.",
    requirementPara: "We are seeking a talented frontend developer who can craft high-quality, responsive, and dynamic user interfaces using React.",
    requirementPoints: [
      "Experience with React and Node.js",
      "Strong problem-solving skills",
      "Familiarity with Git and version control",
      "Ability to work in an Agile environment",
      "Excellent communication skills"
    ],
    similarJobs: ["Backend Developer", "UI/UX Designer", "Full Stack Developer"],
    category: "Developer"
  },
  {
    id: 2,
    title: "Backend Developer",
    workType: "PART-TIME",
    experience: "5+ YEARS",
    qualifications: "Bachelor's",
    latest: "1 week ago",
    location: "Remote",
    shortDescription: "Backend developer with Node.js experience required.",
    fullDescription: "Join our backend team to build scalable and efficient web services and APIs using Node.js and Express. In this role, you will design and implement data storage solutions, manage server-side logic, and ensure high performance and responsiveness for backend applications.",
    requirementPara: "We are seeking a backend developer with strong expertise in Node.js and database management.",
    requirementPoints: [
      "Proficient in Node.js and Express",
      "Strong understanding of database management (MongoDB, SQL)",
      "Experience with API design and development",
      "Ability to work in cloud environments",
      "Strong debugging and problem-solving skills"
    ],
    similarJobs: ["Frontend Developer", "Data Scientist", "DevOps Engineer"],
    category: "Developer"
  },
  {
    id: 3,
    title: "Full Stack Developer",
    workType: "CONTRACT",
    experience: "3-5 YEARS",
    qualifications: "Bachelor's",
    latest: "5 days ago",
    location: "New York, NY",
    shortDescription: "Experienced full stack developer for handling both frontend and backend tasks.",
    fullDescription: "We are looking for a full stack developer who is equally comfortable working on both frontend and backend aspects of a web application. With a primary focus on technologies like React for frontend and Node.js for backend, you will be involved in end-to-end project development, from initial design through deployment.",
    requirementPara: "We are looking for a developer with expertise in both frontend and backend technologies, including React and Node.js.",
    requirementPoints: [
      "Experience with React and Node.js",
      "Ability to handle both frontend and backend tasks",
      "Knowledge of database management",
      "Experience with integrating third-party APIs",
      "Excellent teamwork and collaboration skills"
    ],
    similarJobs: ["Frontend Developer", "Backend Developer", "DevOps Engineer"],
    category: "Developer"
  },
  {
    id: 4,
    title: "UI/UX Designer",
    workType: "FREELANCE",
    experience: "1-3 YEARS",
    qualifications: "Bachelor's",
    latest: "2 weeks ago",
    location: "Los Angeles, CA",
    shortDescription: "Creative UI/UX designer with a passion for user-centered design.",
    fullDescription: "We are looking for a UI/UX designer to create visually compelling and intuitive user interfaces for our products. Your primary responsibilities will include conducting user research, designing wireframes, and crafting prototypes that accurately represent the product’s intended functionality and design.",
    requirementPara: "We are seeking a UI/UX designer with strong research and design skills to create exceptional user experiences.",
    requirementPoints: [
      "Experience with user research and wireframing tools",
      "Strong understanding of UI/UX principles",
      "Experience with design software (Adobe XD, Figma, etc.)",
      "Ability to collaborate with developers",
      "Excellent attention to detail"
    ],
    similarJobs: ["Frontend Developer", "Product Manager", "Content Writer"],
    category: "Designer"
  },
  {
    id: 5,
    title: "DevOps Engineer",
    workType: "FULL-TIME",
    experience: "3-5 YEARS",
    qualifications: "Bachelor's",
    latest: "3 days ago",
    location: "Austin, TX",
    shortDescription: "DevOps engineer with a focus on automation and CI/CD pipelines.",
    fullDescription: "We are seeking a DevOps Engineer to help automate our processes and create continuous integration and deployment pipelines. You will work closely with both development and operations teams to streamline our workflows and improve the scalability and reliability of our infrastructure.",
    requirementPara: "We need an experienced DevOps engineer with strong skills in automation and cloud computing.",
    requirementPoints: [
      "Experience with CI/CD tools like Jenkins, GitLab, etc.",
      "Strong understanding of cloud platforms (AWS, Azure)",
      "Proficient in scripting and automation tools",
      "Ability to manage infrastructure and databases",
      "Experience with containerization (Docker, Kubernetes)"
    ],
    similarJobs: ["Backend Developer", "Cloud Engineer", "Systems Administrator"],
    category: "Engineer"
  },
  {
    id: 6,
    title: "Mobile App Developer",
    workType: "FULL-TIME",
    experience: "2-4 YEARS",
    qualifications: "Bachelor's",
    latest: "4 days ago",
    location: "Chicago, IL",
    shortDescription: "Mobile app developer with expertise in iOS and Android development.",
    fullDescription: "We are seeking a skilled mobile app developer to create applications for iOS and Android. You will work closely with designers and backend developers to deliver high-performance, cross-platform apps. Your role will include implementing features, debugging, and optimizing mobile applications for performance and scalability.",
    requirementPara: "We are looking for a mobile app developer with expertise in cross-platform development.",
    requirementPoints: [
      "Experience with iOS and Android development",
      "Familiarity with cross-platform frameworks (React Native, Flutter)",
      "Experience with RESTful APIs",
      "Strong knowledge of mobile app testing",
      "Ability to optimize apps for performance"
    ],
    similarJobs: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
    category: "Developer"
  },
  {
    id: 7,
    title: "Data Scientist",
    workType: "PART-TIME",
    experience: "3-5 YEARS",
    qualifications: "Master's",
    latest: "1 week ago",
    location: "San Francisco, CA",
    shortDescription: "Data scientist with experience in machine learning and statistical analysis.",
    fullDescription: "Join our team as a data scientist, where you’ll analyze large sets of data to uncover insights and build predictive models. You will collaborate with engineering and product teams to deploy machine learning models and integrate them into production systems.",
    requirementPara: "We are looking for a data scientist with expertise in machine learning, statistics, and data analysis.",
    requirementPoints: [
      "Experience with Python and R for data analysis",
      "Strong background in machine learning and statistics",
      "Experience with data visualization tools (Tableau, Power BI)",
      "Ability to clean and preprocess large datasets",
      "Familiarity with data manipulation libraries (Pandas, NumPy)"
    ],
    similarJobs: ["Data Analyst", "Machine Learning Engineer", "AI Researcher"],
    category: "Data"
  },
  {
    id: 8,
    title: "Product Manager",
    workType: "FULL-TIME",
    experience: "5+ YEARS",
    qualifications: "Bachelor's",
    latest: "3 days ago",
    location: "Remote",
    shortDescription: "Experienced product manager to lead the development of new products.",
    fullDescription: "We are seeking a product manager who will lead the end-to-end product development process. You will work closely with the engineering, design, and marketing teams to define product requirements, oversee product launches, and continuously improve the product based on feedback from customers and stakeholders.",
    requirementPara: "We are looking for an experienced product manager to define and drive product development.",
    requirementPoints: [
      "Experience in product management and strategy",
      "Strong communication and leadership skills",
      "Ability to manage cross-functional teams",
      "Strong analytical and problem-solving skills",
      "Experience with Agile development methodologies"
    ],
    similarJobs: ["UI/UX Designer", "Content Writer", "Marketing Manager"],
    category: "Product"
  },
  {
    id: 9,
    title: "Content Writer",
    workType: "FREELANCE",
    experience: "1-3 YEARS",
    qualifications: "Bachelor's",
    latest: "2 weeks ago",
    location: "Remote",
    shortDescription: "Creative content writer to produce high-quality copy for blogs and articles.",
    fullDescription: "We are looking for a content writer who can create engaging and informative articles for our blog. You will be responsible for researching topics, writing SEO-friendly content, and ensuring consistency and quality across all written materials.",
    requirementPara: "We need a content writer with a flair for creating compelling copy and conducting thorough research.",
    requirementPoints: [
      "Experience writing for blogs, websites, and marketing materials",
      "Strong research and SEO skills",
      "Excellent command of the English language",
      "Ability to meet deadlines and work independently",
      "Experience with content management systems (WordPress)"
    ],
    similarJobs: ["Social Media Manager", "Marketing Specialist", "Copywriter"],
    category: "Content"
  }
];


export default jobData;
