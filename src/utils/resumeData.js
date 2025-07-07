import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import WebhookOutlinedIcon from '@mui/icons-material/WebhookOutlined';
import { Language, YouTube } from '@mui/icons-material';

const resumeData =  {
    name: 'Soumik Dhar',
    title: 'UI Lead',
    birthday: '05th April 1984',
    phone: '7022022086',
    email: 'soumikdhar5@gmail.com',
    // address: 'xxxxxxxx, C.V. Raman Nagar, Bangalore, 560093',
    resumelink:'/assets/SoumikDharPDF.pdf',
    resumefile:'SoumikDharPDF.pdf',
    social: {
        Facebook: {
            link: 'https://www.facebook.com',
            text: 'MyFacebook',
            icon: <FacebookIcon />,
        },
        Linkedin: {
            link: 'https://www.linkedin.com/in/soumikdhar/',
            text: 'MyLinkedin',
            icon: <LinkedInIcon />,
        },
        Instagram: {
            link: 'https://www.instagram.com',
            text: 'MyInstagram',
            icon: <InstagramIcon />,
        },
        Github: {
            link: 'https://github.com/soumikdhar5',
            text: 'MyGithub',
            icon: <GitHubIcon />,
        }
    },
    about: 'I am a seasoned Full Stack Lead and UI Architect with over 15 years of experience delivering scalable, cloud-native applications across global enterprise environments. Currently at Capgemini, I lead architecture and development initiatives for high-impact clients in sectors like energy and retail. My recent focus has been on React.js, Node.js, GraphQL, and Micro Frontend architectures, where I’ve guided cross-functional teams in modernizing legacy systems, improving code quality, and enhancing user experience.\nPreviously, I spent over a decade at Dell Technologies as a Senior IT Analyst, where I specialized in enterprise integration, building ETL tools, subscription models, and reusable API frameworks. My efforts contributed to a 25% reduction in incident resolution time and significantly improved delivery velocity through automation and process optimization.\nI thrive at the intersection of technology and leadership, with a passion for clean architecture, performance tuning, and DevOps adoption. I bring strong communication, stakeholder engagement, and mentoring skills, shaped by earlier roles in customer care and operations.',
    experiances: [{
        title: 'Technical Manager UI Lead',
        date: '2023 till now',
        description: ' Working as Technical Manager',
    },
    {
        title: 'Senior Analyst',
        date: '2012 till 2023',
        description: ' Worked as Senior Analyst Software Enginner',
    },
    {
        title: 'Senior Executive',
        date: '2006 till 2011',
        description: ' Worked as Customer care operation',
    },
    ],
    education: [{
        title: 'M.Sc Bioinformatics',
        date: '2007',
        description: 'Specialised on Information Technology on Biological Science',
    },
    {
        title: 'BSc Science',
        date: '2004',
        description: 'Bachaleor in Science',
    },
    {
        title: 'Higher Secondary',
        date: '2001',
        description: 'Specialised in Pure Science',
    },],
    services: [
        {
            title: 'Web Development',
            description: 'I have been working on web development for last 10 years. created and hosted websites on demand.',
            icon: <WebOutlinedIcon />
        },
        {
            title: 'Enterprise Application',
            description: 'Experianed in developing Enterprise application for multinational company for inhouse and client projects',
            icon: <WebhookOutlinedIcon />
        },
    ],
    skill: [
        {
            title: 'FRONT-END',
            description: ['ReactJS', 'JavaScript', 'TypeScript', 'Bootstrap', 'Material UI']
        },
        {
            title: 'DATABASES',
            description: ['MS SQL Server', 'MySQL', 'PostGreSQL']
        },
        {
            title: 'SOURCE CONTROL',
            description: ['Git', 'GitHub', 'Scrum/Agile']
        }
    ],
    projects: [
        {
            tag: 'React',
            image: require('../assets/images/RestaurantbasedProject.jpg'),
            title: 'FOH and Enterprise application for Restaurant',
            caption:'Major US Restaurant Modernisation Project',
            description: `As a UI Lead and Senior Developer for a major US restaurant chain project, I managed resources, reviewed and developed code, approved pull requests, and guided the team on user stories in collaboration with the Business Analyst. I mentored team members on necessary technologies and testing practices, actively contributed to development, and ensured timely completion of project milestones.
            
            \nThis project involved modernizing the existing Front-of-House (FOH) and enterprise application using React for the UI and Java for the backend. We utilized Agile methodologies to update the application, following a microfrontend architecture with several functional units assigned to different teams. I completed my responsibilities through the pilot phase and contributed to refactoring the codebase as required.`,
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/soumikdhar5', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> },
            ]
        },
        {
            tag: 'React Chart JS',
            image: require('../assets/images/tycho.jpg'),
            title: 'Chart Application',
            caption:'customized chart application.',
            description: 'Worked as a Senior Developer for major US Oil Company client project in their enterprise application with react JS and GRAPHQL Node JS. The charts were highly customized with canvas level drawing and with enriched feature. Worked as implemented design in Figma and collaborated with design team and backend team to test and deliver the components.',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/soumikdhar5', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> },
            ]
        },
        {
            tag: 'React ETL Application',
            image: require('../assets/images/DreCockpit.jpg'),
            title: 'ETL Data Monitoring Application',
            caption:'ETL web tools using React JS and Node JS.',
            description: 'Previously served as a senior developer and lead at a major US-based product company, where I developed ETL web tools using React JS and Node JS for the Data Engineering Team. Created a Break Glass application for managing access and updates to Teradata Data Warehouse tables, leveraging Python APIs and React JS. Also developed and supported an interactive web application using React JS and PostgreSQL, integrating with Data Warehouse APIs to monitor and visualize critical load flows and server anomalies. The application was hosted on PCF with a Node JS Express server and followed Agile methodology for continuous improvement and support.',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/soumikdhar5', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> },
            ]
        },
        {
            tag: 'React and .NET Streamsets Application',
            image: require('../assets/images/Smartmanage.jpg'),
            title: 'ETL Data Application',
            caption:'ETL web tools using React JS and Node JS.',
            description: 'Developed a web tool in ASP.NET , later with React and Node JS for a cross-platform application, using Python APIs to interact with existing application APIs and manage ETL pipelines. The web tool was built on a .NET (VB) application with a PostgreSQL database and communicated with Python programs to interface with the StreamSets application\'s REST APIs, enabling operations such as starting, stopping, monitoring, and scheduling',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://github.com/soumikdhar5', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> },
            ]
        },
    ],
    vlogs:[
        {
            tag: 'Rendering without props',
            component:'iframe',
            height:'600',
            width:'600',
            src:'https://www.youtube.com/embed/IdAnc8TKJH8?si=uFJhftfyElfsIE3J',
            title: 'Rendering React component without props with Mobx Store : Class Based approach.',
            caption:'React component without props with Mobx Store',
            description: `Rendering React component without props with Mobx Store : Class Based approach. Understanding store implementation in both class and functional approach and their difference`,
            links: [
                { link: 'https://www.youtube.com/embed/IdAnc8TKJH8?si=uFJhftfyElfsIE3J', icon: <YouTube /> },
                { link: 'https://github.com/soumikdhar5/compwithoutprops', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> },
            ]
        },
        {
            tag: 'React To do List',
            component:'iframe',
            height:'600',
            width:'600',
            src:'https://www.youtube.com/embed/BFm1-dIJeJo?si=iMeBLDqVbj8WHSm2',
            title: 'React To do List',
            caption:'React To do List',
            description: `React MobX Defination, structure, To Do List explanation`,
            links: [
                { link: 'https://www.youtube.com/embed/BFm1-dIJeJo?si=iMeBLDqVbj8WHSm2', icon: <YouTube /> },
                { link: 'https://github.com/soumikdhar5/todoMobX', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> },
            ]
        },
        {
            tag: 'To Do List with MobX',
            component:'iframe',
            height:'600',
            width:'600',
            src:'https://www.youtube.com/embed/SX2JbaUVxso?si=QWUXa3JF19SOZAF6',
            title: 'To Do List with MobX',
            caption:'To Do List with MobX',
            description: `Implementation of To Do list react application with Mob X.`,
            links: [
                { link: 'https://www.youtube.com/embed/SX2JbaUVxso?si=QWUXa3JF19SOZAF6', icon: <YouTube /> },
                { link: 'https://github.com/soumikdhar5/todoMobX', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> },
            ]
        },
        {
            tag: 'React To Do List MobX',
            component:'iframe',
            height:'600',
            width:'600',
            src:'https://www.youtube.com/embed/ElR1TOYv9VE?si=aZq77Zw43e4zEgBx',
            title: 'React To Do List MobX',
            caption:'React To Do List MobX',
            description: `This is the second video of the React Mob X Series, showing the simple straightforward approach to create a To Do List application.`,
            links: [
                { link: 'https://www.youtube.com/embed/ElR1TOYv9VE?si=aZq77Zw43e4zEgBx', icon: <YouTube /> },
                { link: 'https://github.com/soumikdhar5/todoMobX', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> },
            ]
        },
        {
            tag: 'MobX ToDo Application',
            component:'iframe',
            height:'600',
            width:'600',
            src:'https://www.youtube.com/embed/xXwAUuTz5co?si=2uTj3z9ZNZqN26Ou',
            title: 'MobX ToDo Application',
            caption:'MobX ToDo Application',
            description: `This is a introduction video of MobX with simple To Do application and how its implemented.`,
            links: [
                { link: 'https://www.youtube.com/embed/xXwAUuTz5co?si=2uTj3z9ZNZqN26Ou', icon: <YouTube /> },
                { link: 'https://github.com/soumikdhar5/todoMobX', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> },
            ]
        },
    ]
}

export default resumeData