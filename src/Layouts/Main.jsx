import React from 'react';
import Home from '../Pages/Home/Home/Home';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const Main = () => {
    const [theme,setTheme]=useState('light')
    const handleTheme=()=>{
        setTheme(theme=='light'?'dark':'light');
    }
    return (
        <div data-theme={theme}>
            <Header handleTheme={handleTheme}></Header>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Main;