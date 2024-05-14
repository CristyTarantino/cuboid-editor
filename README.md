# 3D Cuboid Editor

The 3D Cuboid Editor is a React application designed for creating and manipulating cuboids within a 3D point cloud
environment. Utilizing WebGL via the `@react-three/fiber` library and `@react-three/drei` for enhanced controls, this
project allows users to interactively adjust the position, rotation, and dimensions of 3D boxes (cuboids) overlaid on a
point cloud.

## Project Structure

The project is structured to promote modularity, ease of navigation, and maintainability:

```plaintext
/src
|-- /components                  # Reusable presentational components
|   |-- Cuboid.js                # Defines the 3D cuboid component
|   |-- CuboidForm.js            # React component for cuboid form interactions
|   |-- CuboidList.js            # Component to render list of Cuboids
|   |-- PointCloudAndCuboids.js  # Component to handle the rendering of the point cloud and cuboids
|-- /containers                  # Container components
|   |-- CuboidEditor.js          # Main container component that holds the state and logic
|-- /settings
|   |-- schema.js                # JSON schema for the cuboids' forms
|   |-- uiSchema.js              # UI schema for customizing form layouts
|-- /types                       # TypeScript types and interfaces
|   |-- index.d.ts               # Type definitions for the project
|-- App.js                       # Main React application entry component
|-- index.js                     # Entry point for React rendering
```

## Key Choices

### React and TypeScript

The application is built using React, leveraging functional components and hooks for state management and lifecycle
effects. TypeScript is utilized to enforce type safety and improve the development experience with type checking and
autocompletion.

### @react-three/fiber and @react-three/drei

I chose `@react-three/fiber` to integrate 3D rendering capabilities within React's component logic, providing a bridge to
Three.js. `@react-three/drei` offers useful abstractions and additional helpers that simplify the implementation of
controls and lighting.

### JSON Schema Form (@rjsf/core)

Forms are dynamically generated using JSON Schema definitions, making the application flexible and easy to extend. This
approach decouples the form logic from the application and allows for quick adjustments to the properties and validation
of cuboids.

### State Management

The state is managed locally within the CuboidEditor container component using React's useState. This decision was made
to contain all state logic related to cuboids within the editor itself, promoting ease of debugging and state tracking.

### Modularity and Reusability

The application is structured to maximize the reusability of components. Cuboid, CuboidForm, and CuboidList are designed
as reusable components that can be managed and tested independently from the main container component.

## Usage

To start the project:

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

Build the project for production:

```bash
npm run build
```

##  Future Enhancements

* Testing: Add unit and end-to-end testing omitted by time contains.

* Global State Management: Integrate Redux or Context API for global state management if the application's state
complexity increases.

* Performance Optimization: Implement more sophisticated methods for handling large point clouds and numerous cuboids.

* Extended User Controls: Add more interactive tools for users, such as different types of shapes or comprehensive
transformation tools.
