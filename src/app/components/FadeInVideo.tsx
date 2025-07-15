'use client';

import {useEffect, useRef, useState, VideoHTMLAttributes} from 'react';

type FadeInVideoProps = VideoHTMLAttributes<HTMLVideoElement> & {
    showPulse?: boolean;
};

function loadingPulseBg(shown: boolean) {
    if (shown) {
        return (
            <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
        )
    }

    return null;
}

export default function FadeInVideo({ className = '', showPulse = true, children, ...props }: FadeInVideoProps) {
    const [loaded, setLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleLoadedData = () => {
        setLoaded(true);
    }

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener('loadeddata', handleLoadedData);

            if (videoRef.current.readyState >= 2) {
                handleLoadedData();
            }

            return () => {
                if (videoRef.current) {
                    videoRef.current.removeEventListener('loadeddata', handleLoadedData);
                }
            };
        }
    }, []);

    return (
        <>
            {loadingPulseBg(showPulse)}
            <video ref={videoRef} {...props} className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`} >
                {children}
            </video>
        </>
    );
}