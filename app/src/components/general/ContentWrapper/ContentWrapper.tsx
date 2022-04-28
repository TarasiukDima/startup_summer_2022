import React, { FC } from 'react';
import { IWrapperElProps } from '../../../commonTypes';
import css from './ContentWrapper.module.scss';

const ContentWrapper: FC<IWrapperElProps> = ({ children, className }) => {
    return <div className={className || css.wrapper}>{children}</div>;
};

export default ContentWrapper;
