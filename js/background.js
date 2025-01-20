import * as THREE from 'three'

const CONFIG = {
    enabled: true,
    antialias: true,
    colors: {
        dark: 'white',
        light: 'black',
    },
    rotationSpeed: 0.0015,
}

function setup() {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )

    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: CONFIG.antialias,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)

    document.body.appendChild(renderer.domElement)

    // Atualizar o tamanho do canvas quando redimensionar
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight)
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
    })

    return {
        scene,
        camera,
        renderer,
    }
}

function main() {
    const { scene, camera, renderer } = setup()

    const geometry = new THREE.BoxGeometry(1, 1, 1)

    const material = new THREE.MeshBasicMaterial({ color: CONFIG.colors.dark, wireframe: true })

    const cube1 = new THREE.Mesh(geometry, material)
    const cube2 = new THREE.Mesh(geometry, material)

    // PI = 180 graus (dividido por 1/4 (0.25) = 45 graus)
    cube2.rotation.y = Math.PI * 0.25 // three.js usa radianos
    scene.add(cube1, cube2)

    const rotate = (obj, dec) => {
        const multip = dec === true ? -1 : 1
        obj.rotation.x += CONFIG.rotationSpeed * multip
        obj.rotation.y += CONFIG.rotationSpeed * multip
    }

    onThemeChange((newTheme) => {
        const color = newTheme === 'dark' ? CONFIG.colors.dark : CONFIG.colors.light
        material.color.set(color)
    })

    function animate() {
        rotate(cube1)
        rotate(cube2, true)
        renderer.render(scene, camera)
    }

    renderer.setAnimationLoop(animate)
}

if (CONFIG.enabled) main()
