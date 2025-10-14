
import * as THREE from 'three'
import { useEffect, useRef, type JSX } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)

  const { scene, animations } = useGLTF(`${import.meta.env.BASE_URL}assets/Crab.glb`)

  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const firstAnimation = Object.keys(actions)[0]
    if (firstAnimation) {
      actions[firstAnimation]?.play()
    }
  }, [actions])


  return <primitive ref={group} object={scene} {...props} />
}

useGLTF.preload(`${import.meta.env.BASE_URL}assets/Crab.glb`)