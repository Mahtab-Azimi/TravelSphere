const navBtn=document.querySelector(".nav__btn"); /* گرفتن کلاس nav__btn توسظ javascript */
const navMenu=document.querySelector(".nav-menu")
let navOpen=false; /* در ابتدا منو بسته است */
navBtn.addEventListener("click", function(){

if(navOpen){   /* اگر منو باز بود */
    navBtn.classList.remove("nav__btn--open")
    navMenu.classList.remove("nav-menu--open")
    navOpen=false
}
else{  /* منو بسته بود */
    navBtn.classList.add("nav__btn--open")
    navMenu.classList.add("nav-menu--open")
    navOpen=true
}
})
