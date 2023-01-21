import * as Three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// Elements needed:
// Scene
// Object: geometry, material, mesh
// Sizes(?) --> window.innerWidth/innerHeight
// Light
// Camera
// Renderer
// Controls
// Resize: update sizes + update camera

// Scene
const scene = new Three.Scene();

// Object
const geometry = new Three.BoxGeometry(1, 1, 1);
const material = new Three.MeshStandardMaterial({
  color: 'lightseagreen',
  roughness: 0.1,
});
const cube = new Three.Mesh(geometry, material);
scene.add(cube);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

// Light
const light = new Three.PointLight(0xffffff, 1, 100);
light.position.set(5, 10, 10);
light.intensity = 1.5;
scene.add(light);

// Camera
const camera = new Three.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 5;
scene.add(camera);

// Canvas
const canvas = document.querySelector('.webgl')

// Renderer
const renderer = new Three.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);

// Controls
const controls = new OrbitControls(camera, canvas);

controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;

// Resize Handler
window.addEventListener('reszie', () => {
  // Update Sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update Camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
})

function animate() {
  controls.update()
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate()
