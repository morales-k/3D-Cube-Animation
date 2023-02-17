let scene, camera, renderer, cube;
const aspectRatio = window.innerWidth / window.innerHeight;

function init() {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const loader = new THREE.TextureLoader();
    const materials = [
        new THREE.MeshBasicMaterial({map: loader.load("../Textures/colors.png")}),
        new THREE.MeshBasicMaterial({map: loader.load("../Textures/crate.gif")}),
        new THREE.MeshBasicMaterial({map: loader.load("../Textures/grasslight-big.jpg")}),
        new THREE.MeshBasicMaterial({map: loader.load("../Textures/dark-s_pz.jpg")}),
        new THREE.MeshBasicMaterial({map: loader.load("../Textures/earth_atmos_2048.jpg")}),
        new THREE.MeshBasicMaterial({map: loader.load("../Textures/brick_bump.jpg")}),
    ];

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
    camera.position.z = 5;
};

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

function onWindowResize() {
    camera.aspect = aspectRatio;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
};

window.addEventListener("resize", onWindowResize, false);

init();
animate();