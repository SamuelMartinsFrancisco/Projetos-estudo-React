import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './menu/menu';
import './app.css';

import Home from './menu/home';
import Clock from './clock';
import ExercisesGenerator from './exercisesGenerator'; 
import Forms from './forms';
import JogoDaVelha from './jogoDaVelha';
import SimpleKeyboard from './simpleKeyboard';

export default function App() {
    return (
        <div className="container">
            <div className="pages">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/clock" element={<Clock />} />
                    <Route path="/exercises-generator" element={<ExercisesGenerator />} />
                    <Route path="/forms" element={<Forms />} />
                    <Route path="/jogo-da-velha" element={<JogoDaVelha />} />
                    <Route path="/simple-keyboard" element={<SimpleKeyboard />} />
                </Routes>
            </div>
            <Menu />
        </div>
    );
}