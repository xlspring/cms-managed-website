new fullpage('#fullpage', {
  scrollHorizontally: true
});

function scrollToElement(el) {
  document.getElementById(el).scrollIntoView();
}

setTimeout(() => {
  let loading = document.getElementById('loading');

  loading.style.opacity = '0';
  loading.style.display = 'none';
}, 0)