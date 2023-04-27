
const splide1 = new Splide( '#slider1', {
    pagination: false,
    type: 'loop',
    drag   : 'free',
    gap    : '.7rem',
    snap: true,
  perPage: 1,
  padding: '20%',
  autoplay: true,
 
 
  } );

  const bar = splide1.root.querySelector( '.my-slider-progress-bar' );

// Updates the bar width whenever the carousel moves:
  splide1.on('mounted move', function() {
  const end = splide1.Components.Controller.getEnd() + 1;
  const rate = Math.min((splide1.index + 1) / end, 1);
  if (bar !== null) {
    bar.style.width = 100 * rate + '%';
  }
} );
  splide1.mount();

    

  const splide2 = new Splide( '#slider2', {
    pagination: false,
    type   : 'loop',
  drag   : 'free',
  gap    : '.7rem',
  focus  : 'center',
  perPage: 2,
  arrows: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  autoScroll: {
    speed: -.5,
  },

  } );
  splide2.mount(window.splide.Extensions);