
const container = document.querySelector('.detailsProducts .image-zoom-container');
const image = container.querySelector('.detailsProducts .image-zoom-container .image-zoom');

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const scale = 2;
    const originX = x * 100;
    const originY = y * 100;

    image.style.transformOrigin = `${originX}% ${originY}%`;
    image.style.transform = `scale(${scale})`;
});

container.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
    image.style.transformOrigin = 'center center';
});


const btn = document.querySelector('.fullscreen-btn');

btn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        image.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

const changeZoomImge = document.querySelectorAll('.detailsProducts .change-zoom-imge img')

changeZoomImge.forEach( (img) => {
    img.addEventListener('click', () => {
        changeZoomImge.forEach((el) => el.classList.remove("border-dark"));
        image.src = img.src ;
        img.classList.add("border-dark");
    });
});

// Related Products

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

const listItems = document.querySelectorAll(".list-description li");
const allSections = document.querySelectorAll(".descriptions-container > div");

listItems.forEach(item => {
    item.addEventListener("click", () => {
        const targetId = item.getAttribute("data-target");

        allSections.forEach(section => {
            section.style.display = "none";
        });
        
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = "flex";
        }
    });
});
