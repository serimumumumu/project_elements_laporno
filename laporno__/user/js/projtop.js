// var slideimg = new Vue({
//   el: "#slideimg",
//   components: {
//     'carousel': VueCarousel.Carousel,
//     'slide': VueCarousel.Slide
//    }
// })
const swiper = new Swiper(".swiper-container", {
  // ドットインジケーターの表示
  pagination: {
    el: ".swiper-pagination",
  },
  // 前後スライドボタンを表示
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true, // ループの有効化
});
  const swiperCoverflow = new Swiper(".sample-swiper-coverflow .swiper-container", {
    ...defaultOptions,

    loop: true, // ループの有効化
    slidesPerView: 1.6, // 表示するスライドの枚数
    centeredSlides : true, // スライドを中央揃えを有効化
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0, // スライドの回転角度
      stretch: 50, // スライドの間隔（px単位）
      depth: 200, // 奥行きの設定（translateをZ方向にpx単位で移動）
      slideShadows : true, // 先頭スライドの影を有効化
    },
  });
