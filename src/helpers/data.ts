import nestImg from 'assets/project/nestjs.png';
import nextjsImg from 'assets/project/nextjs.jpeg';
import reactUltimateImg from 'assets/project/react-ultimate.png';
import uiBase from 'assets/uibase.jpeg';
import imgDesign from 'assets/imgdesign.avif';
import webShopee from 'assets/webshopee.png';
import bookSaw from 'assets/booksaw.png';
import cafeteriaShop from 'assets/cafeteriashop.png';
import gorGame from 'assets/gorgame.png';



export const APP_DATA = {
    YOUTUBE_URL: "https://www.youtube.com/@phuongnam3119/videos",
    TIKTOK_URL: "https://www.tiktok.com/@pikuchamizunoizumi",
    GITHUB_URL: "https://github.com/PHUONGNAMKEM",
    FACEBOOK_URL: "https://www.facebook.com/nakroth.megan"
}

export const EXPERIENCES = [
    {
        id: 1,
        title: {
            vi: "Lập Trình Viên",
            en: "Fullstack Developer"
        },
        company: {
            vi: "Trường đại học Công Thương Thành phố Hồ Chí Minh",
            en: "HCMC University of Industry and Trade"
        },
        duration: {
            vi: "Jan 2024 - Hiện tại",
            en: "Jan 2024 - Present"
        }
    },
    {
        id: 2,
        title: {
            vi: "Lập Trình Viên",
            en: "Design Wordpress Flatsome UI"
        },

        company: {
            vi: "Công ty F (freelancer)",
            en: "F (freelancer)"
        },
        duration: {
            vi: "Tháng 6/2024 - Tháng 10/2024",
            en: "Jun 2024 - Oct 2024"
        }
    },
    {
        id: 3,
        title: {
            vi: "Dự án tự làm",
            en: "Self Employed"
        },
        company: {
            vi: "Học kiến thức mới mỗi ngày",
            en: "Code and build something in everyday."
        },
        duration: {
            vi: "Tháng 6/2023 - Hiện tại",
            en: "Jun 2023 - Present"
        }
    }
]

export const PROJECTS = [
    {
        id: 1,
        type: {vi: "Giao diện", en:"UI"},
        imgPath: uiBase,
        title: {vi: "Website Bán Mắt Kính", en: "Website Glasses Sales"},
        description: {vi: "Website được thiết kế đơn giản với HTML, CSS & Javascript. Project đầu tiên code thuần nhưng lại rất chỉnh chu, mang đến một sản phẩm tuyệt vời mang phong cách thanh lịch tao nhã và nhẹ nhàng sang trọng", en: "This website features a simple design built with HTML, CSS, and JavaScript. Although it was my first project using pure code, it's meticulously crafted, delivering a wonderful product with an elegant, refined, and subtly sophisticated style."},
        githubLink: "https://github.com/PHUONGNAMKEM/ProjectMatKinh",
        demoLink: "https://project-mat-kinh.vercel.app/"
    },
    {
        id: 2,
        type: {vi: "Giao diện", en:"UI"},
        imgPath: imgDesign,
        title: {vi: "Giao diện ảnh đơn giản", en: "Basic Image Design"},
        description: {vi: "Website được thiết kế đơn giản với HTML, CSS & Javascript. Project đầu tiên code thuần nhưng lại rất chỉnh chu, mang đến một sản phẩm tuyệt vời mang phong cách thanh lịch tao nhã và nhẹ nhàng sang trọng", en: "This website features a simple design built with HTML, CSS, and JavaScript. Although it was my first project using pure code, it's meticulously crafted, delivering a wonderful product with an elegant, refined, and subtly sophisticated style."},
        githubLink: "https://github.com/PHUONGNAMKEM/ProjectDesignImg",
        demoLink: "https://project-design-img.vercel.app/"
    },
    {
        id: 3,
        type: {vi: "Giao diện", en:"UI"},
        imgPath: webShopee,
        title: {vi: "Trang chủ shopee", en: "Home Page Shopee"},
        description: {vi: "Website được thiết kế đơn giản với HTML, CSS & Javascript. Project đầu tiên code thuần nhưng lại rất chỉnh chu, mang đến một sản phẩm tuyệt vời mang phong cách thanh lịch tao nhã và nhẹ nhàng sang trọng", en: "This website features a simple design built with HTML, CSS, and JavaScript. Although it was my first project using pure code, it's meticulously crafted, delivering a wonderful product with an elegant, refined, and subtly sophisticated style."},
        githubLink: "https://github.com/PHUONGNAMKEM/ProjectShopee",
        demoLink: "https://project-shopee-beryl.vercel.app/"
    },
    {
        id: 4,
        type: {vi: "Dự án Mini", en:"Mini Project"},
        imgPath: gorGame,
        title: {vi: "Game Giải cứu", en: "Game Helps"},
        description: {vi: "Website được thiết kế đơn giản với HTML, CSS & Javascript. Project đầu tiên code thuần nhưng lại rất chỉnh chu, mang đến một sản phẩm tuyệt vời mang phong cách thanh lịch tao nhã và nhẹ nhàng sang trọng", en: "This website features a simple design built with HTML, CSS, and JavaScript. Although it was my first project using pure code, it's meticulously crafted, delivering a wonderful product with an elegant, refined, and subtly sophisticated style."},
        githubLink: "https://github.com/PHUONGNAMKEM/GameA-_HillClimbing",
        demoLink: "https://gorgame.cafeteriashop.io.vn/"
    },
    {
        id: 5,
        type: {vi: "Dự án hoàn chỉnh", en:"Finished Website Project"},
        imgPath: cafeteriaShop,
        title: {vi: "Website Bán Cà phê", en: "Website Coffee"},
        description: {vi: "Website được thiết kế đơn giản với HTML, CSS & Javascript và C#. Project đầu tiên code thuần nhưng lại rất chỉnh chu, mang đến một sản phẩm tuyệt vời mang phong cách thanh lịch tao nhã và nhẹ nhàng sang trọng", en: "This website features a simple design built with HTML, CSS, JavaScript and C# with MVC model - ADO technique. Although it was my first project using pure code, it's meticulously crafted, delivering a wonderful product with an elegant, refined, and subtly sophisticated style."},
        githubLink: "https://github.com/Hoctapjs/LapTrinhWeb",
        demoLink: "https://caphe.huynhthanhson.io.vn/"
    },
    {
        id: 6,
        type: {vi: "Dự án hoàn chỉnh", en:"Finished Website Project"},
        imgPath: bookSaw,
        title: {vi: "Website Bán Sách", en: "Website Books Sales"},
        description: {vi: "Website được thiết kế đơn giản với HTML, CSS & Javascript và C#. Project đầu tiên code thuần nhưng lại rất chỉnh chu, mang đến một sản phẩm tuyệt vời mang phong cách thanh lịch tao nhã và nhẹ nhàng sang trọng", en: "This website features a simple design built with HTML, CSS, JavaScript and C# with MVC model - ADO technique. Although it was my first project using pure code, it's meticulously crafted, delivering a wonderful product with an elegant, refined, and subtly sophisticated style."},
        githubLink: "https://github.com/Hoctapjs/WebBanSach",
        demoLink: "https://booksaw.huynhthanhson.io.vn/"
    }
]

export const SKILLS_DATA = [
    'HTML',
    'CSS',
    'Javascript',
    'Typescript',
    'React',
    'Tailwind',
    'Bootstrap',
    'MongoDB',
    'SQL',
    'DBeaver',
    'Docker',
    'Git',
    'Figma',
    'C#',
    'C',
    'Python',
    'Node JS',
    'Dart',
    'Flutter'

  ]
  
  // Choose your skills from below. Make sure it's in the same format and spelled correctly.
  // Couldn't find the required skills? Raise an issue on github at https://github.com/hhhrrrttt222111/developer-portfolio/issues/new
  
  
  // AVAILABLE SKILLS
  
  /* 
    HTML
    CSS
    JS 
    React
    Next JS
    Nuxt JS
    Node JS
    Vue
    Angular
    Docker
    Photoshop
    Illustrator
    Svelte
    GCP
    Azure
    Fastify
    Haxe
    Ionic
    Markdown
    Microsoft Office
    Picsart
    Sketch
    Unity
    WolframAlpha
    Adobe XD
    After Effects
    Bootstrap
    Bulma
    CapacitorJs
    Coffeescript
    MemSQL
    C
    C++
    C#
    Python
    Java
    Julia
    Matlab
    Swift
    Ruby
    Kotlin
    Go
    PHP
    Flutter
    Dart
    Typescript
    Swift
    Git
    Figma
    Canva
    Ubuntu
    Bootstrap
    MongoDB
    Tailwind
    ViteJS
    VuetifyJS
    MySQL
    PostgreSQL
    AWS
    Firebase
    Blender
    Premiere Pro
    Adobe Audition
    Deno
    Django
    Gimp
    Graphql
    Lightroom
    MaterialUI
    Nginx
    Numpy
    OpenCV
    Pytorch
    Selenium
    Strapi
    Tensorflow
    Webex
    Wordpress
  */