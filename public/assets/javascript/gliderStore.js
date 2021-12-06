
new Glider(document.querySelector('.glider'), {
  // Mobile-first defaults
  slidesToShow: 1,
  slidesToScroll: 1,
  itemWidth: 150,
  scrollLock: true,
  draggable: true,
  rows: true,
  arrows: {
    prev: '.glider-ant',
    next: '.glider-prox'
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 776,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 2,
        itemWidth: 150,
        duration: 0.25
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
});

