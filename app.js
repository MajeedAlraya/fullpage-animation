const menu = ()=> {
    const burger = document.querySelector('.burger');
    const icons = document.querySelector('.icons');

    burger.addEventListener('click', ()=> {
        icons.classList.toggle('nav-slide');
    })
}

menu();

new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true
});