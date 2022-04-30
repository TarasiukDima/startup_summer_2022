import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { testClassName, testLink, testText } from '../../../testingHelpers/data';
import LinkEl from './LinkEl';

describe('LinkEl', () => {
    it('render LinkEl', () => {
        render(
            <LinkEl className={testClassName} to={testLink} target="_blank">
                {testText}
            </LinkEl>
        );

        const link = screen.getByText(testText);

        expect(link).toBeInTheDocument();
        expect(link).toHaveClass(testClassName);
        expect(link).toHaveAttribute('href', testLink);
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).not.toHaveAttribute('target', '_parent');
        expect(link).not.toHaveAttribute('target', '_self');
        expect(link).not.toHaveAttribute('target', '_top');
    });

    it('render LinkEl without to', () => {
        render(<LinkEl>{testText}</LinkEl>);

        expect(screen.getByText(testText)).toHaveAttribute('href', '/');
    });

    it('render LinkEl without target and className', () => {
        render(<LinkEl to={testLink}>{testText}</LinkEl>);

        const link = screen.getByText(testText);

        expect(link).toBeInTheDocument();
        expect(link).not.toHaveClass(testClassName);
        expect(link).not.toHaveAttribute('target', '_blank');
    });
});
