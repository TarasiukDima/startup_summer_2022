import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppProvider from '../AppProvider';
import { INITIAL_STATE } from '../../context';
import { testText } from '../../testingHelpers/data';
import FormSearch from './FormSearch';

describe('FormSearch', () => {
    it('render FormSearch with start vaule', () => {
        render(
            <AppProvider startState={{ ...INITIAL_STATE, searchValue: testText }}>
                <FormSearch />
            </AppProvider>
        );

        const inputSearch = screen.getByRole('searchbox');

        expect(inputSearch).toBeInTheDocument();
        expect(inputSearch).toHaveDisplayValue(testText);
    });

    it('render FormSearch without start value', () => {
        render(
            <AppProvider startState={INITIAL_STATE}>
                <FormSearch />
            </AppProvider>
        );

        const inputSearch = screen.getByRole('searchbox');
        const submitBtn = screen.getByRole('button');

        expect(inputSearch).toBeInTheDocument();
        expect(submitBtn).toBeInTheDocument();

        expect(inputSearch).toHaveDisplayValue('');

        userEvent.type(inputSearch, testText);
        expect(inputSearch).toHaveDisplayValue(testText);

        userEvent.clear(inputSearch);
        expect(inputSearch).toHaveDisplayValue('');

        userEvent.type(inputSearch, 'a');
        expect(inputSearch).toHaveDisplayValue('a');
    });
});
