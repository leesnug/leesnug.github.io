var isShow = true;

var modal = document.createElement("div");
var switchButton = document.createElement("button");
switchButton.innerText = "原生：关";

modal.appendChild(switchButton);
document.getElementById("root4").appendChild(modal);

switchButton.onclick = function () {
  if (isShow) {
    switchButton.innerText = "原生：开";
    isShow = false;
  } else {
    switchButton.innerText = "原生：关";
    isShow = true;
  }
};
