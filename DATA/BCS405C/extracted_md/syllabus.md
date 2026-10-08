<!-- PROVENANCE: subject_code=BCS405C | semester=4 | source_type=SYLLABUS | source_file=BCS405C_Computer_Graphics.md | confidence=1.0 -->

# BCS405C — Computer Graphics

> **VTU B.E. CSE | 2022 Scheme | 4th Semester**

---

## 📋 Course Information

| Field | Details |
|---|---|
| **Subject Name** | Computer Graphics |
| **Subject Code** | BCS405C |
| **Semester** | 4th |
| **Credits** | 03 |
| **Teaching Hours/Week** | 3L : 0T : 0P : 0S |
| **Total Pedagogy Hours** | 40 |
| **CIE Marks** | 50 |
| **SEE Marks** | 50 |
| **Total Marks** | 100 |
| **Exam Duration** | 3 Hours |

---

## 🎯 Course Objectives

1. Understand the hardware and software architecture of computer graphics systems.
2. Learn line and circle rasterization algorithms (Bresenham, DDA, Midpoint).
3. Master 2D and 3D geometric transformations and viewing pipelines.
4. Apply polygon clipping, filling, and visible surface detection algorithms.
5. Explore illumination models, shading techniques, and interactive graphics with OpenGL.

---

## 📚 Module-Wise Syllabus

### Module 1: Graphics Hardware & Line/Circle Drawing Algorithms
- Overview of Computer Graphics: Applications, Video Display Devices (Refresh CRT, LCD, LED displays)
- Raster-Scan Systems, Random-Scan Systems, Graphics Software Architecture
- Scan Conversion: Line Drawing Algorithms — DDA (Digital Differential Analyzer) Algorithm
- Bresenham's Line Drawing Algorithm (derivation and integer arithmetic)
- Circle Drawing: Midpoint Circle Algorithm
- Ellipse-Generating Algorithms overview, Character Generation

### Module 2: 2D Geometric Transformations & Clipping
- Basic 2D Transformations: Translation, Rotation, Scaling
- Matrix Representations and Homogeneous Coordinates
- Composite Transformations: General Pivot-Point Rotation, General Fixed-Point Scaling
- Other 2D Transformations: Reflection and Shear
- 2D Viewing Pipeline: Window-to-Viewport Coordinate Transformation
- Clipping Algorithms: Cohen-Sutherland Line Clipping Algorithm, Liang-Barsky Line Clipping Algorithm
- Sutherland-Hodgman Polygon Clipping Algorithm

### Module 3: 3D Geometric Transformations & Viewing
- 3D Concepts: 3D Display Methods, 3D Coordinate Systems
- 3D Geometric Transformations: Translation, Rotation (about coordinate axes and arbitrary axes), Scaling
- 3D Composite Transformations, Reflection and Shearing in 3D
- 3D Viewing Pipeline: Viewing Coordinates, Projections
- Parallel Projections: Orthographic, Oblique (Cavalier, Cabinet)
- Perspective Projections: Perspective transformation matrix, Vanishing points

### Module 4: Visible Surface Detection & Illumination Models
- Visible Surface Detection (Hidden Surface Removal): Classification of algorithms
- Back-Face Detection / Culling
- Depth-Buffer (Z-Buffer) Algorithm: Theory and algorithm steps
- A-Buffer Algorithm, Scan-Line Method, Depth-Sort Algorithm (Painter's Algorithm)
- Light Sources: Point light, Directional light, Ambient light
- Basic Illumination Models: Ambient reflection, Diffuse reflection (Lambert's Law), Specular reflection (Phong Model)
- Polygon Shading: Constant Shading (Flat), Gouraud Shading, Phong Shading

### Module 5: Computer Animation & OpenGL Programming
- Design of Animation Sequences: Storyboard, Object definitions, Key frames, In-betweening
- Traditional Animation vs Computer Animation techniques
- Kinematics and Dynamics in animation, Morphing
- Introduction to OpenGL: OpenGL Architecture, Basic syntax and primitives
- Drawing 2D/3D shapes using OpenGL (GL_POINTS, GL_LINES, GL_POLYGON)
- Color and Viewing functions in OpenGL, Event handling and callbacks (GLUT)

---

## ✅ Course Outcomes (COs)

| CO | Description |
|---|---|
| **CO1** | Explain the working of graphics hardware systems and apply scan conversion algorithms for primitives. |
| **CO2** | Perform 2D geometric transformations and apply clipping algorithms to raster primitives. |
| **CO3** | Construct 3D transformation matrices and compute parallel and perspective viewing projections. |
| **CO4** | Apply visible surface detection algorithms and illumination/shading models to render 3D scenes. |
| **CO5** | Design animation sequences and implement interactive graphics applications using OpenGL API. |

---

## 📖 Textbooks & References

- **Computer Graphics with OpenGL** — Donald Hearn, M. Pauline Baker, Warren Carithers, 4th Edition, Pearson.
- **Interactive Computer Graphics: A Top-Down Approach with WebGL** — Edward Angel, Dave Shreiner, Pearson.
- **Computer Graphics: Principles and Practice** — James D. Foley, Andries van Dam, Steven K. Feiner, John F. Hughes, Addison-Wesley.

---

> ⚠️ *Always refer to the official VTU website or your college's academic portal for the most current syllabus updates.*
