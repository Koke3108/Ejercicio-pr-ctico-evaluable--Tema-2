const openFormButton = document.querySelector('.cta-buttons button:first-child');
const closeFormButton = document.getElementById('closeForm');
const offCanvasForm = document.getElementById('offCanvasForm');

openFormButton.addEventListener('click', function () {
    offCanvasForm.classList.add('active');
});

closeFormButton.addEventListener('click', function () {
    offCanvasForm.classList.remove('active');
});