document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const span = document.getElementsByClassName("close")[0];
    const cartItems = document.getElementById('cart-items');
    const checkoutBtn = document.getElementById('checkout-btn');
    let cart = [];

    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        product.addEventListener('click', (e) => {
            if (e.target.classList.contains('buy-btn')) {
                const name = product.getAttribute('data-name');
                const price = product.getAttribute('data-price');
                const image = product.getAttribute('data-image');
                addToCart(name, price, image);
            } else {
                const imgSrc = product.getAttribute('data-image');
                const imgAlt = product.querySelector('img').alt;
                modal.style.display = "block";
                modalImg.src = imgSrc;
                captionText.innerHTML = imgAlt;
            }
        });
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    function addToCart(name, price, image) {
        cart.push({ name, price, image });
        renderCart();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
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
                message += `${index + 1}. ${item.name} - ${item.price}F cfa\n`;
            });
            const whatsappUrl = `https://wa.me/221778034451?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        } else {
            alert('Seu carrinho está vazio!');
        }
    });
});
