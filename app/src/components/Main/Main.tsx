import React, { FC } from 'react';
import { TChildrens } from '../../commonTypes';

interface IMainProps {
    className?: string;
    children: TChildrens;
}

const Main: FC<IMainProps> = ({ children, className }) => {
    return <main className={className || ''}>{children}</main>;
};

export default Main;
