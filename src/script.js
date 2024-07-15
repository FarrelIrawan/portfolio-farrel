// fixed navbar

window.onscroll = function() {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    const btnToTop = document.querySelector('#btnToTop');

    if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
        btnToTop.classList.remove("backToTop");
    } else {
        header.classList.remove("navbar-fixed");
        btnToTop.classList.add("backToTop");
    }
}


// hamburger - navigation menu

const hamburger = document.querySelector("#hamburger");
const naviOption = document.querySelector("#navigation");

hamburger.addEventListener("click", (e)=> {
    hamburger.classList.toggle("hamburger-active");
        naviOption.classList.toggle("hidden");
})




// open social media
const ins = document.querySelector("#instagram");
const twt = document.querySelector("#twitter");
const git = document.querySelector("#github");
const link = document.querySelector("#linkedin");
    ins.addEventListener("click", (i)=> {
        window.open("https://instagram.com/canttguardrell", "_blank");
    })
    twt.addEventListener("click", (t)=> {
        window.open("https://twitter.com/vngcfarrel", "_blank");
    });
    git.addEventListener("click", (g)=> {
        window.open("https://github.com/FarrelIrawan", "_blank");
    });
    link.addEventListener("click", (m)=> {
        window.open("http://ca.linkedin.com/in/farrel-irawan-358578317/", "_blank")
    })


// open techtstack 

const html = document.querySelector("#html");
const tailwind = document.querySelector("#tailwind"); 
const js = document.querySelector("#javascript"); 

html.addEventListener("click", (e)=> {
    window.open("https://html.com/", "_blank");
});
tailwind.addEventListener("click", (e)=> {
    window.open("https://tailwindcss.com/", "_blank");
});
js.addEventListener("click", (e)=> {
    window.open("https://www.javascript.com/", "_blank");
});