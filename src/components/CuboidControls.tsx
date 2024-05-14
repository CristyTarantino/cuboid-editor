import styles from './CuboidControls.module.css'
interface CuboidControlsProps {
    onAdd: () => void;
    onRemove: () => void;
}
const CuboidControls = ({onAdd, onRemove}: CuboidControlsProps) => {
    return (
        <div className={styles.cuboidControlsContainer}>
            <button onClick={onAdd}>Add Cuboid</button>
            <button onClick={onRemove}>Remove Cuboid</button>
        </div>
    );
};

export default CuboidControls;
