gsap.registerPlugin(MorphSVGPlugin);

const dValueA =
	"M28.8,-32.8C40.5,-24.4,55.6,-18.4,59.9,-8.5C64.2,1.5,57.6,15.5,50.7,30.9C43.8,46.3,36.4,63.1,25.2,65.7C13.9,68.3,-1.2,56.7,-9.9,45.6C-18.6,34.5,-20.8,23.9,-33,13.7C-45.1,3.6,-67.3,-6.1,-70.7,-17C-74.1,-27.9,-58.9,-39.9,-44,-47.8C-29.1,-55.6,-14.6,-59.2,-3,-55.6C8.5,-52,17,-41.2,28.8,-32.8Z";
const dValueB =
	"M27.8,-42.7C32.6,-29.2,30.5,-17.1,29,-7.7C27.6,1.7,26.8,8.3,25.5,18.7C24.3,29.2,22.6,43.3,16.4,45.9C10.2,48.5,-0.5,39.6,-14.5,36.1C-28.5,32.6,-45.8,34.5,-56.7,27.2C-67.6,19.8,-72.1,3.1,-72.1,-15.5C-72.2,-34.2,-67.7,-54.8,-55,-66.9C-42.2,-79,-21.1,-82.5,-4.8,-76.8C11.6,-71.1,23.1,-56.2,27.8,-42.7Z";
const dValueC =
	"M48.9,-65.5C57.2,-51.3,53.6,-30,49.4,-14.5C45.3,1.1,40.7,11,36.4,23.5C32.1,36,28.1,51.2,18.1,58.7C8.1,66.3,-8,66.2,-19.4,59.4C-30.9,52.7,-37.8,39.2,-47.5,25.8C-57.2,12.3,-69.9,-1.1,-64.7,-8.1C-59.5,-15.1,-36.6,-15.7,-22.8,-28.9C-9.1,-42.1,-4.5,-67.9,7.9,-77.3C20.3,-86.7,40.6,-79.6,48.9,-65.5Z";
const dValueD =
	"M42.8,-56.2C48.3,-46.5,40.5,-26.1,33.5,-13.6C26.5,-1.2,20.3,3.5,17.1,10.7C13.9,17.9,13.8,27.7,8.8,33.5C3.9,39.3,-5.8,41.1,-16.4,39.6C-27,38.2,-38.4,33.5,-39.4,25.7C-40.4,17.9,-30.8,7.1,-31.9,-8.9C-33,-24.9,-44.7,-46,-41.1,-56.1C-37.6,-66.2,-18.8,-65.3,0,-65.2C18.7,-65.2,37.4,-66,42.8,-56.2Z";
const dValueE =
	"M41.1,-52.7C51.9,-40,58.1,-25.7,61.9,-10C65.7,5.6,67.2,22.6,61.6,38.8C56.1,54.9,43.6,70.3,27.9,75.6C12.1,80.9,-7,76.2,-15.8,64.1C-24.6,51.9,-23.2,32.2,-32.9,17.8C-42.6,3.4,-63.5,-5.7,-69.8,-19.7C-76.1,-33.6,-67.9,-52.3,-53.8,-64.4C-39.7,-76.4,-19.9,-81.8,-2.3,-79.1C15.2,-76.3,30.4,-65.3,41.1,-52.7Z";

const path = document.getElementById("goo");

const gt = gsap
	.timeline({ ease: "circ.inOut" })
	.to(path, { duration: 7, morphSVG: { precompile:[dValueE, dValueA], shape: dValueA, shapeIndex:[0], map:"complexity" } })
	.to(path, { duration: 6, morphSVG: { precompile:[dValueA, dValueB], shape: dValueB, shapeIndex:[0], map:"complexity" } })
	.to(path, { duration: 9, morphSVG: { precompile:[dValueB, dValueC], shape: dValueC, shapeIndex:[0], map:"complexity" } })
	.to(path, { duration: 8, morphSVG: { precompile:[dValueC, dValueD], shape: dValueD, shapeIndex:[0], map:"complexity" } })
	.to(path, { duration: 8, morphSVG: { precompile:[dValueD, dValueE], shape: dValueE, shapeIndex:[0], map:"complexity" } });
gt.repeat(-1);
