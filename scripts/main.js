document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category');
    const subcategoriesSection = document.getElementById('subcategories');
    const productsSection = document.getElementById('products');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Função para salvar o carrinho no localStorage
    function saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    if (categories.length > 0) {
        categories.forEach(category => {
            category.addEventListener('click', (e) => {
                const category = e.target.getAttribute('data-category');
                window.location.href = `categories.html?category=${category}`;
            });
        });
    }

    if (subcategoriesSection) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        const subcategoryTitle = document.getElementById('category-title');
        subcategoryTitle.innerText = `Subcategorias de ${category}`;

        const subcategories = {
            sapatos: ['zara', 'hermes'],
            cabelos: ['cacheados', 'lisos', 'ondolado'],
            bolsas: ['prada', 'gucci']
        };

        subcategories[category].forEach(sub => {
            const subcategoryDiv = document.createElement('div');
            subcategoryDiv.classList.add('subcategory');
            subcategoryDiv.setAttribute('data-subcategory', sub);
            subcategoryDiv.innerText = sub.charAt(0).toUpperCase() + sub.slice(1);
            subcategoryDiv.addEventListener('click', (e) => {
                const subcategory = e.target.getAttribute('data-subcategory');
                window.location.href = `products.html?category=${category}&subcategory=${subcategory}`;
            });
            subcategoriesSection.appendChild(subcategoryDiv);
        });
    }

    if (productsSection) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        const subcategory = urlParams.get('subcategory');
        const subcategoryTitle = document.getElementById('subcategory-title');
        subcategoryTitle.innerText = `Produtos de ${subcategory}`;

        const products = [
            { name: 'Cabelo Ondolado - Preto', price: '150.000', image: 'images/cabelos/Ondolado/Ondolado - Preto.jpg', category: 'cabelos', subcategory: 'ondolado' },
            { name: 'Cabelo Ondolado tamanho 20', price: '120.000', image: 'images/cabelos/Ondolado/Ondolado tamanho 20.jpg', category: 'cabelos', subcategory: 'ondolado' },
            { name: 'Cabelo Ondolado - Preto', price: '150.000', image: 'images/cabelos/Ondolado/Ondolado tamanho 24.jpg', category: 'cabelos', subcategory: 'ondolado' },
            { name: 'Cabelo Ondolado tamanho 28', price: '170.000', image: 'images/cabelos/Ondolado/Ondolado 24.jpg', category: 'cabelos', subcategory: 'ondolado' },
            { name: 'Cabelo Ondolado tamanho 24', price: '150.000', image: 'images/cabelos/Ondolado/Ondolado 28.jpg', category: 'cabelos', subcategory: 'ondolado' },
            { name: 'Cabelo Cacheado 1', price: '15.000', image: 'images/cabelos/Cacheado/Cacheado 30.jpg', category: 'cabelos', subcategory: 'cacheados' },
            { name: 'Cabelo Cacheado 2', price: '15.000', image: 'images/cabelos/Cacheado/Cacheado 2.jpg', category: 'cabelos', subcategory: 'cacheados' },
            { name: 'Cabelo Cacheado 3', price: '15.000', image: 'images/cabelos/Cacheado/Cacheado 34.jpg', category: 'cabelos', subcategory: 'cacheados' },
            { name: 'Cabelo Cacheado 4', price: '15.000', image: 'images/cabelos/Cacheado/Cacheado.jpg', category: 'cabelos', subcategory: 'cacheados' },
            { name: 'Cabelo Cacheado 5', price: '15.000', image: 'images/cabelos/Cacheado/Cacheado  --  Afro -- Preto.jpg', category: 'cabelos', subcategory: 'cacheados' },
            { name: 'Bolsa Prada 1', price: '30.000', image: 'images/bolsas/prada/bolsa1.jpg', category: 'bolsas', subcategory: 'prada' },
            { name: 'Bolsa Prada 2', price: '35.000', image: 'images/bolsas/prada/bolsa2.jpg', category: 'bolsas', subcategory: 'prada' },
            { name: 'Cabelo Liso & Preto 40', price: '200.000', image: 'images/cabelos/Liso/Liso & 40.jpg', category: 'cabelos', subcategory: 'lisos' },
            { name: 'Cabelo Liso & Caramelo 32', price: '160.000', image: 'images/cabelos/Liso/Liso & Caramelo 32.jpg', category: 'cabelos', subcategory: 'lisos' },
            { name: 'Cabelo Liso & Caramelo 40', price: '200.000', image: 'images/cabelos/Liso/Liso & Caramelo 34.jpg', category: 'cabelos', subcategory: 'lisos' },
            { name: 'Cabelo Liso & Caramelo tamanho 10', price: '40.000', image: 'images/cabelos/Liso/Liso & Caramelo.jpg', category: 'cabelos', subcategory: 'lisos' },
            { name: 'Cabelo Liso & Cor_de_vinho tamanho 12', price: '50.000', image: 'images/cabelos/Liso/Liso & Cor_de_vinho.jpg', category: 'cabelos', subcategory: 'lisos' },
            { name: 'Cabelo Liso & Preto 1 tamanho 10', price: '40.000', image: 'images/cabelos/Liso/Liso & Preto 1.jpg', category: 'cabelos', subcategory: 'lisos' },
            { name: 'Cabelo Liso & Preto tamanho 12 ', price: '50.000', image: 'images/cabelos/Liso/Liso & Preto.jpg', category: 'cabelos', subcategory: 'lisos' },
            { name: 'Cabelo Liso tamanho 6', price: '25.000', image: 'images/cabelos/Liso/Liso 6.jpg', category: 'cabelos', subcategory: 'lisos' },
            { name: 'Cabelo Liso tamanho 12', price: '50.000', image: 'images/cabelos/Liso/Liso 12.jpg', category: 'cabelos', subcategory: 'lisos' },
            { name: 'Cabelo Liso 24', price: '22.000', image: 'images/cabelos/Liso/Liso 24.jpg', category: 'cabelos', subcategory: 'lisos' },
            { name: 'Cabelo Liso 26', price: '22.000', image: 'images/cabelos/Liso/Liso 26.jpg', category: 'cabelos', subcategory: 'lisos' },
            { name: 'Cabelo Liso 40', price: '22.000', image: 'images/cabelos/Liso/Liso 40.jpg', category: 'cabelos', subcategory: 'lisos' },
            { name: 'Cabelo Liso', price: '22.000', image: 'images/cabelos/Liso/Liso.jpg', category: 'cabelos', subcategory: 'lisos' },
            { name: 'Cabelo Liso 10', price: '50.000', video: 'videos/Liso videos/Liso 10.mp4', category: 'cabelos', subcategory: 'lisos' },
            { name: 'Cabelo Liso 12', price: '50.000', video: 'videos/Liso videos/Liso 12.mp4', category: 'cabelos', subcategory: 'lisos' },
            { name: 'Sapato Zara 1', price: '15.000', image: 'images/sapatos/Zara/IMG-20240618-WA0049.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 2', price: '15.000', image: 'images/sapatos/Zara/IMG-20240618-WA0076.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 3', price: '15.000', image: 'images/sapatos/Zara/IMG-20240618-WA0085.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 4', price: '15.000', image: 'images/sapatos/Zara/IMG-20240618-WA0086.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 5', price: '15.000', image: 'images/sapatos/Zara/IMG-20240618-WA0090.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 6', price: '15.000', image: 'images/sapatos/Zara/Zara-castanho.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 7', price: '15.000', image: 'images/sapatos/Zara/Zara meio-alto.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 8', price: '15.000', image: 'images/sapatos/Zara/IMG-20240618-WA0093.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 9', price: '15.000', image: 'images/sapatos/Zara/IMG-20240620-WA0045.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 10', price: '15.000', image: 'images/sapatos/Zara/IMG-20240620-WA0046.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 11', price: '15.000', image: 'images/sapatos/Zara/IMG-20240620-WA0047.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 12', price: '15.000', image: 'images/sapatos/Zara/IMG-20240620-WA0048.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 13', price: '15.000', image: 'images/sapatos/Zara/IMG-20240620-WA0049.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 14', price: '15.000', image: 'images/sapatos/Zara/IMG-20240620-WA0052.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 15', price: '15.000', image: 'images/sapatos/Zara/IMG-20240620-WA0053.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 16', price: '15.000', image: 'images/sapatos/Zara/IMG-20240620-WA0055.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 17', price: '15.000', image: 'images/sapatos/Zara/IMG-20240620-WA0056.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 18', price: '15.000', image: 'images/sapatos/Zara/IMG-20240620-WA0057.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 19', price: '15.000', image: 'images/sapatos/Zara/IMG-20240620-WA0058.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 20', price: '15.000', image: 'images/sapatos/Zara/IMG-20240620-WA0059.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 21', price: '15.000', image: 'images/sapatos/Zara/IMG-20240620-WA0060.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 22', price: '15.000', image: 'images/sapatos/Zara/Zara baixo-preto.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 23', price: '15.000', image: 'images/sapatos/Zara/Zara-creme-pontiagudo.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 24', price: '15.000', image: 'images/sapatos/Zara/Zara-dourado.jpg', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 25', price: '15.000', video: 'videos/Zara videos/VID-20240618-WA0097.mp4', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 26', price: '15.000', video: 'videos/Zara videos/VID-20240618-WA0098.mp4', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 27', price: '15.000', video: 'videos/Zara videos/VID-20240618-WA0099.mp4', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Zara 27', price: '15.000', video: 'videos/Zara videos/VID-20240618-WA0100.mp4', category: 'sapatos', subcategory: 'zara' },
            { name: 'Sapato Hermes 1', price: '16.000', image: 'images/sapatos/Hermes/Hermes.jpg', category: 'sapatos', subcategory: 'hermes' },
            { name: 'Sapato Hermes 2', price: '16.000', image: 'images/sapatos/Hermes/IMG-20240618-WA0044.jpg', category: 'sapatos', subcategory: 'hermes' },
            { name: 'Sapato Hermes 3', price: '16.000', image: 'images/sapatos/Hermes/IMG-20240618-WA0046.jpg', category: 'sapatos', subcategory: 'hermes' },
            { name: 'Sapato Hermes 4', price: '16.000', image: 'images/sapatos/Hermes/IMG-20240618-WA0047.jpg', category: 'sapatos', subcategory: 'hermes' },
            { name: 'Sapato Hermes 5', price: '16.000', image: 'images/sapatos/Hermes/IMG-20240618-WA0048.jpg', category: 'sapatos', subcategory: 'hermes' },
            { name: 'Sapato Hermes 6', price: '16.000', image: 'images/sapatos/Hermes/IMG-20240620-WA0051.jpg', category: 'sapatos', subcategory: 'hermes' }
        ];

        const filteredProducts = products.filter(product => product.category === category && product.subcategory === subcategory);

        filteredProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.setAttribute('data-name', product.name);
            productDiv.setAttribute('data-price', product.price);
            productDiv.setAttribute('data-image', product.image || '');
            productDiv.setAttribute('data-video', product.video || '');

            let mediaContent = '';
            if (product.image) {
                mediaContent = `<img src="${product.image}" alt="${product.name}">`;
            } else if (product.video) {
                mediaContent = `<video controls>
                                    <source src="${product.video}" type="video/mp4">
                                    Seu navegador não suporta o elemento de vídeo.
                                </video>`;
            }

            productDiv.innerHTML = `
                ${mediaContent}
                <h2>${product.name}</h2>
                <p>Preço: ${product.price}F cfa</p>
                <button class="buy-btn">Comprar</button>
            `;
            productsSection.appendChild(productDiv);
        });

        const buyButtons = document.querySelectorAll('.buy-btn');
        buyButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const product = e.target.parentElement;
                const name = product.getAttribute('data-name');
                const price = product.getAttribute('data-price');
                const image = product.getAttribute('data-image');
                const video = product.getAttribute('data-video');
                addToCart({ name, price, image, video });
                renderCart();
            });
        });
    }

    function addToCart(product) {
        cart.push(product);
        saveCartToLocalStorage(); // Salva o carrinho no localStorage após adicionar um produto
        renderCart();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        saveCartToLocalStorage(); // Salva o carrinho no localStorage após remover um produto
        renderCart();
    }

    function renderCart() {
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <p>${item.name} - ${item.price}F cfa</p>
                    <button class="remove-btn" data-index="${index}">Remover</button>
                </div>
            `;
            cartItems.appendChild(li);
        });

        const removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                removeFromCart(index);
            });
        });
    }

    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            let message = 'Gostaria de finalizar a compra dos seguintes itens:\n\n';
            cart.forEach((item, index) => {
                message += `${index + 1}. ${item.name} - ${item.price}F cfa\n${item.image ? item.image : item.video}\n`;
            });
            const whatsappUrl = `https://wa.me/221778034451?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        } else {
            alert('Seu carrinho está vazio!');
        }
    });

    // Renderiza o carrinho ao carregar a página
    renderCart();
});
