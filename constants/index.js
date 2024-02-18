const projects = [
    {
        title: "Boost Your Guys",
        organization: "BYG",
        class: "",
        description: "The official website of Boost Your Guys, a student art collective.",
        date: "Sep 2023 - Feb 2024",
        img: "byg_cover",
        altText: "Boost Your Guys",
        demo: "",
        git: "https://github.com/fpsales2003/byg",
        link: "https://www.boostyourguys.com/",
        skills: [
            "JavaScript",
            "Tailwind",
            "React",
            "Next.js"
        ] 
    },
    {
        title: "Subaru Clone",
        organization: "Syracuse University",
        class: "Advanced Front End Developement",
        description: "The final project for Advanced Front End Web Developments. This project consisted of a partial recreation of Subaru's official website. This project focused on content management, interactivity, and re-usability.",
        date: "Feb 2023 - May 2023",
        img: "subaru_cover",
        altText: "Subaru",
        demo: "https://ist-363-spring2023-subaru-fa2ztbmog-fpsales2003.vercel.app/vehicles",
        git: "https://github.com/fpsales2003/IST363-Spring2023-Subaru",
        link: "",
        skills: [
            "JavaScript",
            "SASS",
            "Next.js",
            "React.js",
            "Wordpress",
            "API's"
        ]
    },
    {
        title: "Avon Marketplace Rehaul",
        organization: "David Adam Realty, Inc.",
        class: "",
        description: "An update of the Avon Marketplace website for David Adam Realty, Inc. This redesign project included the addition of new stores, removal of closed stores, an overhaul of the photo reel, and updated contact info for clients and store managers.",
        date: "Jul 2021 - Aug 2021",
        img: "avon_cover",
        altText: "Avon",
        demo: "",
        git: "",
        link: "https://www.avonmarketplace.com/",
        skills: [
            "SquareSpace",
            "CSS",
            "HTML"
        ]
    },
    {
        title: "Intro to Web Dev Final",
        organization: "Syracuse University",
        class: "Intro to Front End Developement",
        description: "The final project for Intro to Web Development. This was my first Web Development project. It includes an interactive home page, embedded videos, and a responsive layout.",
        date: "Feb 2023 - May 2023",
        img: "workout_cover",
        altText: "Web Dev",
        demo: "https://fpsales2003.github.io/ist263/project7/index.html",
        git: "https://github.com/fpsales2003/ist263/tree/main/project7",
        link: "",
        skills: [
            "HTML",
            "CSS"
        ]
    },
]

export function getProjects() {
    return projects;
}

const socials = [
    {
        name: "linkedin",
        link: "https://www.linkedin.com/in/francis-sales/",
        img: "linkedin",
        alt: "Link to my LinkedIn"
    },
    {
        name: "github",
        link: "https://github.com/fpsales2003",
        img: "square-github",
        alt: "Link to my github"
    },
    {
        name: "instagram",
        link: "https://www.instagram.com/francis._.sales/",
        img: "square-instagram",
        alt: "Link to my Instagram"
    },
]

export function getSocials() {
    return socials;
}