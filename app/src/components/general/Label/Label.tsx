import React, { FC } from 'react';
import { IWrapperElProps } from '../../../commonTypes';

interface ILabelProps extends IWrapperElProps {
    htmlFor?: string;
}

const Label: FC<ILabelProps> = ({ children, className, htmlFor }: ILabelProps) => {
    return (
        <label className={className} htmlFor={htmlFor}>
            {children}
        </label>
    );
};

export default Label;
