const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link,index) => {
            if(link.style.animation){
                //To close
                link.style.animation = '';
                console.log('reset');
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
                console.log(link.style.animation);
            }
        });

        burger.classList.toggle('toggle');

    });

}   

navSlide();