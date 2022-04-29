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
    searchValue: 'asdf',
    listRepos: [
        {
            name: 'react-hot-loader',
            description:
                'Tweak React components in real time. (Deprecated: use Fast Refresh instead.',
            link: '/asfasdfasdfsfasdf',
        },
        {
            name: 'overreacted.io',
            description: 'Personal blog by Dan Abramov.',
            link: '/asdfasdf',
        },
        {
            name: 'whatthefuck.is',
            description:
                'An opinionated glossary of computer science terms for front-end developers. Written by Dan Abramov.',
            link: '/asdf',
        },
        {
            name: 'react-hot-loader',
            description:
                'Tweak React components in real time. (Deprecated: use Fast Refresh instead.',
            link: '/asdffasdf',
        },
    ],
    // personInfo: null,
    personInfo: {
        login: 'gaearon',
        name: 'Dan Abramov',
        avatar: 'http://localhost:3000/static/media/gitHub.9fca7e68bfc72f787239d22bc77731d5.svg',
        repository: 'http://localhost:3000',
        followers: 65.8,
        following: 171,
    },
    currentPage: 2,
    maxPage: 10,
    reposCount: 249,
};

interface IGlobalContext {
    state: IState;
    dispatch: React.Dispatch<IReducerAction>;
}

export const GlobalAppContext = createContext<IGlobalContext>({
    state: INITIAL_STATE,
    dispatch: () => {},
});
