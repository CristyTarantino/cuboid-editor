import {useEffect} from 'react';
import {useThree} from "@react-three/fiber";
import {PCDLoader} from "three/examples/jsm/loaders/PCDLoader";

const PointCloudAndCuboids = () => {
    const {scene} = useThree();

    useEffect(() => {
        // Load point cloud data
        const loader = new PCDLoader();
        loader.load('https://segmentsai-prod.s3.eu-west-2.amazonaws.com/assets/admin-tobias/41089c53-efca-4634-a92a-0c4143092374.pcd', (points) => {
            scene.add(points);
        });
    }, [scene]);

    return null;
};

export default PointCloudAndCuboids;
