const projects = [
    {
        title: "Subaru Clone",
        organization: "Syracuse University",
        class: "Advanced Front End Developement",
        description: "Class final project. A partial recreation of Subaru's website.",
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
            "Wordpress"
        ]
    },
    {
        title: "Avon Marketplace Rehaul",
        organization: "David Adam Realty, Inc.",
        class: "",
        description: "An update of the Avon Marketplace website. Added new stores, removed closed stores, redesigned photo reel, added new contact info for store managers.",
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
        description: "A workout focused website including an interactive home page. Meant to target beginner lifters looking for info on intro exercises.",
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
    }
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