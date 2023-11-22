function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function navigateTo(page) {
  // 페이지 전환 로직 구현
  if (page === "투자리딩") {
    // 홈 페이지로 이동
    window.location.href = "landing(투자리딩).html";
  } else if (page === "코인피해") {
    // 소개 페이지로 이동
    window.location.href = "landing(코인피해).html";
  } else if (page === "단체소송") {
    // 연락처 페이지로 이동
    window.location.href = "landing(단체소송).html";
  } else if (page === "카카오톡") {
    // 카카오톡 페이지로 이동
    window.location.href = "https://pf.kakao.com/_gKXyb";
  }
}

let onImage = "img/On.png";
let offImage = "img/Off.png";
let isOn = false;

function toggleImage() {
  let image = document.querySelector("#toggle");
  if (isOn) {
    image.src = offImage;
    isOn = false;
  } else {
    image.src = onImage;
    isOn = true;
  }
}
function toggleImage2() {
  let image = document.querySelector("#toggle2");
  if (isOn) {
    image.src = offImage;
    isOn = false;
  } else {
    image.src = onImage;
    isOn = true;
  }
}

function showPopup(name) {
  if (name === "개인정보") {
    document.getElementById("popup-overlay").style.display = "block";
    document.getElementById("popup-content").style.display = "block";
    // document.body.style.overflow = "hidden"; // 스크롤 막기
  } else if (name === "마케팅") {
    document.getElementById("popup-overlay2").style.display = "block";
    document.getElementById("popup-content2").style.display = "block";
    // document.body.style.overflow = "hidden"; // 스크롤 막기
  }
}

function closePopup() {
  document.getElementById("popup-overlay").style.display = "none";
  document.getElementById("popup-content").style.display = "none";

  document.body.style.overflow = ""; // 스크롤 허용

  // 이미지를 On.png로 변경
  let image = document.querySelector("#toggle");
  image.src = onImage;
  isOn = true;
}

function closePopup2() {
  document.getElementById("popup-overlay2").style.display = "none";
  document.getElementById("popup-content2").style.display = "none";
  document.body.style.overflow = ""; // 스크롤 허용
  // 이미지를 On.png로 변경
  let image = document.querySelector("#toggle2");
  image.src = onImage;
  isOn = true;
}
