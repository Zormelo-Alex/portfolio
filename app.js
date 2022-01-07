const burger = document.querySelector('.header .navbar .navlist .burger');
const mobile_menu = document.querySelector('.header .navbar .navlist ul');
const menuitems = document.querySelectorAll('.header .navbar .navlist ul li a');
const header = document.querySelector('.header.container');

burger.addEventListener('click',()=>{
    burger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
menuitems.forEach((item)=>{
    item.addEventListener('click',()=>{
        burger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});