function toggle_class_style_visibility(className) {
  const elements = document.getElementsByClassName(className);

  for (i = 0; i < elements.length; i++) {
    if(elements[i].style.display == "none" || elements[i].style.display == '')
      elements[i].style.display = "block";
    else
      elements[i].style.display = "none";
  }
  
}

function toggle_visibility(id) {
  const e = document.getElementById(id);
  if(e.classList.contains('display-none'))
    e.classList.remove("display-none");
  else
    e.classList.add("display-none");
}

function rotate_arrow(id) {

}

//  show - hide
document.getElementById("hide").addEventListener("click", function(event){
  event.preventDefault()
  toggle_visibility("hide")
  toggle_visibility("show")
  toggle_visibility("menu")
});

document.getElementById("show").addEventListener("click", function(event){
  event.preventDefault()
  toggle_visibility("hide")
  toggle_visibility("show")
  toggle_visibility("menu")
});



// Move info box on re-size
var onresize = function() {
  width = window.innerWidth;

  if (width < 900) {
    mobileView()
    // window.location.reload();
  } 
  if (width > 900) {
    desktopView()
  } 
}

var mobileView = function() {
  const edu = document.getElementById("item-education")
  const item2 = document.getElementById("item2")
  width = window.innerWidth;

  if (width < 900) {
    item2.appendChild(edu)
  } 
}

var desktopView = function() {
  const edu = document.getElementById("item-education")
  const item3 = document.getElementById("item3")
  // edu.before(item3)

 

  item3.insertBefore(edu, item3.firstChild);
}
// run mobile view once on page load
mobileView()
window.addEventListener("resize", onresize);







// // mobile info expands
document.getElementById("education").addEventListener("click", function(event){
  event.preventDefault()
  toggle_class_style_visibility("education-content")
  document.getElementById("education").querySelector("#arrow").classList.toggle("rotated")
});

document.getElementById("career").addEventListener("click", function(event){
  event.preventDefault()
  toggle_class_style_visibility("career-content")
  document.getElementById("career").querySelector("#arrow").classList.toggle("rotated")

});

document.getElementById("mm").addEventListener("click", function(event){
  event.preventDefault()
  toggle_class_style_visibility("mm-content")
  document.getElementById("mm").querySelector("#arrow").classList.toggle("rotated")
});

document.getElementById("teaching").addEventListener("click", function(event){
  event.preventDefault()
  toggle_class_style_visibility("teaching-content")
  document.getElementById("teaching").querySelector("#arrow").classList.toggle("rotated")
});

document.getElementById("contact").addEventListener("click", function(event){
  event.preventDefault()
  toggle_class_style_visibility("contact-content")
  document.getElementById("contact").querySelector("#arrow").classList.toggle("rotated")
});
