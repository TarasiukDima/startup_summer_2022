import React, { FC, useContext } from 'react';
import Input from '../general/Input';
import Label from '../general/Label';
import { GlobalAppContext, IPersonObjInfo, IReposItem } from '../../context';
import {
    changeCountRepostAction,
    changeCurrentPageAction,
    changeErrorReposAction,
    changeErrorUserAction,
    changeListReposAction,
    changeLoadingAction,
    changeMaxPageNumberAction,
    changePersonInfoAction,
    changeSearchStringAction,
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
        dispatch(changeLoadingAction(true));
        event.preventDefault();
        dispatch(changeCurrentPageAction(1));

        const { data: userData, countRepos, errorText: userError } = await apiGetUser(searchValue);
        const { data: reposData, errorText: reposError } = await apiGetReposUser(searchValue, 1);
        const maxPage = Math.ceil((countRepos || 1) / COUNT_EL_IN_PAGE);

        dispatch(changePersonInfoAction(userData as IPersonObjInfo));
        dispatch(changeErrorUserAction(userError));
        dispatch(changeCountRepostAction(countRepos || 1));
        dispatch(changeMaxPageNumberAction(maxPage));
        dispatch(changeListReposAction(reposData as Array<IReposItem>));
        dispatch(changeErrorReposAction(reposError));
        dispatch(changeLoadingAction(false));
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
