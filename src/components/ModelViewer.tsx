import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import React, { Suspense } from 'react';
import * as THREE from 'three';

type ModelViewerProps = {
    children: React.ReactNode;
    cameraPosition?: [number, number, number];
    target?: [number, number, number];

};

export default function ModelViewer({ children, cameraPosition = [0, 2, -10], target = [0, 0, 0] }: ModelViewerProps) {
    return (
        <Canvas
            style={{ width: '100%', height: '100%' }}
            camera={{
                fov: 45,
                position: new THREE.Vector3(...cameraPosition),
            }}
        >        <Suspense fallback={null}>

                <ambientLight intensity={1.5} />
                <directionalLight position={[5, 10, 5]} intensity={2} />

                <Environment preset="city" />
                {children}

                <OrbitControls makeDefault target={new THREE.Vector3(...target)} />
            </Suspense>
        </Canvas>

    );
}