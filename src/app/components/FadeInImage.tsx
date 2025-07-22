'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

type FadeInImageProps = ImageProps & {
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

export default function FadeInImage({ className = '', showPulse = true, ...props }: FadeInImageProps) {
    const [loaded, setLoaded] = useState(false);

    return (
        <>
            {loadingPulseBg(showPulse)}
            <Image fill={true} {...props} onLoad={() => setLoaded(true)} className={`object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`} unoptimized />
        </>
    );
}