import React, { FC, useContext } from 'react';
import Input from '../general/Input';
import Label from '../general/Label';
import { GlobalAppContext, IPersonObjInfo, IReposItem } from '../../context';
import {
    changeCountRepostAction,
    changeCurrentPageAction,
    changeIsSearchingAction,
    changeListReposAction,
    changeLoadingAction,
    changeMaxPageNumberAction,
    changePersonInfoAction,
    changeSearchStringAction,
} from '../../context/actions';
import { TChangeElHandler } from '../../commonTypes';
import css from './FormSearch.module.scss';
import { apiGetReposUser, apiGetUser, COUNT_EL_IN_PAGE } from '../../service';

interface IDispatchingProps {
    currentPage: number;
    maxPage: number;
    personInfo: null | IPersonObjInfo;
    reposList: Array<IReposItem>;
    countRepos: number;
    isSearchingUser: boolean;
    loading: boolean;
}

type TDispatchingInfo = (obj: IDispatchingProps) => void;

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

    const dispathingInfo: TDispatchingInfo = ({
        currentPage,
        maxPage,
        personInfo,
        reposList,
        countRepos,
        isSearchingUser,
        loading,
    }) => {
        dispatch(changeCurrentPageAction(currentPage));
        dispatch(changeMaxPageNumberAction(maxPage));
        dispatch(changePersonInfoAction(personInfo));
        dispatch(changeListReposAction(reposList));
        dispatch(changeCountRepostAction(countRepos));
        dispatch(changeIsSearchingAction(isSearchingUser));
        dispatch(changeLoadingAction(loading));
    };

    const submitInputHandler: TChangeElHandler<HTMLFormElement> = async (
        event: React.ChangeEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();
        dispatch(changeLoadingAction(true));

        if (!searchValue) {
            dispathingInfo({
                currentPage: 1,
                maxPage: 1,
                personInfo: null,
                reposList: [],
                countRepos: 0,
                isSearchingUser: false,
                loading: false,
            });
            return;
        }

        const { data: personInfo, countRepos } = await apiGetUser(searchValue);
        const { data: reposList } = await apiGetReposUser(searchValue, 1);
        const maxPage = Math.ceil((countRepos || 1) / COUNT_EL_IN_PAGE);

        dispathingInfo({
            currentPage: 1,
            maxPage: maxPage,
            personInfo: personInfo as IPersonObjInfo,
            reposList: reposList as Array<IReposItem>,
            countRepos: countRepos || 1,
            isSearchingUser: true,
            loading: false,
        });
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
