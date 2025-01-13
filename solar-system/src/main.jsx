import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

const scene = new THREE.Scene()

const textureLoader = new THREE.TextureLoader();
const sunTexture = textureLoader.load('../textures/2k_sun.jpg');
const earthTexture = textureLoader.load('../textures/2k_earth_daymap.jpg')
// const moonTexture = textureLoader.load('../textures/2k_moon.jpg')
const mercuryTexture = textureLoader.load('../textures/2k_mercury.jpg')
const venusTexture = textureLoader.load('../textures/2k_venus_surface.jpg')
const marsTexture = textureLoader.load('../textures/2k_mars.jpg')

const sphereGeometry = new THREE.SphereGeometry(1,32,32)  // creating one generic 

//SUN
const sunMaterial = new THREE.MeshBasicMaterial({map:sunTexture})
const earthMaterial = new THREE.MeshBasicMaterial({map:earthTexture})
// const moonMaterial = new THREE.MeshBasicMaterial({map:moonTexture})
const venusMaterial = new THREE.MeshBasicMaterial({map:venusTexture})
const mercuryMaterial = new THREE.MeshBasicMaterial({map:mercuryTexture})
const marsMaterial = new THREE.MeshBasicMaterial({map:marsTexture})

const sun = new THREE.Mesh(sphereGeometry,sunMaterial)
sun.scale.setScalar(5) //109
scene.add(sun)

const planets = [
  {
    name: "Mercury",
    radius: 0.5,
    distance: 10,
    speed: 0.01,
    material: mercuryMaterial,
    moons: [],
  },
  {
    name: "Venus",
    radius: 0.8,
    distance: 15,
    speed: 0.007,
    material: venusMaterial,
    moons: [],
  },
  {
    name: "Earth",
    radius: 1,
    distance: 20,
    speed: 0.005,
    material: earthMaterial,
    moons: [
      {
        name: "Moon",
        radius: 0.3,
        distance: 3,
        speed: 0.015,
      },
    ],
  },
  {
    name: "Mars",
    radius: 0.7,
    distance: 25,
    speed: 0.003,
    material: marsMaterial,
    moons: [
      {
        name: "Phobos",
        radius: 0.1,
        distance: 2,
        speed: 0.02,
      },
      {
        name: "Deimos",
        radius: 0.2,
        distance: 3,
        speed: 0.015,
        color: 0xffffff,
      },
    ],
  },
];

const planetMeshes = planets.map((planet)=>{
  // create the mesh 
  // add it in our scene 
  // loop through each moon and create the moon
  // add the moon to the planet 
  const planetMesh = new THREE.Mesh(sphereGeometry,planet.material)
  planetMesh.scale.setScalar(planet.radius)
  planetMesh.position.x = planet.distance
  scene.add(planetMesh)
})

console.log(planetMeshes);


const amberLight = new THREE.AmbientLight(0xffffff,0.5);
scene.add(amberLight)

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
controls.autoRotate = false; // to make the camera auto rotate

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight; 
  camera.updateProjectionMatrix(); // update the camera aspect ratio // to make it responsive
  // redner doen't know how big the canvas is, so we need to set the size of the canvas
  renderer.setSize(window.innerWidth, window.innerHeight);
}); // resize event listener


const clock = new  THREE.Clock();

const renderLoop = () =>{
  const elapsedTime = clock.getElapsedTime();  
  sun.rotation.y+=0.0003
  controls.update(); // update controls in every frame
  renderer.render(scene, camera); // render once display what was in image as a pic one time but we want render loop so that we can see the animation but to do that we need requestAnimationFrame
  window.requestAnimationFrame(renderLoop)
}

renderLoop();