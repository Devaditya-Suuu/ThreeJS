import * as THREE from 'three';

// cerate the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// create and add cube object
const geometry = new THREE.CapsuleGeometry(1, 1, 50, 100);
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive: '#468585'});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// add the camera
const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// add light
// const light = new THREE.AmbientLight(0xffffff);
const  light1 = new THREE.DirectionalLight(0x9CDBA6, 10);
// light.position.set(1, 1, 1);
light1.position.set(1, 1, 1);
// scene.add(light);
scene.add(light1);

// set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// animate the scene
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x -= 0.02;
    cube.rotation.y += 0.02;
    renderer.render(scene, camera);
}
animate();

