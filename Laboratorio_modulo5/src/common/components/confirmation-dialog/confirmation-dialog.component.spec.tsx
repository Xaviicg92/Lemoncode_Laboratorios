import React from 'react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Testing confirmation-dialog-component', () => {
  it('should not render the component feeding isOpen to false', () => {
    //Arrange
    const props = {
      isOpen: false,
      onAccept: () => {},
      onClose: () => {},
      title: 'title',
      labels: { closeButton: 'cancelar', acceptButton: 'aceptar' },
      children: 'Some children',
    };

    //Act

    render(<ConfirmationDialogComponent {...props} />);
    const expectedResult = screen.queryByRole('dialog');
    //Assert

    // expect(asFragment()).toMatchSnapshot();
    expect(expectedResult).toBeNull();
  });

  it('should render the button named "aceptar" feeding isOpen to true', () => {
    //Arrange
    const props = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: 'title',
      labels: { closeButton: 'cancelar', acceptButton: 'aceptar' },
      children: 'Some children',
    };

    //Act

    render(<ConfirmationDialogComponent {...props} />);
    const buttonElement = screen.getByRole('button', { name: /aceptar/i });

    //Assert

    expect(buttonElement).toBeInTheDocument();
  });

  it('should call onAccept & onClose functions when the buttons are clicked', async () => {
    //Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'title',
      labels: { closeButton: 'cancelar', acceptButton: 'aceptar' },
      children: 'Some children',
    };

    //Act

    render(<ConfirmationDialogComponent {...props} />);
    const buttonElementAccept = screen.getByRole('button', {
      name: /aceptar/i,
    });
    const buttonElementRegret = screen.getByRole('button', {
      name: /cancelar/i,
    });

    await userEvent.click(buttonElementAccept);
    await userEvent.click(buttonElementRegret);

    //Assert
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });
});
