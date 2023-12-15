//selector
const main = document.querySelector('.main');
const light = document.querySelector('.main .container .light');
const burger = document.querySelector('.header .navbar .navlist .burger');
const mobile_menu = document.querySelector('.header .navbar .navlist ul');
const menuitems = document.querySelectorAll('.header .navbar .navlist ul li a');
const header = document.querySelector('.header.container');
const yinYang = document.querySelector(".yin-yang-container");
const viewmore = document.querySelector(".more button");
const message = document.querySelector(".message .btn");
const sendMailBtn = document.querySelector(".message .ins button")

// window.addEventListener("load", ()=>{
//     yinYang.style.display = "none";
// })
//events
setTimeout(stop,2500);

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

viewmore.addEventListener("click", ()=>{
    document.querySelector(".moreProjects").classList.toggle("view");
    if(viewmore.innerText == "View More "){
        viewmore.innerHTML = `View Less <i class="fa-sharp fa-solid fa-caret-up"></i>`
    }else{
        viewmore.innerHTML = `View More <i class="fa-solid fa-caret-down"></i>`
    }
    
})

sendMailBtn.addEventListener("click", sendMail)

message.addEventListener("click", ()=>{
    document.querySelector(".message .ins").classList.toggle("view");
    if(document.querySelector(".message .ins").classList.contains("view")){
        message.innerHTML = `<span>Send Me A Message📧</span> <i class="fa-sharp fa-solid fa-caret-up"></i>`
    }else{
        message.innerHTML = `<span>Send Me A Message📧</span> <i class="fa-solid fa-caret-down"></i>`
    }
    
})

light.addEventListener('click',white);


//functions
function white(){
    main.classList.toggle('white');
}

function stop(){
    yinYang.style.display = "none";
};

function sendMail(){
    let name = document.querySelector(".message .ins .name")
    let email = document.querySelector(".message .ins .email")
    let messageText = document.querySelector(".message .ins textarea")


    name = name.value.trim()
    email = email.value.trim()
    messageText = messageText.value.trim()
    if(!name || !email || !messageText) return alert("Please fill in all fields")

    console.log({name})
};

AOS.init({
    easing: 'ease',
    duration: 1800,
    once: true
});