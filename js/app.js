//  show - hide
document.getElementById("hide").addEventListener("click", function(event){
  console.log("hello")
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

function toggle_visibility(id) {
  const e = document.getElementById(id);
  if(e.classList.contains('display-none'))
    e.classList.remove("display-none");
  else
    e.classList.add("display-none");
}

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