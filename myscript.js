/*
window.onscroll: Bắt sự kiện cuộn trang.
header.offsetTop: Lấy vị trí cố định của header.
window.pageYOffset: Lấy vị trí cuộn hiện tại của trang.
header.classList.add("sticky") và header.classList.remove("sticky"): Thêm hoặc xóa lớp "sticky" để hiển thị hoặc ẩn header khi cuộn.
*/
window.onscroll = function() {
  myFunction()
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
/* render header function*
function renderHeader() {
  fetch('myheader.html')
    .then(response => response.text())
    .then(html => {
      document.body.insertAdjacentHTML('afterbegin', html);
    });
}

renderHeader();
/* RENDER MESSAGE*/
function renderMessage() {
  fetch('message.html')
    .then(response => response.text())
    .then(html => {
      document.body.insertAdjacentHTML('afterbegin', html);
    });
}

renderMessage();
