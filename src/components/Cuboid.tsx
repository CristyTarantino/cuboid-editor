import {Box} from "@react-three/drei";
import React from "react";
import {Cuboid} from "../../types";

interface CuboidComponentProps extends Cuboid {
    onSelect: (id: string) => void;
}

const CuboidRep = ({position, rotation, dimensions, id, onSelect, color}: CuboidComponentProps) => (
    <Box
        args={dimensions}
        position={position}
        rotation={rotation}
        onClick={() => onSelect(id)}>
        <boxGeometry args={[1, 1, 1]}/>
        <meshStandardMaterial attach="material" color={color} />
    </Box>
)

export default CuboidRep;
