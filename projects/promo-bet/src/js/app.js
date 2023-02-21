/**
 * Tiny Slider Config
 */
const slider = tns({
  container: '.hero__carousel',
  items: 1,
  autoplay: false,
  speed: 400,
  controls: false,
  loop: true,
  nav: false,
  navPosition: 'bottom',
  responsive: {
    1024: {
      nav: true
    }
  }
})