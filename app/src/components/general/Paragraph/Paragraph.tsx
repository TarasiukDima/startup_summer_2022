import React, { FC } from 'react';
import { IWrapperElProps } from '../../../commonTypes';

const Paragraph: FC<IWrapperElProps> = ({ children, className }) => {
    return <p className={className || ''}>{children}</p>;
};

export default Paragraph;
