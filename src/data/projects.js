// Import images
import { girlzimpact,jewelery,rentwheel,movie,todolist,shoes,clone,gpsapp, github } from "../assets";
import Construction from "../pages/Construction";
export const projectsData = [
  {
    id: 1,
    title: "Louer des voitures/motos",
    category: "Web Application",
    img: rentwheel,
    technologies:["MERN","Tailwind CSS"],
    publishDate: "Jul 26, 2023",
    isShow: true,
    redirect: "/inProgress",
    githubLink: "",
    isGit:false
  },
  {
    id: 2,
    title: "Shopping shoes",
    category: "UI/UX Design",
    img: shoes,
    technologies:["Figma"],
    publishDate: "avr 12, 2023",
    isShow: true,
    redirect: "https://www.figma.com/file/q0jW7QK3kqcizBeJzwI75X/Shoes-Ecommerce?type=design&node-id=0%3A1&t=lPDMf59G7o2X2EpU-1",
    githubLink: "",
    isGit:false
  },
  {
    id: 3,
    title: "Clone Figma",
    category: "UI/UX Design",
    img: clone,
    technologies:["Figma"],
    publishDate: "avr 12, 2023",
    isShow: false,
    redirect: "https://www.figma.com/file/ly71hAykAmamUgEVEXcu6j/Practice_-Figma-Homepage-Design-ODC-(1)?type=design&node-id=0%3A1&t=lPDMf59G7o2X2EpU-1",
    githubLink: "",
    isGit:false
  },
  {
    id: 4,
    title: "Gestion des evenement",
    category: "Web Application",
    img: girlzimpact,
    technologies: ["Wordpress", "Bootstrap", "Wpbackery"],
    publishDate: "Mar 1, 2023",
    isShow: true,
    redirect: "https://girlzforimpact.com/",
    githubLink: "",
    isGit:false
  },
  {
    id: 5,
    title: "Ecommerce jewelery",
    category: "Web Application",
    img: jewelery,
    technologies: ["PrestaShop", "Bootstrap"],
    publishDate: "Avr 20, 2023",
    isShow: false,
    redirect: "http://51.75.27.51/~bijouzc/",
    githubLink: "",
    isGit:false
  },
  {
    id: 6,
    title: "To Do List",
    category: "Web Application",
    img: todolist,
    technologies: ["React_Js", "Redux","Tailwind"],
    publishDate: "Avr 1, 2023",
    isShow: false,
    redirect: "https://todolist-korchi.netlify.app",
    githubLink:"",

    isGit:true

  },
  {
    id: 7,
    title: "Ecommerce canapé",
    category: "Web Application",
    img: "kanap",
    technologies: ["Javascript", "Node_Js"],
    publishDate: "Mar 8, 2023",
    isShow: false,
    redirect: "https://kanap.gtnsimon.dev/front/html/index.html",
    githubLink: "https://kanap.gtnsimon.dev/front/html/index.html",
    isGit:true
    
  },
  {
    id: 8,
    title: "Movie App",
    category: "Web Application",
    img: movie,
    technologies: ["React_Js"],
    publishDate: "Mar 28, 2023",
    isShow: false,
    redirect: "https://movie-app-korchi.netlify.app",
    githubLink:"https://github.com/Mrsoufixx/hookCheck.git",
    isGit:true
  },
  {
    id: 9,
    title: "Gps App",
    category: "UI/UX Design",
    img: gpsapp,
    technologies:["Figma"],
    publishDate: "fev 20, 2023",
    isShow: false,
    redirect: "https://girlzforimpact.com/",
    githubLink: "",
    isGit:false
  },
  {
    id: 10,
    title: "Gestion des livres",
    category: "Web Application",
    img: "WebImage1",
    technologies:["Laravel","Tailwind","Livewire","Chart_Js", "MySql"],
    publishDate: "Oct 28, 2022",
    isShow: true,
    redirect: "/private",
    githubLink: "",
    isGit:true
  },
];

