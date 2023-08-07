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
slideBanners();
modal();
drop();