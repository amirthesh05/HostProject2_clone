const hamburger = document.getElementById('hamburger');
const menu_items = document.querySelector('.menubar');

hamburger.addEventListener('click', () => {
    console.log('ham works');
    
    menu_items.classList.toggle('hidden');
})