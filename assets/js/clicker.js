const clicker = document.getElementById('clickBtn');
let windowCount = document.getElementById('window');

const addOne = () => {
    windowCount.value++;
};

setTimeout(start, 5000);

var i = 1;

function start() {
  setInterval(increase, 10000);
}

function increase() {
    if (i < 100) {
      i++;
      windowCount.value = i;
    }
};