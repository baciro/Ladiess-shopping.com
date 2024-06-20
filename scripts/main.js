document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const span = document.getElementsByClassName("close")[0];

    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        product.addEventListener('click', () => {
            const imgSrc = product.getAttribute('data-image');
            const imgAlt = product.querySelector('img').alt;

            modal.style.display = "block";
            modalImg.src = imgSrc;
            captionText.innerHTML = imgAlt;
        });
    });

    span.onclick = function() { 
        modal.style.display = "none";
    }

    const buyButtons = document.querySelectorAll('.buy-btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            alert('Para comprar, por favor, entre em contato pelo nosso número de WhatsApp: +221 77 803 44 51');
        });
    });
});
