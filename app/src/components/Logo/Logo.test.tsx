import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { testClassName } from '../../testingHelpers/data';
import Logo from './Logo';

it('render Logo', () => {
    render(<Logo className={testClassName} />);

    const logo = screen.getByRole('link');
    const img = screen.getByRole('img');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass(testClassName);
    expect(logo).toHaveAttribute('href', 'https://github.com/');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', 'Logo gitHub.');
});
