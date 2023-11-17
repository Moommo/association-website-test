window.addEventListener('scroll', function() {
  const footer = document.querySelector('footer');
  const main = document.querySelector('main');
  const distanceFromTop = main.getBoundingClientRect().bottom;

  footer.style.bottom = distanceFromTop <= window.innerHeight/2 ? '0' : '-50px';
});
