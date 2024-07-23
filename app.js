const coin = document.querySelector("#coin_flip");
const btn = document.querySelector("#main_btn");
const status = document.querySelector("#status");

function deferFn(callback, ms) {
  setTimeout(callback, ms);
}

function processResult(result) {
  status.innerText = "Its a " + result.toUpperCase();
}
function flipCoin() {
  status.innerText = "";
  coin.setAttribute("class", "");
  const result = Math.random() < 0.5 ? "heads" : "tails";
  deferFn(function () {
    coin.setAttribute("class", "animate-" + result);
    deferFn(processResult.bind(null, result), 2900);
  }, 100);
}
