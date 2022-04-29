import React, { FC, useContext } from 'react';
import Main from '../Main';
import Paragraph from '../general/Paragraph';
import Person from '../Person';
import Spinner from '../Spinner';
import { GlobalAppContext } from '../../context';
import { TChildrens, TGetContent } from '../../commonTypes';
import css from './PageContent.module.scss';

const PageContent: FC = () => {
    const {
        state: { isLoadingUser, searchValue, personInfo },
    } = useContext(GlobalAppContext);

    const getContent: TGetContent = (): TChildrens => {
        if (isLoadingUser) return <Spinner />;

        if (!searchValue && !personInfo) {
            return (
                <Paragraph className={`${css.not__content} ${css.not__content_start}`}>
                    <span>Start with searching</span>
                    <span>a GitHub user</span>
                </Paragraph>
            );
        }

        if (searchValue && !personInfo) {
            return (
                <Paragraph className={`${css.not__content} ${css.not__content_found}`}>
                    User not found
                </Paragraph>
            );
        }

        return <Person />;
    };

    return <Main className={css.main}>{getContent()}</Main>;
};

export default PageContent;
