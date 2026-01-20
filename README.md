# DataV React 3D Map Visualization

This project is a modern Web technology-based data visualization large screen application.

**Core Tech Stack:**
*   React 19 + TypeScript
*   Vite
*   Three.js + @react-three/fiber
*   ECharts
*   D3-geo
*   Zustand (State Management)

## Features

*   **Sichuan Demo:** An interactive 3D map of Sichuan province with various data visualization demos.
*   **Map Builder:** A low-code interface to create custom 3D maps by uploading GeoJSON and texture files.
*   **Dashboard:** A unified entry point to manage and view your maps.
*   **Embed API:** Easily embed your custom maps into other applications via Iframe.

## Getting Started

1.  Install dependencies: `pnpm install`
2.  Run development server: `pnpm dev`

## How to Add a New City (Map Builder)

1.  Navigate to the **Dashboard** (the home page).
2.  Click **"+ Create New Map"**.
3.  **City Name:** Enter a name for your map.
4.  **GeoJSON File:** Upload a standard `.json` or `.geojson` file containing the geometry of the region.
    *   *Note:* Ensure the GeoJSON features have a `name` property if you want stats to be linked automatically.
5.  **Map Texture:** Upload an image texture for the map surface (e.g., satellite imagery or stylized map).
6.  **Normal Map Texture:** Upload a normal map image to add depth details to the 3D surface.
7.  Click **"Create Map"**.
8.  Your new map will appear on the Dashboard.

## Embed API

You can embed any user-created map into another website using an Iframe.

**URL Format:**
`http://<your-domain>/embed/<map-id>`

**Example:**
```html
<iframe
  src="http://localhost:5173/embed/123e4567-e89b-12d3-a456-426614174000"
  width="100%"
  height="600px"
  frameborder="0">
</iframe>
```

The embed view removes the surrounding UI panels and dashboard navigation, providing a clean 3D visualization canvas.
