import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AppProvider from '../../AppProvider';
import { mockUserData } from '../../../testingHelpers/data';
import { INITIAL_STATE } from '../../../context';
import PersonInfo from './PersonInfo';

it('render PersonInfo', () => {
    render(
        <AppProvider
            startState={{ ...INITIAL_STATE, isSearchingUser: true, personInfo: mockUserData }}
        >
            <PersonInfo />
        </AppProvider>
    );

    const photo = screen.getByRole('img');
    const followers = screen.getByText(new RegExp(mockUserData.followers.toString(), 'i'));
    const following = screen.getByText(new RegExp(mockUserData.following.toString(), 'i'));
    const login = screen.getByText(mockUserData.login);
    const name = screen.getByText(mockUserData.name);

    expect(photo).toBeInTheDocument();
    expect(followers).toBeInTheDocument();
    expect(following).toBeInTheDocument();
    expect(login).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(photo).toHaveAttribute('src', mockUserData.avatar);
});
