
let navbar = document.querySelector('#navbar');
let logo = document.querySelector('#logo');
let links = document.querySelectorAll('.nav-link-custom');
let containerfluid = document.querySelector('#containerfluid');
let bars = document.querySelector('#bars');

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 0) {
        navbar.style.height = '150px';
        navbar.classList.remove('bg-y');
        navbar.classList.add('bg-b')

        links.forEach((el)=>{
            el.classList.remove('text-b');
            el.classList.add('text-w');
            el.addEventListener('mouseover',()=>{
                el.classList.remove('text-w');
                el.classList.add('text-y');
            })
            el.addEventListener('mouseleave', ()=>{
                el.classList.add('text-w');
                el.classList.remove('text-y');
                el.classList.remove('text-b');
                
            })
        })

        logo.src="http://127.0.0.1:5502/Media/jet-milit-white.png";
        containerfluid.classList.remove('bg-y');
        containerfluid.classList.add('bg-b');
        bars.classList.remove('text-b');
        bars.classList.add('text-w');

    }else{
        navbar.style.height = '86px';
        navbar.classList.remove('bg-b');
        navbar.classList.add('bg-y');
        logo.src="http://127.0.0.1:5502/Media/jet-black.png";
        containerfluid.classList.remove('bg-b');
        containerfluid.classList.add('bg-y');
        bars.classList.remove('text-w');
        bars.classList.add('text-b');
        

        links.forEach((el)=>{
            el.classList.remove('text-w');
            el.classList.add('text-b')
            el.addEventListener('mouseover',()=>{
                el.classList.remove('text-b');
                el.classList.add('text-w');
            })
            el.addEventListener('mouseleave', ()=>{
                el.classList.remove('text-w');
                el.classList.add('text-b');
            })
        })

    }
})

bars.addEventListener('click', ()=>{
    logo.classList.toggle('rotateLogo')
})

logo.addEventListener('click', ()=>{
    logo.classList.toggle('rotate360');
})

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    logo.style.transform = "rotate(" + window.scrollY/5 + "deg)";
}