import React from 'react';
import TypingAnimation from '../LoadingScreen/TypingAnimation';
import LoadingScreenLogo from "../../../assets/edulogo.png"

const LoadingScreen = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-Solitude">

        <img src={LoadingScreenLogo} alt="Loading Screen Logo" className="w-32 h-32 animate-spin-slow" />

        <TypingAnimation />
      </div>
    );
};

export default LoadingScreen;
