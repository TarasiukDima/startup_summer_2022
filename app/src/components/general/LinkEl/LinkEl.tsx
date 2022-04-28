import React, { FC } from 'react';
import { IWrapperElProps } from '../../../commonTypes';

interface ILinkElProps extends IWrapperElProps {
    to?: string;
    target?: '_blank' | '_parent' | '_self' | '_top';
}

const LinkEl: FC<ILinkElProps> = ({ className, children, target, to = '/' }) => {
    return (
        <a className={className} href={to} target={target}>
            {children}
        </a>
    );
};

export default LinkEl;
