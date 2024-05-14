export interface Cuboid {
    id: string;
    position: [number, number, number];
    rotation: [number, number, number];
    dimensions: [number, number, number]; // width, height, depth
    color?: string;
}
