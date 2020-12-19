const clicker = document.getElementById('clickBtn');
let windowCount = document.getElementById('window');

const addOne = () => {
    windowCount.value++;
};

setTimeout(start, 5000);

var i = 0;

function start() {
  setInterval(increase, 1000);
}

function increase() {
      i++;
      windowCount.value = i;
};