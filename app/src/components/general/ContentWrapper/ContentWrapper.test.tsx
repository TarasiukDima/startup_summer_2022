import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { testClassName, testText } from '../../../testingHelpers/data';
import ContentWrapper from './ContentWrapper';

it('render ContentWrapper', () => {
    render(<ContentWrapper className={testClassName}>{testText}</ContentWrapper>);

    const contWrapper = screen.getByText(testText);

    expect(contWrapper).toBeInTheDocument();
    expect(contWrapper).toHaveClass(testClassName);
});
