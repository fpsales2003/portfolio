const projects = [
    {
        title: "Subaru Clone",
        organization: "Syracuse University",
        class: "Advanced Front End Developement",
        description: "Class final project. A partial recreation of Subaru's website.",
        date: "Feb 2023 - May 2023",
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
        skills: [
            "HTML",
            "CSS"
        ]
    }
]

export function getProjects() {
    return projects;
}