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

// function slideBanners() {
//     const $list = $('.slideWrap .list')
//     $list.slick({
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         fade: true,
//         cssEase: 'linear',
//       });
// }

function slideFade() {
    let $slidwrap = $('.slideWrap');
    let $slideBtn = $('.slideBottom');
    let $slides = $('.list').find('.item');
    let $count = $slides.length;
    let now = 0;
    const $pager = $slideBtn.find('.pager');

    init(); 

    
    $pager.click(function(e) {
        console.dir($(this))
        $(this).hasClass('view-next') ? nextShow() : prevShow();
    })

    
    
    function init() {
        $slideBtn.find('.total').text($count);
        $slides.eq(now).fadeIn();
        numUpdate(now);
    }
    
    function nextShow() {
        let next = (now + 1) % $count;
        console.log('nextNum:', next);
        update(next);
    } 
 
    function prevShow() {
        let prev = (now-1) % $count; 
        console.log('prevNum:',prev)
        update(prev);
    }

    function update(slide) { 
        $slides.eq(now).fadeOut();
        $slides.eq(slide).fadeIn();
        now = slide;  
        numUpdate(now); 
    }
    function numUpdate(index) {
        let nowNum = Math.abs(index) + 1;
        console.log('numUpdate', nowNum);
        $slideBtn.find('.now').text(nowNum)
    }

}

slideFade();





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

const table =() => {
    const itmes = document.querySelectorAll(".tableList .items");
    
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


// const cards2 = () => {
//     const items = document.querySelectorAll('.peopleCards .items')
 
//     let now = 0;
   

//     const reset = () => {
//         items[now].classList.remove('on');
//         items[now].querySelector('dd').style.height = '0px'; 
//     }

//     const update = () => { 
//         items[now].classList.add('on');
//         items[now].querySelector('dd').style.height = 
//         items[now].querySelector('p').offsetHeight + 'px';
//     }
    

//     update();

//     items.forEach( (item,index) => { 
//         item.addEventListener('click',(event)=>{ 
//             // console.time('check')
//             const target = event.currentTarget;    
//             const child = target.querySelector('dd');
//             const size = child.querySelector('p').offsetHeight;
//             // const li = (now === index); 

     
//            if(now !== index) {  
//                 reset(); 
//                 target.classList.add('on');   
//                 child.style.height = `${size}px`;
//                 now = index;  
//             }   else {
//                 reset(); 
             
//             }
//             // console.timeEnd('check')
//         })
        
//     })
    
// }

const cardsOpen = () => {
    const items = document.querySelectorAll(".peopleCards .items");
    let openIdx = 0;
  
    const reset = (index) => {
      let item = items[index];
      item.classList.remove("on");
      item.querySelector("dd").style.height = "0px";
    };
  
    const openItem = (index) => {
      let item = items[index];
      // 연재 클릭한 li
  
      let dd = item.querySelector("dd");
      // let dd = item.children[0].children[1]; 위와 동일
  
      let p = dd.querySelector("p");
      // let p = dd.children[0]; 위와 동일
  
      item.classList.add("on");
      // li에 클래스 추가
  
      dd.style.height = p.offsetHeight + "px";
      // dd에 높이값 전달
    };
  
    openItem(openIdx);
  
    items.forEach((item, index) => {
      item.addEventListener("click", (event) => {
        if (openIdx !== index) {
          reset(openIdx); // 이떄는 이전에 on붙었던 li의 인덱스값이 now인 상태
          openItem(index); // 현재클릭한 li의 인덱스 번호를 매개변수로 보내서 on상태 만들어주기
          openIdx = index; // 업데이트 후, 클릭한 li의 인덱스값을 now에 업데이트 해준다.
        } else {
          reset(openIdx); // 현재 열려있는 now번째 li를 닫음
        }
      });
    });
};


const tableOpen = () => {
    const lists = document.querySelectorAll(".tableList li")
    let openIdx = 0;

    const reset = (index) => {
        let list = lists(index);
        list.querySelector("dd").style.height = "0px";
    };

    const openList = (index) => {
        let list = lists(index);

        let dd = list.querySelector("dd");

        dd.style.height = p.offsetHeight + "px";
    };

    openList(openIdx);

    lists.forEach((list, index) => {
        list.addEventListener("click", (event) => {
            if (openIdx !== index) {
                reset(openIdx);
                openList(index);
                openIdx = index;
            }else {
                reset(openIdx)
            }
        });
    });

};
// if(li){
//     target.classList.remove('on') 
//     child.style.height = `0px`; 
// }else{ 
  

//     target.classList.add('on');  
//     console.log('else') 
//     child.style.height = `${size}px`;
//     now = index; 
// }  

// slideBanners();
modal();
drop();
// test();
// modal_menu();

// cards2();
// cards();

mobileMenu();
cardsOpen();
let a = 3;
let b = 5;
// a가 b보다 크다면 a가 크다 출력하고 b가 크면 b가 크다고 출력

if(a > b){
    console.log('a가 크다')
}else {
    console.log('b가 크다')
}


 
