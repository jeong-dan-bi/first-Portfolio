// Full
var myFullpage = new fullpage('#fullpage', {
    licenseKey : null,
    anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage', '6rdPage'],
    navigation: true,
    navigationTooltips: ['Seciton1', 'Seciton2', 'Seciton3', 'Seciton4', 'Seciton5', 'Seciton6'],
    showActiveTooltip: false,
    menu: '#menu'
});

// swiper slide
const swiper = new Swiper('#tab-1 .swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView : 1,  //한번에 보여줄 슬라이드 개수
    navigation : {
        nextEl : "#tab-1 .swiper-next",
        prevEl : "#tab-1 .swiper-prev"
    },
    observer : true,
    observeParents : true
  });
  const swiper2 = new Swiper('#tab-2 .swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView : 1,  //한번에 보여줄 슬라이드 개수
    navigation : {
        nextEl : "#tab-2 .swiper-next",
        prevEl : "#tab-2 .swiper-prev"
    },
    observer : true,
    observeParents : true
  });
  const swiper3 = new Swiper('#tab-3 .swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView : 1,  //한번에 보여줄 슬라이드 개수
    navigation : {
        nextEl : "#tab-3 .swiper-next",
        prevEl : "#tab-3 .swiper-prev"
    },
    observer : true,
    observeParents : true
  });

