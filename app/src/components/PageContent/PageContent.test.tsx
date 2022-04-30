import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AppProvider from '../AppProvider';
import { INITIAL_STATE } from '../../context';
import { mockUserData, testNotFoundUsers, testStartPageContent } from '../../testingHelpers/data';
import PageContent from './PageContent';

describe('PageContent', () => {
    it('render PageContent with start app data', () => {
        render(
            <AppProvider startState={INITIAL_STATE}>
                <PageContent />
            </AppProvider>
        );

        const startText = screen.getByText(testStartPageContent);
        const notFoundText = screen.queryByText(testNotFoundUsers);

        expect(startText).toBeInTheDocument();
        expect(notFoundText).not.toBeInTheDocument();
    });

    it('render PageContent with loader', () => {
        render(
            <AppProvider startState={{ ...INITIAL_STATE, isLoadingUser: true }}>
                <PageContent />
            </AppProvider>
        );

        const startText = screen.queryByText(testStartPageContent);
        const notFoundText = screen.queryByText(testNotFoundUsers);

        expect(startText).not.toBeInTheDocument();
        expect(notFoundText).not.toBeInTheDocument();
    });

    it('render PageContent with not found user', () => {
        render(
            <AppProvider startState={{ ...INITIAL_STATE, isSearchingUser: true }}>
                <PageContent />
            </AppProvider>
        );

        const notFoundText = screen.getByText(testNotFoundUsers);
        const startText = screen.queryByText(testStartPageContent);

        expect(notFoundText).toBeInTheDocument();
        expect(startText).not.toBeInTheDocument();
    });

    it('render PageContent with User', () => {
        render(
            <AppProvider
                startState={{ ...INITIAL_STATE, isSearchingUser: true, personInfo: mockUserData }}
            >
                <PageContent />
            </AppProvider>
        );

        expect(screen.getByText(mockUserData.name)).toBeInTheDocument();
    });
});
