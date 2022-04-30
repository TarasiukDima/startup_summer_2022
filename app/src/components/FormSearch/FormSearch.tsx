import React, { FC, useContext } from 'react';
import Input from '../general/Input';
import Label from '../general/Label';
import { GlobalAppContext, IPersonObjInfo, IReposItem } from '../../context';
import {
    changeLoadingAction,
    changeSearchStringAction,
    changeStateAction,
} from '../../context/actions';
import { TChangeElHandler } from '../../commonTypes';
import css from './FormSearch.module.scss';
import { apiGetReposUser, apiGetUser, COUNT_EL_IN_PAGE } from '../../service';

const FormSearch: FC = () => {
    const {
        state: { searchValue },
        dispatch,
    } = useContext(GlobalAppContext);

    const changeInputHandler: TChangeElHandler<HTMLInputElement> = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        dispatch(changeSearchStringAction(event.target.value));
    };

    const submitInputHandler: TChangeElHandler<HTMLFormElement> = async (
        event: React.ChangeEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();
        dispatch(changeLoadingAction(true));

        if (!searchValue) {
            dispatch(
                changeStateAction({
                    isLoadingUser: false,
                    isSearchingUser: false,
                    listRepos: [],
                    personInfo: null,
                    currentPage: 1,
                    maxPage: 1,
                    reposCount: 0,
                })
            );
            return;
        }

        const { data: personInfo, countRepos } = await apiGetUser(searchValue);
        const { data: listRepos } = await apiGetReposUser(searchValue, 1);
        const maxPage = Math.ceil((countRepos || 1) / COUNT_EL_IN_PAGE);

        dispatch(
            changeStateAction({
                isLoadingUser: false,
                isSearchingUser: true,
                listRepos: listRepos as Array<IReposItem>,
                personInfo: personInfo as IPersonObjInfo,
                currentPage: 1,
                maxPage: maxPage,
                reposCount: countRepos,
            })
        );
    };

    return (
        <form className={css.form} onSubmit={submitInputHandler}>
            <Label className={css.form__label}>
                <Input
                    className={css.form__label_search}
                    value={searchValue}
                    isControlled={true}
                    onChange={changeInputHandler}
                    type="search"
                    name="search"
                    placeholder="Enter GitHub username"
                />
            </Label>

            <Input className={css.form__submit} type="submit" submitBtnText="search" />
        </form>
    );
};

export default FormSearch;
