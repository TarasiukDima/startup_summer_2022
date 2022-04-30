import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';

it('render Header', () => {
    render(<Header />);

    const logoImg = screen.getByRole('img');
    const inputSearch = screen.getByRole('searchbox');
    const submitBtn = screen.getByRole('button');

    expect(logoImg).toBeInTheDocument();
    expect(inputSearch).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
});
