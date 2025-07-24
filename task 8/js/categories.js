let currentIndex = 0;
let products = [];

fetch('./js/products.json')
    .then(response => response.json())
    .then(data => {
        products = data;

        document.getElementById("view-more").addEventListener("click", () => {
            const container = document.querySelector(".products-category .carousel-container");

            const nextProducts = products.slice(currentIndex, currentIndex + 4);
            nextProducts.forEach(product => {
                const card = document.createElement('div');
                card.className = 'Card card-catergory';
                card.innerHTML = `
                    <img src="${product.image}" class="d-block" alt="">
                    <a href="#">${product.title}</a>
                    <p class="text-secondary">
                        <span class="pe-1 text-dark">$${product.price}</span>
                        <del>$${product.oldPrice}</del>
                    </p>
                    <div class="d-flex">
                        ${'<i class="fa-solid fa-star text-warning"></i>'.repeat(product.rating)}
                        ${'<i class="fa-regular fa-star text-muted"></i>'.repeat(5 - product.rating)}
                    </div>
                `;
                container.appendChild(card);
            });

            currentIndex += 4;

            if (currentIndex >= products.length) {
                const btn = document.getElementById("view-more");
                btn.disabled = true;
                btn.innerText = "No More";
            }
        });
    });
