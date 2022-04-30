import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AppProvider from '../../AppProvider';
import { INITIAL_STATE } from '../../../context';
import { mockReposData, testNotRepos } from '../../../testingHelpers/data';
import PersonReposList from './PersonReposList';
import userEvent from '@testing-library/user-event';

describe('PersonReposList', () => {
    it('render PersonReposList without data', () => {
        render(
            <AppProvider startState={INITIAL_STATE}>
                <PersonReposList />
            </AppProvider>
        );

        expect(screen.getByText(testNotRepos)).toBeInTheDocument();
    });

    it('render PersonReposList with data', () => {
        render(
            <AppProvider
                startState={{
                    ...INITIAL_STATE,
                    listRepos: mockReposData,
                    reposCount: mockReposData.length,
                }}
            >
                <PersonReposList />
            </AppProvider>
        );

        const title = screen.getByText(/Repositories/i);
        const firstEl = screen.getByText(mockReposData[0].name);
        const list = screen.getByRole('list');
        const items = screen.getAllByRole('listitem');

        expect(screen.queryByText(testNotRepos)).not.toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(firstEl).toBeInTheDocument();
        expect(list).toBeInTheDocument();
        expect(items).toHaveLength(mockReposData.length);
    });

    it('render PersonReposList with pagination', () => {
        render(
            <AppProvider
                startState={{
                    ...INITIAL_STATE,
                    listRepos: mockReposData,
                    reposCount: 100,
                    maxPage: 3,
                }}
            >
                <PersonReposList />
            </AppProvider>
        );

        const paginationText = screen.getByText(/0-4/i);
        const list = screen.getAllByRole('list');
        const items = screen.getAllByRole('button');

        expect(paginationText).toBeInTheDocument();
        expect(list).toHaveLength(2);
        expect(items).toHaveLength(5);

        expect(screen.getByText('1')).toHaveAttribute('aria-label', 'Page 1 is your current page');
        userEvent.click(screen.getByRole('button', { name: 'Next page' }));
        expect(screen.getByText('1')).toHaveAttribute('aria-label', 'Page 1');
    });
});
