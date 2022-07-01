//dropdown

function dropdownFn() {
  document.getElementById("drop_content").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbutton")) {
    let drop = document.getElementsByClassName("dropdown_content");
    let i;
    for (i = 0; i < drop.length; i++) {
      let openDropdown = drop[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//scroll refresh

/*window.onload = function (event) {
  document.getElementById("space").scrollIntoView();
};*/

//topbutton

window.onscroll = function (event) {
  if (document.documentElement.scrollTop > 1) {
    document.getElementById("topbutton").style.display = "block";
  } else {
    document.getElementById("topbutton").style.display = "none";
  }
  if (document.getElementById("drop_content").classList.contains("show")) {
    document.getElementById("drop_content").classList.remove("show");
  }
};

function backtotopFn() {
  document.documentElement.scrollTop = 0;
}

//Modal Images

let y;

function modalImg(y) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("img");
  modal.style.display = "flex";
  modalImg.src = "gallery/" + y + ".jpg";
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}
