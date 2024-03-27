import React from "react";
import Header from "../Components/Header";

import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Hologran from "../../public/Hologran";

import '../Styles/Home.css'


//Components


export default function HomePage() {
    return (
        <div>
            <Header />

            <div className="container">
                <div className="heroPage">
                    <div className="text">
                        <h1>HJ Systems</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam aperiam laborum facere, qui, eos consequatur explicabo accusantium nulla ad neque corrupti quas velit, aspernatur consectetur iusto est odio labore iure omnis libero inventore magni. Facilis, ratione optio! Animi adipisci amet nostrum numquam, necessitatibus accusamus pariatur ab autem dolores, esse error.</p>

                        <div className="button">
                            <button>Quero conhecer a HJ Systems</button>
                        </div>
                    </div>

                    <Canvas>
                        <ambientLight intensity={3} />
                        <OrbitControls autoRotate={true} enableZoom={false} />
                        <Suspense fallback={null}>
                            <Hologran />
                        </Suspense>
                        <Environment preset="sunset" />
                    </Canvas>
                </div>
            </div>
        </div>
    )
}