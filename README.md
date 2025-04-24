🌌 Solar System Simulation - Three.js

This project is an interactive 3D solar system visualization built with Three.js. It features a realistic textured Sun and inner planets (Mercury, Venus, Earth, Mars) along with moons orbiting Earth and Mars. Users can rotate around the scene and zoom in/out using mouse controls, thanks to OrbitControls.
🚀 Features

    Real-time animation of planetary orbits around the sun

    Moons orbiting Earth and Mars

    High-quality textures mapped to spherical meshes

    Interactive camera controls using OrbitControls

    Dynamic window resizing for responsive rendering

    A cube map used as a beautiful space background

🧩 Tech Stack

    Three.js - For 3D rendering

    JavaScript (ES6+)

    OrbitControls - For camera movement

    CubeTextureLoader - For space background

    MeshStandardMaterial - For realistic lighting on planet surfaces

🪐 How It Works

    Each planet is created with a custom radius, orbit speed, and distance from the sun.

    The sun remains static while planets rotate around it.

    Moons are attached to their parent planet using planet.add(moon) and orbit their respective planet using trigonometric calculations.

    Lighting is provided by a powerful PointLight at the sun’s position and subtle AmbientLight.

📂 Directory Structure (Textures)

You need the following folder structure with planet textures and cube map images:

/textures
├── 2k_sun.jpg
├── 2k_mercury.jpg
├── 2k_venus_surface.jpg
├── 2k_earth_daymap.jpg
├── 2k_mars.jpg
├── 2k_moon.jpg
└── /cubeMap
    ├── px.png
    ├── nx.png
    ├── py.png
    ├── ny.png
    ├── pz.png
    └── nz.png

🛠 Setup

    Clone this repository: git clone https://github.com/Mueez-lab/threejs-solar-system.git
    
    cd threejs-solar-system

    Serve with a local web server (e.g., Live Server in VS Code) to avoid CORS issues.

    Make sure the texture paths are correctly placed inside a textures directory.

    Open index.html in your browser.

📷 Preview


(Include a screenshot if possible)
📌 Todo / Future Improvements

    Add outer planets (Jupiter, Saturn, Uranus, Neptune)

    Add orbital paths for visual clarity

    Add GUI controls to toggle visibility of planets and orbits

    Add realistic scaling and rotation speed options
