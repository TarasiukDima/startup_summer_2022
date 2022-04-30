import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { testClassName, testLink, testText } from '../../../testingHelpers/data';
import Image from './Image';

describe('Image', () => {
    it('render Image', () => {
        render(<Image className={testClassName} src={testLink} alt={testText} />);

        const img = screen.getByRole('img');

        expect(img).toBeInTheDocument();
        expect(img).toHaveClass(testClassName);
        expect(img).toHaveAttribute('src', testLink);
        expect(img).toHaveAttribute('alt', testText);
    });

    it('render Image without className', () => {
        render(<Image src={testLink} alt={testText} />);

        const img = screen.getByRole('img');

        expect(img).toBeInTheDocument();
        expect(img).not.toHaveClass(testClassName);
    });
});
