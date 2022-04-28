import React, { FC } from 'react';

interface IImageProps {
    src: string;
    alt: string;
    className?: string;
}

const Image: FC<IImageProps> = ({ src, alt, className }: IImageProps) => {
    return <img className={className} src={src} alt={alt} />;
};

export default Image;
