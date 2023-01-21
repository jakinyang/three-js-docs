import * as Three from 'three';

const scene = new Three.Scene();

const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

const canvas = document.querySelector('.webgl')

const renderer = new Three.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new Three.BoxGeometry(1, 1, 1);
const material = new Three.MeshBasicMaterial({
  color: 'lightcoral'
});
const cube = new Three.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate()