import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { testClassName, testText } from '../../testingHelpers/data';
import Main from './Main';

it('render Main', () => {
    render(<Main className={testClassName}>{testText}</Main>);

    const main = screen.getByText(testText);

    expect(main).toBeInTheDocument();
    expect(main).toHaveClass(testClassName);
});
