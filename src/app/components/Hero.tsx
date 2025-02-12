import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className="width-full h-96 bg-gray-200 flex items-center justify-center">
    
                    <Image
                      className="dark:invert width-full h-96 bg-cover bg-center"
                      src="/next.svg"
                      alt="Next.js logo"
                      width={180}
                      height={38}
                      priority
                    />
            <h1>hero</h1>
        </div>
    );
}