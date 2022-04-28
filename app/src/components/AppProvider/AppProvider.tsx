import React, { FC, useReducer } from 'react';
import { GlobalAppContext, INITIAL_STATE, IState } from '../../context';
import { appReducer, IReducerAction } from '../../context/reducer';
import { TChildrens } from '../../commonTypes';

export type TReducerOutputType = [state: IState, dispatch: React.Dispatch<IReducerAction>];

interface IProviderProps {
    startState?: IState | null;
    children?: TChildrens;
}

const AppProvider: FC<IProviderProps> = ({
    children,
    startState = INITIAL_STATE,
}: IProviderProps) => {
    const [state, dispatch]: TReducerOutputType = useReducer(appReducer, startState as IState);

    return (
        <GlobalAppContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalAppContext.Provider>
    );
};

export default AppProvider;
