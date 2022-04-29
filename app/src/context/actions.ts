import { IReposItem, IPersonObjInfo } from './index';
import { IReducerAction } from './reducer';

export enum varientsActions {
    CHANGE_LOADING = 'CHANGE_LOADING',
    CHANGE_LOADING_NEWPAGE = 'CHANGE_LOADING_NEWPAGE',
    CHANGE_ERROR_TEXT_USER = 'CHANGE_ERROR_TEXT_USER',
    CHANGE_ERROR_TEXT_REPOS = 'CHANGE_ERROR_TEXT_REPOS',
    CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE',
    CHANGE_LIST_REPOS = 'CHANGE_LIST_REPOS',
    CHANGE_PERSON_INFO = 'CHANGE_PERSON_INFO',
    CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE',
    CHANGE_MAX_PAGE = 'CHANGE_MAX_PAGE',
    CHANGE_COUNT_REPOS = 'CHANGE_COUNT_REPOS',
}
export const changeLoadingAction = (isLoading: boolean): IReducerAction => ({
    type: varientsActions.CHANGE_LOADING,
    payload: isLoading,
});

export const changeLoadingPageAction = (isLoading: boolean): IReducerAction => ({
    type: varientsActions.CHANGE_LOADING_NEWPAGE,
    payload: isLoading,
});

export const changeErrorUserAction = (errorText: string): IReducerAction => ({
    type: varientsActions.CHANGE_ERROR_TEXT_USER,
    payload: errorText,
});

export const changeErrorReposAction = (errorText: string): IReducerAction => ({
    type: varientsActions.CHANGE_ERROR_TEXT_REPOS,
    payload: errorText,
});

export const changeSearchStringAction = (searchValue: string): IReducerAction => ({
    type: varientsActions.CHANGE_SEARCH_VALUE,
    payload: searchValue,
});

export const changeListReposAction = (apiCards: Array<IReposItem>): IReducerAction => ({
    type: varientsActions.CHANGE_LIST_REPOS,
    payload: apiCards,
});

export const changePersonInfoAction = (personInfo: IPersonObjInfo): IReducerAction => ({
    type: varientsActions.CHANGE_PERSON_INFO,
    payload: personInfo,
});

export const changeCurrentPageAction = (currentPage: number): IReducerAction => ({
    type: varientsActions.CHANGE_CURRENT_PAGE,
    payload: currentPage,
});

export const changeMaxPageNumberAction = (maxPage: number): IReducerAction => ({
    type: varientsActions.CHANGE_MAX_PAGE,
    payload: maxPage,
});

export const changeCountRepostAction = (countRepos: number): IReducerAction => ({
    type: varientsActions.CHANGE_COUNT_REPOS,
    payload: countRepos,
});
