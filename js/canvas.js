// const glslcanvasMin = require("./glslcanvas.min")

const canvas = document.createElement("canvas")
const sandbox = new GlslCanvas(canvas)
document.body.appendChild(canvas)

width = window.innerWidth;

// if (width < 900) {
//   sandbox.load(mobileFrag)
// } 
// if (width > 900) {
  sandbox.load(frag)
// } 
