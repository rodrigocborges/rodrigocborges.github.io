const [button] = document.getElementsByClassName('button');

button.addEventListener('click', onButtonClick);

function onButtonClick() {
  alert('click')
}