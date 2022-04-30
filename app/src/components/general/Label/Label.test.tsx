import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { testClassName, testId, testText } from '../../../testingHelpers/data';
import Label from './Label';

it('render Label', () => {
    render(
        <Label className={testClassName} htmlFor={testId}>
            {testText}
        </Label>
    );

    const labelEl = screen.getByText(testText);

    expect(labelEl).toBeInTheDocument();
    expect(labelEl).toHaveClass(testClassName);
    expect(labelEl).toHaveAttribute('for', testId);
});
