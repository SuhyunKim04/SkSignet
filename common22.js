const modal = () => {
  const modalWrap = document.querySelector(".modalWrap");
  if (!modalWrap) {
    return false;
  }
  const close = document.querySelector(".close");
  const openvideo = document.querySelector(".openVideo");

  openvideo.addEventListener("click", (e) => {
    console.log("hello");
    modalWrap.classList.add("open");
    console.log("end");
  });
  console.log(close);
  close.addEventListener("click", (e) => {
    modalWrap.classList.remove("open");
  });
};

const drop = () => {
  const arrowBtn = document.querySelector(".choose .btn");
  if (!arrowBtn) {
    return false;
  }
  const dropDown = document.querySelector(".chooseDrop");
  const icon = document.querySelector(".choose .icon");
  let active = 0;

  arrowBtn.addEventListener("click", (e) => {
    dropDown.classList.toggle("open");
    icon.classList.toggle("open");
  });
};

function slideBanners() {
  const $list = $(".slideWrap .list");
  $list.slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: true,
    cssEase: "linear",
  });
}

const test = () => {
  const btns = document.querySelectorAll(".chooseDrop-data li");
  const msg = document.querySelector(".select span");
  const link = document.querySelector(".link-go");
  btns.forEach((e, i) => {
    console.log(e);
    e.addEventListener("click", (event) => {
      const target = event.target;
      msg.innerHTML = target.innerHTML;
      link.setAttribute("href", target.dataset.url);
      link.setAttribute("title", target.dataset.title);
      console.log(target.dataset.url);
    });
  });
};

const modal_menu = () => {
  const depth_list = document.querySelectorAll(".depth_list");
  const modal_box = document.querySelectorAll(".modal_box > li");
  const item = document.querySelector(".pageHeaderItems");

  const hideMenu = () => {
    modal_box.forEach((list) => list.classList.remove("on"));
  };
  depth_list.forEach((list, i) => {
    list.addEventListener("mouseenter", (event) => {
      const target = event.target;
      target.classList.add("on");
      // console.log(target.childNodes[3])
      console.log("text");
    });
  });

  item.addEventListener("mouseleave", () => {
    hideMenu();
  });
  // modal_box.forEach((box,event)=>{
  //     box.addEventListener('mouseleave',(event)=>{
  //         console.log()
  //         depth_list.classList.remove('on');
  //     })
  // })
};

const cards = () => {
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

slideBanners();
modal();
drop();
modal_menu();

cards();
