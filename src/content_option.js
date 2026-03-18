import introImg from "./assets/images/PersonalPicture.jpg";
import portfolioImg1 from "./assets/images/portfolio-1.png";
import portfolioImg2 from "./assets/images/portfolio-2.png";
import portfolioImg3 from "./assets/images/portfolio-3.png";
import portfolioImg4 from "./assets/images/portfolio-4.jpg";
import portfolioImg5 from "./assets/images/portfolio-5.png";

const logotext = "BENJAMIN";
const meta = {
    title: "Benjamin Ramirez",
    description: "I am Benjamin Ramirez, a Computer Science student from El Paso, Texas. This is my portfolio."
};

const introdata = {
    title: "Benjamin Ramirez",
    animated: {
        first: "I love computers",
        second: "I make old computers into servers",
        third: "I develop scripts",
    },
    description: "A passionate and driven Computer Science student at the University of Texas at El Paso, with knowledge in full-stack development, IT, cybersecurity, and leadership. Proven ability to excel in fast-paced, collaborative environments and deliver innovative solutions to complex problems. Eager to leverage my skills in a challenging and rewarding role.",
    your_img_url: introImg,
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "As a Computer Science student at the University of Texas at El Paso, I have a strong foundation in full-stack development, IT, cybersecurity, and leadership. I have gained hands-on experience through various projects and competitions, including winning first place at the DELL Tech Academy. My background as a Second Chair Cellist has also equipped me with valuable skills in multitasking, time management, and teamwork. I am passionate about leveraging my technical expertise to solve real-world problems and am eager to contribute to a dynamic and innovative team."
};

const worktimeline = [
        {
            "jobtitle": "Whataburger Team member (Grill, MUT, Pass-out, Porter, Drinks)",
            "where": "1755 Lee Trevino & 8055 N Loop",
            "date": "2024-2025 & 2025-2026"
        },
        {
            "jobtitle": "Computer Science Technician",
            "where": "University of Texas at El Paso (UTEP) - Computer Science IT Department",
            "date": "2025-2025"
        },
        {
            "jobtitle": "1st place DELL Tech Academy",
            "where": "University of Texas at El Paso (UTEP)",
            "date": "2025"
        },
        {
            "jobtitle": "Second Chair Cellist",
            "where": "Orquesta Sinfónica Esperanza Azteca (OSEA) at Ciudad Juarez, MX",
            "date": "2017-2025"
        }
];

const skills = [
        {
            "name": "Java",
            "value": 100
        },
        {
            "name": "Javascript",
            "value": 60
        },
        {
            "name": "Html",
            "value": 85
        },
        {
            "name": "Css",
            "value": 70
        },
        {
            "name": "Python",
            "value": 100
        },
        {
            "name": "React Native",
            "value": 60
        }
];

const services = [
        {
            "title": "Web Development",
            "description": "Developing responsive and user-friendly websites using modern technologies like HTML, CSS, Javascript, and frameworks like React.js."
        },
        {
            "title": "Sudoku Solver",
            "description": "Built a terminal-based solver that uses backtracking algorithms to solve any valid Sudoku puzzle."
        },
        {
            "title": "Security Scanner",
            "description": "Developed a web-based interface that simulates scanning URLs for common web vulnerabilities."
        },
        {
            "title": "Resume Parser AI",
            "description": "Created a Flask web app that parses resumes and extracts key information like skills, experience, and education."
        },
        {
            "title": "Brainrot Pop App",
            "description": "Developed a fun, idle mobile video game for Android using Java, where users can earn revenue by clicking on various items."
        },
        {
            "title": "Home-Labs",
            "description": "Added an AI for my home and more users internationally, installed pi-hole for wifi adblocking and encryption, made a 2000 printer work with wifi AirPrint and computer printing, and replaced google drive with Nextcloud and google photos with Immich. Besides this, I have also installed Vaultwarden for password management and other more in the name of independation from Big Tech. All of these services are checked if they are alive with Uptime Kuma."
        },

];

const dataportfolio = [
        {
            "img": portfolioImg1,
            "description": "Sudoku Solver - A terminal-based solver using backtracking algorithms.",
            "link": "https://github.com/b3njaram/Sudoku-Solver"
        },
        {
            "img": portfolioImg2,
            "description": "Security Scanner - A web-based interface for simulating URL vulnerability scans.",
            "link": "https://github.com/b3njaram/Security-Scanner"
        },
        {
            "img": portfolioImg3,
            "description": "Resume Parser AI - A Flask web app for parsing and extracting resume information.",
            "link": "https://github.com/b3njaram/Resume-Parser-AI"
        },
        {
            "img": portfolioImg4,
            "description": "Brainrot Pop App- A mobile video game, currently for android and made in Java, where the user gets revenue from clicking on various items.",
            "link": "https://github.com/b3njaram/Brainrot-Pop"
        },
        {
            "img": portfolioImg5,
            "description": "Developed a complete Applicant Tracking System (ATS) using a modern React frontend and a Python serverless backend, demonstrating full-stack proficiency.",
            "link": "https://github.com/b3njaram/jale-hiring-app-masterv2"
        }
];

const dataportfolio2025_2026 = [
        {
            "img": "",
            "description": "Added an AI for my home and more users internationally using OpenWebUI and LM Studio",
            "link": "https://ai.jobbisoft.com.mx"
        },
        {
            "img": "",
            "description": "Installed pi-hole for wifi adblocking and encryption.",
            "link": "#"
        },
        {
            "img": "",
            "description": "Made a 2000 printer work with wifi AirPrint and computer printing",
            "link": "#"
        },
        {
            "img": "",
            "description": "Replaced google drive with Nextcloud and google photos with Immich.",
            "link": "#"
        },
        {
            "img": "",
            "description": "installed Vaultwarden for password management and other more in the name of independation from Big Tech.",
            "link": "#"
        },
        {
            "img": "",
            "description": "All of these services are checked if they are alive with Uptime Kuma.",
            "link": "#"
        },
        {
            "img": "",
            "description": "In the name of privacy, I have installed GrapheneOS in my personal phone and have taken measures against trackers and more things. WIth this, I have gathered knowledge of OSINT opportunities and plan to use them with my self-hosted AI.",
            "link": "#"
        }
];

const contactConfig = {
        "YOUR_EMAIL": "boramirez@miners.utep.edu",
        "YOUR_FONE": "(915) 841-0751",
        "description": "I am always open to new opportunities and collaborations. Feel free to reach out to me via email or phone. I look forward to hearing from you!",
        "YOUR_SERVICE_ID": "service_id",
        "YOUR_TEMPLATE_ID": "template_id",
        "YOUR_USER_ID": "user_id"
};

const socialprofils = {
    "github": "https://github.com/b3njaram",
    "facebook": "https://www.facebook.com/7nimajneb/",
    "linkedin": "https://www.linkedin.com/in/ramirez-benjamin",
};

export {
    meta,
    dataabout,
    dataportfolio,
    dataportfolio2025_2026,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};