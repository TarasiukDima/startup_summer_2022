import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { mockReposData, testClassName } from '../../../../testingHelpers/data';
import PersonReposItem from './PersonReposItem';

describe('PersonReposItem', () => {
    it('render PersonReposItem with className', () => {
        render(<PersonReposItem {...mockReposData[0]} className={testClassName} />);

        const li = screen.getByRole('listitem');
        const title = screen.getByText(mockReposData[0].name);
        const description = screen.getByText(mockReposData[0].description);

        expect(li).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(title).toHaveAttribute('href', mockReposData[0].link);
        expect(li).toHaveClass(testClassName);
    });

    it('render PersonReposItem without className', () => {
        render(<PersonReposItem {...mockReposData[0]} />);

        expect(screen.getByRole('listitem')).not.toHaveClass(testClassName);
    });
});
