violins = document.getElementById('violinos');
viola = document.getElementById('violas');
celos = document.getElementById('violoncelos');


violins.addEventListener('click', () => {
    window.open('/produtos/violinos').focus();
});

viola.addEventListener('click', () => {
    window.open('/produtos/violas').focus();
});

celos.addEventListener('click', () => {
    window.open('/produtos/violoncelos').focus();
});
