// scripts.js
function playAudio(audioId) {
    // ��ȡ��ƵԪ��
    var audioElement = document.getElementById(audioId);

    // ������Ƶ
    audioElement.play();
}
// ��ȡԪ��
var modal = document.getElementById("loginModal");
var btn = document.getElementById("loginBtn");
var span = document.getElementsByClassName("close")[0];

// �������ťʱ����ʾ������
btn.onclick = function () {
    modal.style.display = "flex";
}

// ������رհ�ťʱ�����ص�����
span.onclick = function () {
    modal.style.display = "none";
}

// ���û�����������������ʱ���رյ�����
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}