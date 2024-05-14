import React from 'react';
import {Cuboid as CuboidType} from "../../types";
import Cuboid from "./Cuboid";

interface CuboidListProp {
    cuboids: CuboidType[];
    onSelect: (id: string) => void;
}

const CuboidList = ({cuboids, onSelect}: CuboidListProp) => {
    return <>
        {cuboids.map(cuboid => (
            <Cuboid
                key={cuboid.id}
                {...cuboid}
                onSelect={() => onSelect(cuboid.id)}
            />
        ))}
    </>
};

export default CuboidList;
