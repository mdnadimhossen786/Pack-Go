$('.dest_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  centerMode: true,
  centerPadding: '0',
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
  ]
});





$('.counter').counterUp({
  delay: 10,
  time: 1000
});



$('.test_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
});

// ========

let main_menu = document.querySelector('.main_menu')

window.addEventListener('scroll', () => {
  let scrolling = window.scrollY
  if (scrolling > 180) {
    main_menu.classList.add('menu_active')
  } else {
    main_menu.classList.remove('menu_active')
  }
})


let back_to_top = document.querySelector('.back_to_top')

window.addEventListener('scroll', () => {
  let scrolling = window.scrollY
  if (scrolling > 800) {
    back_to_top.classList.add('back_to_top_active')
  } else {
    back_to_top.classList.remove('back_to_top_active')
  }
})

back_to_top.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  })
})