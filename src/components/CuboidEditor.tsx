import React, {useState} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import {Cuboid} from "../types";
import CuboidControls from "./CuboidControls";
import CuboidForm from "./CuboidForm";
import CuboidList from "./CuboidList";
import {IChangeEvent} from "@rjsf/core";
import {v4 as uuidv4} from 'uuid'
import PointCloudAndCuboids from './PointCloudAndCuboids';
import styles from './CuboidEditor.module.css';
export const CuboidEditor = () => {
    const [cuboids, setCuboids] = useState<Cuboid[]>([
        {position: [0, 0, 0], rotation: [0, 0, 0], dimensions: [1, 1, 1], id: uuidv4()}
    ]);

    const [selectedCuboidID, setSelectedCuboidID] = useState<string | null>(cuboids[0].id);

    const handleSelectCuboid = (id: string) => {
        setSelectedCuboidID(id)
    };

    const handleChange = (e: IChangeEvent) => {
        const updatedCuboids = cuboids.map(cuboid =>
            cuboid.id === selectedCuboidID ? {...cuboid, ...e.formData} : cuboid
        );
        setCuboids(updatedCuboids);
    };

    const addCuboid = () => {
        const newId = uuidv4();
        const newCuboid: Cuboid = {position: [0, 0, 0], rotation: [0, 0, 0], dimensions: [1, 1, 1], id: newId};
        setCuboids([...cuboids, newCuboid]);
        setSelectedCuboidID(newId);
    };

    const removeCuboid = () => {
        const filteredCuboids = cuboids.filter(cuboid => cuboid.id !== selectedCuboidID);
        setCuboids(filteredCuboids);
        setSelectedCuboidID(filteredCuboids[0]?.id || null);
    }

    const selectedCuboidData = cuboids.find(c => c.id === selectedCuboidID);

    return (
        <div className={styles.container}>
            <Canvas>
                <OrbitControls/>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[10, 10, 10]}/>
                <PointCloudAndCuboids/>
                <CuboidList cuboids={cuboids} onSelect={handleSelectCuboid}/>
            </Canvas>
            <div>
                <CuboidControls onAdd={addCuboid} onRemove={removeCuboid}/>
                <CuboidForm cuboidData={selectedCuboidData} onChange={handleChange}/>
            </div>
        </div>
    );
};
export default CuboidEditor;
