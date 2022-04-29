import React, { FC } from 'react';
import css from './Spinner.module.scss';

const Spinner: FC = () => {
    return (
        <div className={css.spinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Spinner;
