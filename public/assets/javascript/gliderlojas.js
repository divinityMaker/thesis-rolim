new Glider(document.querySelector('.glider'), {
    slidesToShow: 5,
    slidesToScroll: 5,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });

  new Glider(document.querySelector('.glider2'), {
    slidesToShow: 5,
    slidesToScroll: 5,
    draggable: true,
    dots: '.dots2',
    arrows: {
      prev: '.glider-prev2',
      next: '.glider-next2'
    }
  });