document.addEventListener('DOMContentLoaded',function(){

    
    const footer=document.getElementById("footer")

    window.onscroll=function(){
        if (window.scrollY===1){
            header.style.boxShadow='0 0 100rem 1px var(--main-color)'
        }
    }


})