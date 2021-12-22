// const glslcanvasMin = require("./glslcanvas.min")

const canvas = document.createElement("canvas")
const sandbox = new GlslCanvas(canvas)
console.log('yo')
document.body.appendChild(canvas)

sandbox.load(frag)