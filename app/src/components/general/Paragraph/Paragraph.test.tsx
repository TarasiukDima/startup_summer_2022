import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { testClassName, testText } from '../../../testingHelpers/data';
import Paragraph from './Paragraph';

it('render Paragraph', () => {
    render(<Paragraph className={testClassName}>{testText}</Paragraph>);

    const paragraphEl = screen.getByText(testText);

    expect(paragraphEl).toBeInTheDocument();
    expect(paragraphEl).toHaveClass(testClassName);
});
