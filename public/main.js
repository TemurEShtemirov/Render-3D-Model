import { OBJLoader } from "./OBJLoader";

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 3D model Loader

const loeader = new OBJLoader()
var obj;
loeader.load('',function(object){
    scene.add(object);
    obj = object;
})

const lights = new THREE.HemisphereLight(0xffffff,0x080820,1);
// scene.background = new THREE.Color(oxffffff)

scene.add(lights)
camera.position.set(0,20,60)
camera.lookAt(new THREE.Vector3(0,10,0))


function animate(){
    requestAnimationFrame(animate)
    obj.rotation.y += 0.01;
    renderer.render(scene,camera)

}

animate()