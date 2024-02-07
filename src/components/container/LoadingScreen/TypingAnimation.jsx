
import React from 'react';
import Typewriter from 'typewriter-effect';

const TypingAnimation = () => {
    return (
        <div className=" font-poppins text-center mt-4 text-Teal font-bold tracking-wide text-xl ">
            <Typewriter
                options={{
                    strings: ['EduExcellence'],
                    autoStart: true,
                    loop: false,
                    delay: 40,
                    deleteSpeed: 40,
                }}
            />
        </div>
    );
};

export default TypingAnimation;
