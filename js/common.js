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
        cssEase: 'linear',
        // prevArrow: $('.view-prev'),
        // nextArrow: $('.view-next')
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
    const Btns = document.querySelectorAll('.chooseDrop-a a');
    const msg = document.querySelector('.select span');
    const link = document.querySelector('.link-go');
    const go = document.querySelector('.btn-go');
    let url ='';
    console.log(url);
    Btns.forEach((e,i) => {
        console.log(e)
        e.addEventListener('click',(event)=>{
            event.preventDefault();
            const target = event.target
            msg.innerHTML = target.innerHTML
            url = target.getAttribute('href')
            link.setAttribute('href',url)
            console.log(target.getAttribute('href'))
        })

    })
    go.addEventListener('click',(e)=>{
        console.log('hello')
        console.log(url);
        if(url === ''){
            alert('아래에서 항목 선택하세요')
            return false;
        }
        window.location.href = url;
    })
}



slideBanners();
modal();
drop();
test();
test1();