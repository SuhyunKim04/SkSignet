const modal = () => {
    const modalWrap = document.querySelector('.modalWrap');
    if(!modalWrap) {
        return false;
    }
    const close = document.querySelector('.close');
    const openvideo = document.querySelector('.openVideo');

    
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
    const arrowBtn = document.querySelector('.choose .btn');
    if(!arrowBtn) {
        return false;
    }
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
// const test1 = () =>{
//     const Btns = document.querySelectorAll('.chooseDrop-a a');
//     const msg = document.querySelector('.select span');
//     const link = document.querySelector('.link-go');
//     const go = document.querySelector('.btn-go');
//     let url ='';
//     console.log(url);
//     Btns.forEach((e,i) => {
//         console.log(e)
//         e.addEventListener('click',(event)=>{
//             event.preventDefault();
//             const target = event.target
//             msg.innerHTML = target.innerHTML
//             url = target.getAttribute('href')
//             link.setAttribute('href',url)
//             console.log(target.getAttribute('href'))
//         })

//     })
//     go.addEventListener('click',(e)=>{
//         console.log('hello')
//         console.log(url);
//         if(url === ''){
//             alert('아래에서 항목 선택하세요')
//             return false;
//         }
//         window.location.href = url;
//     })
// }

const modal_menu = () => {
    const depth_list = document.querySelectorAll('.depth_list');
    const modal_box = document.querySelectorAll('.modal_box > li');
    const item = document.querySelector('.pageHeaderItems');
    

    const hideMenu = () => {
        modal_box.forEach((list) => list.classList.remove('on'));
    }
    depth_list.forEach((list,i) => {
        list.addEventListener('mouseenter',(event) => {
            const target = event.target;
            target.classList.add('on');
            // console.log(target.childNodes[3])
            console.log('text')
        })
    });

    item.addEventListener('mouseleave', () => {
        hideMenu();
    })
    // modal_box.forEach((box,event)=>{
    //     box.addEventListener('mouseleave',(event)=>{
    //         console.log()
    //         depth_list.classList.remove('on');
    //     })
    // })
}

const cards = () =>{
    const items = document.querySelectorAll('.peopleCards .items')
    let now = 0;
    items[now].classList.add('on');
    
    items.forEach( (item,index) => {
        
        item.addEventListener('click',(event)=>{ 
            console.time('check')
            const target = event.currentTarget; 
            const status = target.classList.contains('on'); 
            if(status){
                target.classList.remove('on')
            }else{
                items.forEach( e =>{
                    e.classList.remove('on')
                })
                target.classList.add('on');
                now = index;
            }
 
            console.timeEnd('check')
            
        })

    })

}

const mobileMenu = () => {
    const vento = document.querySelector('.mBtn');
    const gnb = document.querySelector('.gnb');

    vento.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('open');
        let status = e.currentTarget.classList.contains('open')
        console.log(status)
        if(status){
            gnb.style.display = 'block';
        }else{
            gnb.style.display = 'none';
        }
    })
}


const cards2 = () => {
    const items = document.querySelectorAll('.peopleCards .items')
 
    let now = 0;
   

    const reset = () => {
        items[now].classList.remove('on');
        items[now].querySelector('dd').style.height = '0px'; 
    }

    const update = () => { 
        items[now].classList.add('on');
        items[now].querySelector('dd').style.height = 
        items[now].querySelector('p').offsetHeight + 'px';
    }
    

    update();

    items.forEach( (item,index) => { 
        item.addEventListener('click',(event)=>{ 
            // console.time('check')
            const target = event.currentTarget;    
            const child = target.querySelector('dd');
            const size = child.querySelector('p').offsetHeight;
            // const li = (now === index); 

     
           if(now !== index) {  
                reset(); 
                target.classList.add('on');   
                child.style.height = `${size}px`;
                now = index;  
            }   else {
                reset(); 
             
            }
            // console.timeEnd('check')
        })
        
    })
    
}



// if(li){
//     target.classList.remove('on') 
//     child.style.height = `0px`; 
// }else{ 
  

//     target.classList.add('on');  
//     console.log('else') 
//     child.style.height = `${size}px`;
//     now = index; 
// }  

slideBanners();
modal();
drop();
// test();
// modal_menu();

// cards2();
// cards();

mobileMenu();

let a = 3;
let b = 5;
// a가 b보다 크다면 a가 크다 출력하고 b가 크면 b가 크다고 출력

if(a > b){
    console.log('a가 크다')
}else {
    console.log('b가 크다')
}


 
