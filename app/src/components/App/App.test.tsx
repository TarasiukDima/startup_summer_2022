import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppProvider from '../AppProvider';
import { INITIAL_STATE } from '../../context';
import {
    mockReposData,
    mockUserData,
    testStartPageContent,
    testText,
} from '../../testingHelpers/data';
import App from './App';
import { act } from 'react-dom/test-utils';

jest.mock('../../service/index');

describe('App', () => {
    afterAll(() => {
        jest.clearAllMocks();
    });

    it('check FormSearch submit work', async () => {
        render(
            <AppProvider startState={INITIAL_STATE}>
                <App />
            </AppProvider>
        );

        const inputSearch = screen.getByRole('searchbox');
        const submitBtn = screen.getByRole('button');
        const startText = screen.getByText(testStartPageContent);

        expect(inputSearch).toBeInTheDocument();
        expect(submitBtn).toBeInTheDocument();
        expect(startText).toBeInTheDocument();

        // search user
        await act(async () => userEvent.type(inputSearch, testText));
        await act(async () => userEvent.click(submitBtn));

        expect(startText).not.toBeInTheDocument();

        // show user info
        expect(await screen.findByText(mockUserData.name)).toBeInTheDocument();
        expect(await screen.findByText(mockReposData[0].name)).toBeInTheDocument();
        expect(await screen.findAllByRole('listitem')).toHaveLength(mockReposData.length);

        // search empty user
        await act(async () => userEvent.clear(inputSearch));
        await act(async () => userEvent.click(submitBtn));

        expect(await screen.findByText(testStartPageContent)).toBeInTheDocument();
        expect(screen.queryByText(mockUserData.name)).not.toBeInTheDocument();
    });
});
