import React from 'react';
import PersonInfo from './Info';
import PersonReposList from './ReposList';
import ContentWrapper from '../general/ContentWrapper';
import css from './Person.module.scss';

const Person = () => {
    return (
        <ContentWrapper className={css.person_repository}>
            <PersonInfo />

            <PersonReposList />
        </ContentWrapper>
    );
};

export default Person;
