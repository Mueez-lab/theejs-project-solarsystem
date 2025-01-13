import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

const scene = new THREE.Scene()

const sphereGeometry = new THREE.SphereGeometry(1,32,32)  // creating one generic 
const sunMaterial = new THREE.MeshBasicMaterial({color:0xfff700})
const sun = new THREE.Mesh(sphereGeometry,sunMaterial)
sun.scale.setScalar(5)
scene.add(sun)


const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth/window.innerHeight,
  0.01,
  10000
)


camera.position.z = 100
camera.position.y = 5

const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGLRenderer({ canvas , antialias: true }); // software solution antialias is used to make the image more clear

renderer.setSize(window.innerWidth, window.innerHeight);

// hardware solution to make the image more clear
renderer.setPixelRatio(Math.max(window.devicePixelRatio, 2)); // to make the image more clear to remove zig zag effect

// initialize controls after renderer
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; // to make the movement smooth
controls.autoRotate = true; // to make the camera auto rotate

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight; 
  camera.updateProjectionMatrix(); // update the camera aspect ratio // to make it responsive
  // redner doen't know how big the canvas is, so we need to set the size of the canvas
  renderer.setSize(window.innerWidth, window.innerHeight);
}); // resize event listener



const renderLoop = () =>{
  controls.update(); // update controls in every frame
  renderer.render(scene, camera); // render once display what was in image as a pic one time but we want render loop so that we can see the animation but to do that we need requestAnimationFrame
  window.requestAnimationFrame(renderLoop)
}

renderLoop();