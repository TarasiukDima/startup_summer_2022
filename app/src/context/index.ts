import { createContext } from 'react';
import { IReducerAction } from './reducer';

export interface IPersonObjInfo {
    login: string;
    name: string;
    avatar: string;
    repository: string;
    followers: number;
    following: number;
}

export interface IReposItem {
    name: string;
    description: string;
    link: string;
}

export type IState = {
    isLoadingUser: boolean;
    isLoadingRepos: boolean;
    isSearchingUser: boolean;
    searchValue: string;
    listRepos: Array<IReposItem>;
    personInfo: null | IPersonObjInfo;
    currentPage: number;
    maxPage: number;
    reposCount: number;
};

export const INITIAL_STATE: IState = {
    isLoadingUser: false,
    isLoadingRepos: false,
    isSearchingUser: false,
    searchValue: '',
    listRepos: [],
    personInfo: null,
    currentPage: 1,
    maxPage: 1,
    reposCount: 0,
};

interface IGlobalContext {
    state: IState;
    dispatch: React.Dispatch<IReducerAction>;
}

export const GlobalAppContext = createContext<IGlobalContext>({
    state: INITIAL_STATE,
    dispatch: () => {},
});
