import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';

describe('Testing spinner.component.tsx', () => {
  it('should render the spinner', async () => {
    //Arrange

    //Act
    const promise = new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 2000);
    });

    render(<SpinnerComponent />);
    const expectedResult = screen.getByTestId('loader');

    //Assert
    expect(expectedResult).toBeInTheDocument();

    // await waitFor(() => {
    //   expect(expectedResult).not.toBeInTheDocument();
    // });
  });
});
