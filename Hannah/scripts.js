// scripts.js
function playAudio(audioId) {
    // 获取音频元素
    var audioElement = document.getElementById(audioId);

    // 播放音频
    audioElement.play();
}
// 获取元素
var modal = document.getElementById("loginModal");
var btn = document.getElementById("loginBtn");
var span = document.getElementsByClassName("close")[0];

// 当点击按钮时，显示弹出框
btn.onclick = function () {
    modal.style.display = "flex";
}

// 当点击关闭按钮时，隐藏弹出框
span.onclick = function () {
    modal.style.display = "none";
}

// 当用户点击弹出框外的区域时，关闭弹出框
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}