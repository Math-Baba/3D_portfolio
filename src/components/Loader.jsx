import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
    // useProgress fournit l'état de chargement (en %)
    const { progress } = useProgress();

    return(
        // Html qui fournit une couche par-dessus le canvas WebGL
        <Html>
            <span className='canvas-load'></span> 
            <p style={{fontSize: 14, color:'#f1f1f1', fontWeight: 800, marginTop: 40}}>
                {progress.toFixed(2)}%
            </p>
        </Html>
    )
}

export default Loader