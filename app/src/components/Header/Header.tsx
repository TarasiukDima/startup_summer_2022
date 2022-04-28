import React, { FC } from 'react';
import FormSearch from '../FormSearch';
import ContentWrapper from '../general/ContentWrapper';
import Logo from '../Logo';
import css from './Header.module.scss';

const Header: FC = () => {
    return (
        <header className={css.header}>
            <ContentWrapper className={css.header__wrapper}>
                <Logo className={css.header__logo} />
                <FormSearch />
            </ContentWrapper>
        </header>
    );
};

export default Header;
