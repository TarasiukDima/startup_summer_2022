import { IPersonObjInfo, IReposItem, IState } from './index';
import { varientsActions } from './actions';

export interface IReducerAction {
    type: varientsActions;
    payload?: Array<IReposItem> | IPersonObjInfo | string | number | boolean;
}

type TReducerApp = (state: IState, action: IReducerAction) => IState;

export const appReducer: TReducerApp = (state: IState, action: IReducerAction): IState => {
    const { type, payload } = action;

    switch (type) {
        case varientsActions.CHANGE_LOADING:
            return {
                ...state,
                isLoadingUser: payload as boolean,
            };
        case varientsActions.CHANGE_LOADING_NEWPAGE:
            return {
                ...state,
                isLoadingRepos: payload as boolean,
            };
        case varientsActions.CHANGE_ERROR_TEXT_USER:
            return {
                ...state,
                errorTextUser: payload as string,
            };
        case varientsActions.CHANGE_ERROR_TEXT_REPOS:
            return {
                ...state,
                errorTextRepos: payload as string,
            };
        case varientsActions.CHANGE_SEARCH_VALUE:
            return {
                ...state,
                searchValue: payload as string,
            };

        case varientsActions.CHANGE_LIST_REPOS:
            return {
                ...state,
                listRepos: payload as Array<IReposItem>,
            };

        case varientsActions.CHANGE_PERSON_INFO:
            return {
                ...state,
                personInfo: payload as IPersonObjInfo,
            };

        case varientsActions.CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: payload as number,
            };

        case varientsActions.CHANGE_MAX_PAGE:
            return {
                ...state,
                maxPage: payload as number,
            };

        case varientsActions.CHANGE_COUNT_REPOS:
            return {
                ...state,
                reposCount: payload as number,
            };

        default:
            return state;
    }
};
