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
modal();