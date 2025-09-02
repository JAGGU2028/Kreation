import React from 'react';

interface StaticLogoProps {
    width?: string;
    height?: string;
}

const StaticLogo: React.FC<StaticLogoProps> = ({ width = "40", height = "40" }) => (
    <svg width={width} height={height} viewBox="0 0 100 100">
        <g fill="#FFFFFF">
            <path d="M10,0 L50,0 L30,20 Z" />
            <path d="M10,100 L50,100 L30,80 Z" />
            <path d="M90,50 L50,0 L50,100 Z" />
        </g>
    </svg>
);

export default StaticLogo;
