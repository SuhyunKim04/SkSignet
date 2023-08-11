const modal = () => {
    const modalWrap = document.querySelector('.modalWrap');
    const close = document.querySelector('.close');
    const openvideo = document.querySelector('.openVideo');

    // apple.innerHTML = 'hello'
    openvideo.addEventListener('click', (e) => {
        console.log('hello');
        modalWrap.classList.add('open');
        console.log('end')
        
    })
console.log(close)
    close.addEventListener('click', (e) =>{
        modalWrap.classList.remove('open');
    })


}

const drop = () => {
    const wrap = document.querySelector('.visualContents');
    const arrowBtn = document.querySelector('.choose .btn');
    const dropDown = document.querySelector('.chooseDrop');
    const icon = document.querySelector('.choose .icon');
    let active = 0;

    arrowBtn.addEventListener('click',(e) => {

        dropDown.classList.toggle('open')
        icon.classList.toggle('open')
    })
}

function slideBanners() {
    const $list = $('.slideWrap .list')
    $list.slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        fade: true,
        cssEase: 'linear'
      });
}



const test = () =>{
    const btns = document.querySelectorAll('.chooseDrop-data li');
    const msg = document.querySelector('.select span');
    const link = document.querySelector('.link-go');
    btns.forEach((e,i) => {
        console.log(e)
        e.addEventListener('click',(event) => {
            const target = event.target
            msg.innerHTML = target.innerHTML 
            link.setAttribute('href',target.dataset.url);
            link.setAttribute('title',target.dataset.title);
            console.log(target.dataset.url)
        })
    });

}
const test1 = () =>{
    const Btns = document.querySelectorAll('.chooseDrop-a li');
    const msg = document.querySelector('.select span');
    const link = document.querySelector('.link-go');

    Btns.forEach((e,i) => {
        console.log(e)
        e.addEventListener('click',(event)=>{
            event.preventDefault();
            const target = event.target
            msg.innerHTML = target.innerHTML
            link.getAttribute('href')
            console.log(link)
        })
    })
}


slideBanners();
modal();
drop();
test();
test1();