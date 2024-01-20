import React from "react";
import s from "./Lottie.module.css";
import { DotLottiePlayer} from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

/**
 * A component to handle lottie files
 * Find animations on https://lottiefiles.com/
 * @component
 * @example
 * <Lottie style={{marginTop:"40px"}} url="/lottie/404.json"/>
 * 
*/

export default function Lottie({src, loop=true, autoplay=true, ...props}) {

    return (
        <div 
            className={`${s.container} ${props.className || ""}`}
        >
            <DotLottiePlayer
                src={src}
                autoplay={autoplay}
                loop={loop}
                {...props}
            >
            </DotLottiePlayer>
        </div>
    )
}