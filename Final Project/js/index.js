
// btnScrollTop

const btnScrollTop = document.querySelector(".btnScrollTop");
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnScrollTop.style.display = "block";
    } else {
        btnScrollTop.style.display = "none";
    }
};
btnScrollTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// navbar 

const nav = document.querySelector(".main-nav");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (scrollY > 0 && scrollY < viewportHeight) {
        nav.classList.add("hide-nav");
        nav.classList.remove("show-nav");
    } else if (scrollY >= viewportHeight) {
        nav.classList.remove("hide-nav");
        nav.classList.add("show-nav");
    } else {
        nav.classList.remove("hide-nav", "show-nav");
    }
});


// const nav = document.querySelector("nav");
const clickSearchNav = document.querySelector("nav .search-nav .click-search-nav");
const clickInput = document.querySelector(".search-nav .click-input");
const overlayNav = document.querySelector(".overlay-search-nav");

clickInput.addEventListener("click", (e) => {
    e.stopPropagation();
    clickSearchNav.style.display = "block";
    overlayNav.classList.add("show");

    setTimeout(() => {
        clickSearchNav.classList.add("show");
    }, 10);
});

overlayNav.addEventListener("click", closeSearch);
document.addEventListener("click", function (e) {
    if (!e.target.closest(".search-nav")) {
        closeSearch();
    }
});

function closeSearch() {
    clickSearchNav.classList.remove("show");
    overlayNav.classList.remove("show");
    setTimeout(() => {
        clickSearchNav.style.display = "none";
    }, 300);
}

// navbar response in media(small)

document.addEventListener("DOMContentLoaded", function () {

    const sidebarWithNavbar = document.querySelector(".sidebar-with-navbar");
    const clickIconNav = document.querySelector(".list-nav");
    const overlay = document.querySelector(".overlay-sidebar-nav");
    const removeSidebar = document.querySelector(".remove-sidebar");

    if (sidebarWithNavbar && clickIconNav && overlay) {

        if (window.innerWidth < 768) {
            clickIconNav.addEventListener("click", () => {
                sidebarWithNavbar.classList.add("show");
                overlay.classList.add("show");
            });

            removeSidebar.addEventListener("click", () => {
                sidebarWithNavbar.classList.remove("show");
                overlay.classList.remove("show");
            });

            overlay.addEventListener("click", () => {
                sidebarWithNavbar.classList.remove("show");
                overlay.classList.remove("show");
            });
        }
    }
});






// end pages

// start content-wrapper

const contentWrapper = document.querySelector('.content-wrapper');

setInterval(() => {
    contentWrapper.scrollLeft += 220;
}, 2500);

// carousel-wrapper // flash-deals // best selling

let duration = 60 * 60 * 4;

const hoursSpan = document.querySelector(".flash-deals div div #hours");
const minutesSpan = document.querySelector(".flash-deals div div #minutes");
const secondsSpan = document.querySelector(".flash-deals div div #seconds");

const timer = setInterval(() => {
    if (duration <= 0) {
        clearInterval(timer);
        return;
    }

    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    hoursSpan.textContent = String(hours).padStart(2, "0");
    minutesSpan.textContent = String(minutes).padStart(2, "0");
    secondsSpan.textContent = String(seconds).padStart(2, "0");

    duration--;
}, 1000);


const carousels1 = document.querySelectorAll('.carousel-wrapper1');

function getScrollAmount(carousel) {
    return carousel.querySelector(".Card").offsetWidth;
}

function startAutoScroll() {
    carousels1.forEach((carousel) => {
        let autoScrollInterval = setInterval(() => {
            const scrollAmount = getScrollAmount(carousel);

            if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
                carousel.scrollLeft = 0;
            } else {
                carousel.scrollLeft += scrollAmount;
            }
        }, 8000);

        carousel.dataset.interval = autoScrollInterval;
    });
}

function scrollCarousel(direction, carousel) {
    clearInterval(carousel.dataset.interval);
    const scrollAmount = getScrollAmount(carousel);

    if (direction === 'left') {
        carousel.scrollLeft -= scrollAmount;
    } else {
        carousel.scrollLeft += scrollAmount;
    }

    setTimeout(() => startAutoScroll(), 8000);
}


startAutoScroll();

carousels1.forEach((carousel) => {
    const leftArrow = carousel.parentElement.querySelector('.left-arrow');
    const rightArrow = carousel.parentElement.querySelector('.right-arrow');

    leftArrow?.addEventListener('click', () => {
        scrollCarousel('left', carousel);
    });

    rightArrow?.addEventListener('click', () => {
        scrollCarousel('right', carousel);
    });
});


// start Hoodies

const right = document.querySelector(".hoodies .arrow-right");
const left = document.querySelector(".hoodies .arrow-left");
const imgcontainer = document.querySelector(".hoodies .img-product");

const imgs = [
    './imgs/person2.png',
    './imgs/person3.png',
    './imgs/person4.png'
];

let currentIndex = 0;

right.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= imgs.length) {
        currentIndex = 0;
    }
    updateImage();
});


left.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }
    updateImage();
});

function updateImage() {
    imgcontainer.innerHTML = "";
    const img = document.createElement("img");
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    div.className = "position-absolute discount-badge bg-danger rounded-circle p-2";
    h3.className = "text-white fw-bold m-0";
    h3.innerHTML = '-30%';
    img.src = imgs[currentIndex];
    img.alt = "photo";
    img.classList.add("img-fluid");
    div.appendChild(h3);
    imgcontainer.appendChild(img);
    imgcontainer.appendChild(div);
}

const linkImgPersons = document.querySelectorAll(".link-img-person img");

linkImgPersons.forEach((ele) => {
    ele.classList.remove("border-dark");
    ele.addEventListener('click', () => clickImg(ele));
});

function clickImg(ele) {
    imgcontainer.innerHTML = "";
    linkImgPersons.forEach((e) => {
        e.classList.remove("border-dark");
    });
    const img = document.createElement("img");
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    div.className = "position-absolute discount-badge bg-danger rounded-circle p-2";
    h3.className = "text-white fw-bold m-0";
    h3.innerHTML = '-30%';
    img.src = ele.src;
    img.alt = "photo";
    img.classList.add("img-fluid");
    ele.classList.add("border-dark");
    div.appendChild(h3);
    imgcontainer.appendChild(img);
    imgcontainer.appendChild(div);
}

// End Hoodies

// start From Our Blog




