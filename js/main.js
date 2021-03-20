$('.noidung-work').isotope({
    // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.khoianh',
      percentPosition: true,
      masonry: {
      // use element for option
      columnWidth: '.khoianh'
    }
  });
  $(document).ready(function() {
    $('.anh a').fancybox();
 });