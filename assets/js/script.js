let nav = document.getElementById('nav-bar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        nav.classList.add('navcolor', 'shadow');
    } else {
        nav.classList.remove('navcolor', 'shadow')
    }
})