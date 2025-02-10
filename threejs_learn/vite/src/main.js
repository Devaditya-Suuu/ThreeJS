import * as THREE from "three";
import {backgroundIntensity, color} from "three/tsl";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
const canvas = document.getElementById('canvas');

// create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#f0f0f0");

// add the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// object
const dodecaGeometry = new THREE.DodecahedronGeometry(1);
const dodecaMaterial = new THREE.MeshLambertMaterial({ color: "#469595", emissive: '#469595'});
const dodeca = new THREE.Mesh(dodecaGeometry, dodecaMaterial);
scene.add(dodeca);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshStandardMaterial({ color: "#b4b4b3", emissive: '#b4b4b3' });
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
boxMesh.position.y = -1.5;
scene.add(boxMesh);

// add lights

const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);

// setup the renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// add orbit controlls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.DampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

// add animation
function animate() {
    requestAnimationFrame(animate);
    dodeca.rotation.x += 0.01;
    dodeca.rotation.y += 0.01;

    boxMesh.rotation.y += 0.005;
    controls.update();
    renderer.render(scene, camera);
}

// handel window resizing
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
animate();