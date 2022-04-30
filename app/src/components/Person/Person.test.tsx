import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AppProvider from '../AppProvider';
import { INITIAL_STATE } from '../../context';
import { mockReposData, mockUserData, testNotRepos } from '../../testingHelpers/data';
import Person from './Person';

describe('Person', () => {
    it('render Person with repos', () => {
        render(
            <AppProvider
                startState={{
                    ...INITIAL_STATE,
                    personInfo: mockUserData,
                    reposCount: mockReposData.length,
                    listRepos: mockReposData,
                }}
            >
                <Person />
            </AppProvider>
        );

        expect(screen.getByText(mockUserData.name)).toBeInTheDocument();
        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem')).toHaveLength(mockReposData.length);
        expect(screen.queryByText(testNotRepos)).not.toBeInTheDocument();
    });

    it('render Person without repos', () => {
        render(
            <AppProvider
                startState={{
                    ...INITIAL_STATE,
                    personInfo: mockUserData,
                    reposCount: 0,
                    listRepos: [],
                }}
            >
                <Person />
            </AppProvider>
        );

        expect(screen.getByText(mockUserData.name)).toBeInTheDocument();
        expect(screen.queryByText(testNotRepos)).toBeInTheDocument();
    });
});
