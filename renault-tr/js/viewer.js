// Viewer 1 için model yükleme
const scene1 = new THREE.Scene();
const camera1 = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
const renderer1 = new THREE.WebGLRenderer({ antialias: true });
renderer1.setSize(window.innerWidth, 400);
document.getElementById('viewer1').appendChild(renderer1.domElement);

const controls1 = new THREE.OrbitControls(camera1, renderer1.domElement);

const loader1 = new THREE.GLTFLoader();
loader1.load('models/dino/scene.gltf', function(gltf) {
    scene1.add(gltf.scene);
}, undefined, function(error) {
    console.error('Model1 yüklenemedi: ', error);
});

camera1.position.z = 15;
function animate1() {
    requestAnimationFrame(animate1);
    controls1.update();
    renderer1.render(scene1, camera1);
}
animate1();

// Viewer 2 için model yükleme
const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
const renderer2 = new THREE.WebGLRenderer({ antialias: true });
renderer2.setSize(window.innerWidth, 400);
document.getElementById('viewer2').appendChild(renderer2.domElement);

const controls2 = new THREE.OrbitControls(camera2, renderer2.domElement);

const loader2 = new THREE.GLTFLoader();
loader2.load('models/dino/scene.gltf', function(gltf) {
    scene2.add(gltf.scene);
}, undefined, function(error) {
    console.error('Model2 yüklenemedi: ', error);
});

camera2.position.z = 15;

function animate2() {
    requestAnimationFrame(animate2);
    controls2.update();
    renderer2.render(scene2, camera2);
}
animate2();

// Viewer 3 için model yükleme
const scene3 = new THREE.Scene();
const camera3 = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
const renderer3 = new THREE.WebGLRenderer({ antialias: true });
renderer3.setSize(window.innerWidth, 400);
document.getElementById('viewer3').appendChild(renderer3.domElement);

const controls3 = new THREE.OrbitControls(camera3, renderer3.domElement);

const loader3 = new THREE.GLTFLoader();
loader3.load('models/dino/scene.gltf', function(gltf) {
    scene3.add(gltf.scene);
}, undefined, function(error) {
    console.error('Model3 yüklenemedi: ', error);
});

camera3.position.z = 15;
function animate3() {
    requestAnimationFrame(animate3);
    controls3.update();
    renderer3.render(scene3, camera3);
}
animate3();

