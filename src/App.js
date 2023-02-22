import "./App.css";
import { useState } from "react";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion-3d";


export function Laptop({isOpen, ...props}) {
  const { nodes, materials } = useGLTF('/laptop.glb')
  const variants = {
    open: {
      rotateX: (0 * Math.PI) / 180,
      x: -0.03,
      y: 111.69,
      z: 2.84
    },
    closed: {
      rotateX: (105 * Math.PI) / 180,
      x: 0,
      y: 75,
      z: 39
    }
  }
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.03}>
        <motion.group
          position={[-0.03, 111.69, 2.84]}
          scale={3.37}
          initial={"closed"}
          animate={isOpen? "open" : "closed"}
          transition={{
            delay: 1,
            duration: 1
          }}
          variants={variants}
        >
          <mesh geometry={nodes.Screen.geometry} material={materials.Namibia} position={[0.01, -33.13, -0.84]} scale={0.3} />
          <mesh geometry={nodes.Black_Inset.geometry} material={materials['Display Rim 1']} position={[0.01, -33.13, -0.84]} scale={0.3} />
          <mesh geometry={nodes.Rubber.geometry} material={materials['Display Rubber 1']} position={[0.01, -33.13, -0.84]} scale={0.3} />
          <mesh geometry={nodes.Screen_Back.geometry} material={materials['Body 2']} position={[0.01, -33.13, -0.84]} scale={0.3} />
        </motion.group>
        <mesh geometry={nodes.Keyboard.geometry} material={materials['Keyboard 2']} />
        <mesh geometry={nodes.Touch_Panel.geometry} material={materials['Touch Bar 1']} />
        <mesh geometry={nodes.Ports.geometry} material={materials['Ports 1']} />
        <mesh geometry={nodes.Touchpad.geometry} material={materials['Touchpad 1']} />
        <mesh geometry={nodes.Body.geometry} material={materials['Body 3']} />
      </group>
    </group>
  )
}

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="container">
      <div className="preview">
        <Canvas>
          <ambientLight intensity={0.8} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <pointLight position={[10, 10, 50]} />
          <Laptop isOpen={isOpen}/>
          <PerspectiveCamera makeDefault position={[0, 0, 20]} />
          <OrbitControls />
        </Canvas>
      </div>
      <div className="footer">
        <label className="switch">
          <input
            type="checkbox"
            checked={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>

  );
}

export default App;