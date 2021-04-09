document.body.onclick = event => {
  const elem = event.target;
  if (elem.classList.contains('section-symbol')) {
    navigator.clipboard
      .writeText(elem.innerHTML)
      .then(() => {
        navigator.clipboard
          .readText()
          .then(text => {
            document.querySelector('.out').textContent = text;
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }
};
