import React, { FC } from 'react';
import Image from '../general/Image';
import LinkEl from '../general/LinkEl';
import githubLogo from '../../assets/img/gitHub.svg';
import css from './Logo.module.scss';

interface ILogoProps {
    className?: string;
}

const Logo: FC<ILogoProps> = ({ className }: ILogoProps) => {
    return (
        <LinkEl
            className={`${className || ''} ${css.logo}`}
            to="https://github.com/"
            target="_blank"
        >
            <Image className={css.logo__img} src={githubLogo} alt="Logo gitHub." />
        </LinkEl>
    );
};

export default Logo;
