/* jshint esversion: 6 */
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function revealleft() {
  var reveals = document.querySelectorAll(".revealleft");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("activeleft");
    } else {
      reveals[i].classList.remove("activeleft");
    }
  }
}

function revealright() {
  var reveals = document.querySelectorAll(".revealright");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("activeright");
    } else {
      reveals[i].classList.remove("activeright");
    }
  }
}
function reveals() {
  var reveals = document.querySelectorAll(".reveals");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("revactive");
    } else {
      reveals[i].classList.remove("revactive");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", revealleft);
window.addEventListener("scroll", revealright);
window.addEventListener("scroll", reveals);


var cat = document.getElementsByClassName("category");
for(var i=0; i < cat.length; i++){
  var evs= cat[i].classList.item(1);


    var id2 =1 ;

    cat[i].addEventListener("click", function(){

        glowcategory(this.id , id2) ;
        id2 =this.id;
    }, false);
}

function glowcategory(idd,id2){
  var ele = document.getElementById(idd);
  var ele2 = document.getElementById(id2);
  var a = ele.getElementsByTagName("A")[0];
  var a2 = ele2.getElementsByTagName("A")[0];
  console.log(a);
  ele.classList.add("glow");
  a2.classList.remove("glow");
  a.classList.add("glow");
  ele2.classList.remove("glow");
}

// var section = document.querySelectorAll(".section");
// var menu = document.querySelectorAll(".navi a");
// window.onscroll = function() {
//   section.forEach(function(i) {
//     var top = window.scrollY;
//     var offset = i.offsetTop - 150;
//     var height = i.offsetHeight;
//     var id = i.getAttribute('id');
//     if (top >= offset && top < offset + height) {
//       menu.forEach(function(link) {
//
//         link.classList.remove('actives');
//         document.querySelector('navi a[href*=' + id + ']')
//           .classList.add('actives');
//           console.log(link);
//       });
//     }
//   });
// };
let section = document.querySelectorAll(".section");
let menu = document.querySelectorAll(".navi a");
console.log(section);
console.log(menu);
window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("actives");
        document
          .querySelector(".navi a[href*=" + id + "]")
          .classList.add("actives");
      });
    }
  });
};
