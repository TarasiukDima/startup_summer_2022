import React, { FC } from 'react';
import { IWrapperElProps } from '../../commonTypes';

const Main: FC<IWrapperElProps> = ({ children, className }) => {
    return <main className={className || ''}>{children}</main>;
};

export default Main;
