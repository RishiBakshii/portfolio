document.addEventListener('DOMContentLoaded',function(){

    const header=document.getElementById("header")
    const menuIcon=document.getElementById("hamburger-menu")
    const navbar=document.getElementById("navbar")
    

    setTimeout(() => {
        header.style.boxShadow='0 0 1rem 1px var(--main-color)'
    }, 800);

    setTimeout(() => {
        header.style.boxShadow=''
    }, 1000);

    setTimeout(() => {
        header.style.boxShadow='0 0 1rem 1px var(--main-color)'
    }, 1200);

    setTimeout(() => {
        header.style.boxShadow=''
    }, 1400);

    setTimeout(() => {
        header.style.boxShadow='0 0 1rem 1px var(--main-color)'
    }, 1500);

    setTimeout(() => {
        header.style.boxShadow=''
    }, 1600);

    setTimeout(() => {
        header.style.boxShadow='0 0 1rem 1px var(--main-color)'
    }, 1700);

    setTimeout(() => {
        header.style.boxShadow=''
    }, 1800);

    setTimeout(() => {
        header.style.boxShadow='0 0 1rem 1px var(--main-color)'
    }, 1850);

    setTimeout(() => {
        header.style.boxShadow=''
    }, 1900);

    setTimeout(() => {
        header.style.boxShadow='0 0 1rem 1px var(--main-color)'
    }, 1920);

    setTimeout(() => {
        header.style.boxShadow=''
    }, 1940);

    setTimeout(() => {
        header.style.boxShadow='0 0 1rem 1px var(--main-color)'
    }, 1960);

    setTimeout(() => {
        header.style.boxShadow=''
    }, 1980);

    setTimeout(() => {
        header.style.boxShadow='0 0 1rem 1px var(--main-color)'
    }, 2000);

    setTimeout(() => {
        header.style.boxShadow=''
    }, 2010);

    setTimeout(() => {
        header.style.boxShadow='0 0 1rem 1px var(--main-color)'
    }, 2020);
    setTimeout(() => {
        header.style.boxShadow=''
    }, 2030);

    setTimeout(() => {
        header.style.boxShadow='0 0 1rem 1px var(--main-color)'
    }, 2040);
    setTimeout(() => {
        header.style.boxShadow=''
    }, 2050);

    setTimeout(() => {
        header.style.boxShadow='0 0 1rem 1px var(--main-color)'
    }, 2060);
    setTimeout(() => {
        header.style.boxShadow=''
    }, 2070);

    setTimeout(() => {
        header.style.boxShadow='0 0 1rem 1px var(--main-color)'
    }, 2080);
    setTimeout(() => {
        header.style.boxShadow=''
    }, 2090);

    setTimeout(() => {
        header.style.boxShadow='0 0 1rem 1px var(--main-color)'
    }, 2100);
    setTimeout(() => {
        header.style.boxShadow=''
    }, 2110);

    setTimeout(() => {
        header.style.boxShadow='0 0 1rem 1px var(--main-color)'
    }, 2120);
    setTimeout(() => {
        header.style.boxShadow=''
    }, 2130);

    setTimeout(() => {
        header.style.transition='.4s'
        header.style.boxShadow='0 0 100rem 1px var(--main-color)'
    }, 2200);

    document.onscroll=function(){
        header.style.boxShadow=''
    }

    window.onscroll=function(){
        if (window.scrollY===0){
            header.style.boxShadow='0 0 4rem 1px var(--main-color)'
        }
        menuIcon.classList.remove('bx-x')
        navbar.classList.remove('show')
    }




    menuIcon.addEventListener("click",function(){
        navbar.classList.toggle("show")
        menuIcon.classList.toggle("bx-x")
    })



})