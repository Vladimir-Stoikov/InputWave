const labels = document.querySelectorAll('.login-window label');

labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, inx) => `<span style='transition: transform ${inx * 100}ms ease'>${letter}</span>`)
    .join('');
});
