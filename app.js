
function Review(img, name, job, info) {
    this.img = img;
    this.name = name;
    this.job = job;
    this.info = info;
}

let firest = new Review(
    `https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/1775dd87258277f275233da15d412966~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=e5d0d695&x-expires=1768564800&x-signature=irs1o%2BBoX2KxN859JKMsRFlN2mQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2`,
    "Muhammad Arman Coder",
    "Web Developer",
    `- Clean and professional UI design
- Use modern CSS (flexbox/grid, shadows, hover effects)
- JavaScript should be well-structured and commented
- Use ES6 features (classes, constructors, arrow functions)
- Separate files: index.html, style.css, script.js`
)

let second = new Review(
    `https://scontent.cdninstagram.com/v/t51.82787-19/608243164_17918228145244094_6790389802022099368_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=108&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=eAp24coxBoYQ7kNvwFKyIdE&_nc_oc=Adl8ImdSAT-ZYQEhjlIuZVaCZc9Q13sQncujy8AavUxokUydcGqAmtl5JzlNVD6CFuo&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=3wkM2adtalsaxPqo5-G7IQ&oh=00_AfoamLnB__ceUnoV8cEmM1h6tYYDeJLVPEETCLx4gHRmLQ&oe=696D660A`,
    "Asad Coder",
    "Web Dsigner",
    `-- Dynamic data handling using JavaScript objects/arrays
- At least one interactive feature (buttons, toggle, slider, modal, etc.)
- DOM manipulation without any library
- Responsive on mobile, tablet, and desktop`
)


let third = new Review(
    `https://scontent.cdninstagram.com/v/t51.82787-19/608419954_17870674764500283_5766742047333100471_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=100&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=4ebzuWuYSoAQ7kNvwEXBRu7&_nc_oc=AdmkyZItVhUTvC4dFfdztutZhJKKId9BCN_sTtt-OC4LVhBcDt-BcH2JLIZKjmGOBj0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=6MvysMhYFRpa2ZeyIj_PEQ&oh=00_AfrTQ9BHsxkU9g5pZYmjxFUmZqED8d-hSahab5ULy4kFYA&oe=696D4E8E`,
    "Ahmed Khan",
    "AI & Data Scientist",
    `- Provide complete code for all files
- Do not skip any part
- Ensure the project works when copied and run in a browser`
)


let contruster = [firest, second, third];

let imgs = document.getElementById("person-img");
let author = document.getElementById("author");
let work = document.getElementById("job");
let information = document.getElementById("info");


let nextBtn = document.querySelector(".next-btn");
let preBtn = document.querySelector(".prev-btn");

let currentItems = 0;



function load() {

    let items = contruster[currentItems];
    imgs.src = items.img;
    author.innerText = items.name;
    work.innerText = items.job;
    information.innerText = items.info;
}


function nextItmes() {
    currentItems++;
    if (currentItems > contruster.length - 1) {
        currentItems = 0;
        load();
    }
}


function prevItmes() {
    currentItems--;
    if (currentItems < 0) {
        currentItems = contruster.length - 1;
        load();
    }
}
window.addEventListener("DOMContentLoaded", load)


nextBtn.addEventListener("click", nextItmes)

preBtn.addEventListener("click", prevItmes)

nextBtn.addEventListener("click", load)

preBtn.addEventListener("click", load)