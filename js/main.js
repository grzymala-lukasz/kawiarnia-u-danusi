const cards = document.querySelectorAll('.menu__card')


function showCard() {
    cards.forEach(card => {
        card.classList.remove('menu__active')
        this.classList.add('menu__active')
    })
}

cards.forEach(card => card.addEventListener('click', showCard))


const footerYear = document.querySelector('.footer__year')

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();


let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('.nav_scroll')
let off = document.querySelector('.aboutus_click')
let home = document.querySelector('.home_click')

window.onscroll = () => {

    section.forEach(sec =>{

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('.nav_scroll[href*=' + id +' ]').classList.add('active')
            })
        }
    } )
}


