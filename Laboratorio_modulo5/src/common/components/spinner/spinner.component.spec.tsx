import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import { trackPromise } from 'react-promise-tracker';

describe('Testing spinner.component.tsx', () => {
  it('should render the spinner, and hide when the Promise is solved', async () => {
    //Arrange

    const promiseFunction = () => {
      const promise = new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve(), 3000;
        });
      });

      return promise;
    };

    trackPromise(promiseFunction());

    //Act

    render(<SpinnerComponent />);
    const expectedResult = screen.getByTestId('loader');

    //Assert
    expect(expectedResult).toBeInTheDocument();

    await waitFor(() => {
      expect(expectedResult).not.toBeInTheDocument();
    });
  });
});
