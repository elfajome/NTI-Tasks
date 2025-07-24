
// header

let sidebar = document.getElementById("sidebar1");
let overlay = document.getElementById("overlay1");
let shopCategory = document.getElementById("shop-category");
let closeSidebar = document.getElementById("closeSidebar1");

shopCategory.addEventListener("click",(e) => {
    if (e.target.id === "closeSidebar1") return;
    e.preventDefault(); 
    sidebar.classList.add("activee");
    overlay.classList.add("activee");
});

closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("activee");
    overlay.classList.remove("activee");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("activee");
    overlay.classList.remove("activee");
});


let homepage = document.getElementById("homepage");
let categories = document.getElementById("categories");
let Products = document.getElementById("Products");
let Pages = document.getElementById("Pages");
let header = document.getElementById("header");

homepage.addEventListener("mouseenter", showHomePageImages);
categories.addEventListener("mouseenter", showCategories);
Products.addEventListener("mouseenter", showProducts);
Pages.addEventListener("mouseenter", showPages);

header.addEventListener("mouseleave", () => removeExistingSections());

function removeExistingSections(exclude = "") {
    const sections = [".home-imgs", ".categories", ".Products", ".Pages"];
    sections.forEach(selector => {
        if (selector !== exclude) {
            const el = document.querySelector(selector);
            if (el) el.remove();
        }
    });
}


// start home page
let count1 = 6;

function showHomePageImages() {

    removeExistingSections(".home-imgs");

    removeExistingSections(".home-imgs");
    let container = document.createElement("div");
    container.className =
        "p-4 rounded mx-3 mt-1 row justify-content-center align-items-center bg-white shadow home-imgs position-absolute";

    for (let i = 0; i < count1; i++) {
        let div = document.createElement("div");
        div.className = "col-lg-3 m-2 shadow";

        let image = document.createElement("img");
        image.className = "img-fluid p-2";
        image.src = `./imgs/mega-home-${i + 1}.jpg`;
        image.alt = `photo-${i}`;

        div.appendChild(image);
        container.appendChild(div);
    }

    header.appendChild(container);
}

// End home page

// start categories

function showCategories() {

    removeExistingSections(".categories");

    removeExistingSections(".categories");
    let container = document.createElement("div");
    container.className = "rounded position-absolute p-4 mx-3 mt-1 row align-items-center bg-white shadow categories";

    let div1 = document.createElement("div");
    div1.className = "col-lg-3";

    let ul = document.createElement("ul");
    ul.innerHTML = `
            <li class="pb-3"><a href="#" class="underline-none text-dark fw-bold">Shop Layouts</a></li> 
            <li class="pb-2"><a href="#" class="underline-none text-dark">Top Categories style 1</a></li> 
            <li class="pb-2"><a href="#" class="underline-none text-dark">Categories style 1</a></li> 
            <li class="pb-2"><a href="#" class="underline-none text-dark">Top Brands</a></li> 
            <li class="pb-2"><a href="#" class="underline-none text-dark">List Layout</a></li> 
            <li class="pb-2"><a href="#" class="underline-none text-dark">infinity Scroll</a></li> 
            <li class="pb-2"><a href="#" class="underline-none text-dark">Load More Button</a></li> 
            <li class="pb-2"><a href="#" class="underline-none text-dark">SuperMarket</a></li> 
        `;

    let div3 = document.createElement("div");
    div3.className = "col-lg-6";
    let image = document.createElement("img");
    image.className = "img-fluid";
    image.src = "./imgs/mega-shop-layout.png";
    image.alt = `photo-layout`;
    div3.appendChild(image);

    let div2 = document.createElement("div");
    div2.className = "col-lg-3";
    let ul2 = document.createElement("ul");
    ul2.innerHTML = ul.innerHTML;


    div1.appendChild(ul);
    div2.appendChild(ul2);
    container.appendChild(div1);
    container.appendChild(div2);
    container.appendChild(div3);

    header.appendChild(container);
}

// End categories

// start products

function showProducts() {

    removeExistingSections(".Products");

    removeExistingSections(".Products");
    let container = document.createElement("div");
    container.className = "rounded position-absolute p-4 w-25 mx-auto mx-3 mt-1 row align-items-center bg-white shadow Products";
    let ul = document.createElement("ul");
    ul.innerHTML = `
            <li class="pb-3"><a href="#" class="underline-none text-dark fw-bold">Shop Layouts</a></li> 
            <li class="pb-2"><a href="#" class="underline-none text-dark">Top Categories style 1</a></li> 
            <li class="pb-2"><a href="#" class="underline-none text-dark">Categories style 1</a></li> 
            <li class="pb-2"><a href="#" class="underline-none text-dark">Top Brands</a></li> 
            <li class="pb-2"><a href="#" class="underline-none text-dark">List Layout</a></li> 
            <li class="pb-2"><a href="#" class="underline-none text-dark">infinity Scroll</a></li> 
            <li class="pb-2"><a href="#" class="underline-none text-dark">Load More Button</a></li> 
            <li class="pb-2"><a href="#" class="underline-none text-dark">SuperMarket</a></li> 
        `;

    container.appendChild(ul);
    header.appendChild(container);
}

// end products

// start pages

function showPages() {

    removeExistingSections(".Pages");

    removeExistingSections(".Pages");
    let container = document.createElement("div");
    container.className = "rounded position-absolute p-4 mx-3 mt-1 row align-items-center bg-white shadow Pages";

    let ul = document.createElement("ul");
    ul.innerHTML = `
            <li class="pb-3"><a href="#" class="underline-none text-dark fw-bold">Shop Layouts</a></li> 
            <li class="pb-2"><a href="#" class="underline-none text-dark">Top Categories style 1</a></li> 
            <li class="pb-2"><a href="#" class="underline-none text-dark">Categories style 1</a></li> 
            <li class="pb-2"><a href="#" class="underline-none text-dark">Top Brands</a></li> 
            <li class="pb-2"><a href="#" class="underline-none text-dark">List Layout</a></li> 
            <li class="pb-2"><a href="#" class="underline-none text-dark">infinity Scroll</a></li> 
            <li class="pb-2"><a href="#" class="underline-none text-dark">Load More Button</a></li> 
            <li class="pb-2"><a href="#" class="underline-none text-dark">SuperMarket</a></li> 
        `;

    let div1 = document.createElement("div");
    div1.className = "col-lg-3";

    let div2 = document.createElement("div");
    div2.className = "col-lg-3";
    let ul2 = document.createElement("ul");
    ul2.innerHTML = ul.innerHTML;

    let div3 = document.createElement("div");
    div3.className = "col-lg-3";
    let ul3 = document.createElement("ul");
    ul3.innerHTML = ul.innerHTML;

    let div4 = document.createElement("div");
    div4.className = "col-lg-3";
    let ul4 = document.createElement("ul");
    ul4.innerHTML = ul.innerHTML;


    div1.appendChild(ul);
    div2.appendChild(ul2);
    div3.appendChild(ul3);
    div4.appendChild(ul4);
    container.appendChild(div1);
    container.appendChild(div2);
    container.appendChild(div3);
    container.appendChild(div4);

    header.appendChild(container);
}
