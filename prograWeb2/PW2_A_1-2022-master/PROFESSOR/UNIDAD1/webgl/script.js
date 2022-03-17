const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const light = new THREE.DirectionalLight(0xffffff, 1);
const speed = 0.08;

light.position.x = 0;
light.position.z = 5;
scene.add(light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

cube.position.x = -1.5;
cube.rotation.x = 10;
cube.rotation.y = 5;
scene.add(cube);

const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
//const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff });
const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x0000ff, wireframe: true });
//const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

sphere.position.x = 1.5;
sphere.scale.x = 0.5;
scene.add(sphere);

camera.position.z = 5;

const animate = function() {
    requestAnimationFrame(animate);

    cube.rotation.y += speed;
    cube.rotation.x += speed;

    sphere.rotation.y += speed;

    renderer.render(scene, camera);
}

animate();