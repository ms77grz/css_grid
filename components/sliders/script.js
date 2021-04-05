const slider = document.getElementById('slider');
const selector = document.getElementById('selector');
const selectValue = document.getElementById('select-value');
const progressBar = document.getElementById('progress-bar');

selectValue.innerHTML = slider.value;

slider.oninput = function () {
  selectValue.innerHTML = this.value;
  selector.style.left = this.value + '%';
  progressBar.style.width = this.value + '%';
};
