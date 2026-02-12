// script.js
document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');

    if (productGrid && typeof products !== 'undefined') {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button class="btn add-to-cart" data-product-id="${product.id}">Add to Cart</button>
            `;
            productGrid.appendChild(productCard);
        });

        // Add to cart functionality
        productGrid.addEventListener('click', (event) => {
            if (event.target.classList.contains('add-to-cart')) {
                const productId = parseInt(event.target.dataset.productId);
                const selectedProduct = products.find(p => p.id === productId);
                if (selectedProduct) {
                    console.log('Added to cart:', selectedProduct);
                    alert(`${selectedProduct.name} added to cart! (Check console for details)`);
                    // In a real application, you would add this to a cart array/state
                }
            }
        });
    } else {
        console.error('Product grid element not found or products data is undefined.');
    }
});
