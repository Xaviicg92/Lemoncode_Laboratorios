import { act, renderHook } from '@testing-library/react';
import { Lookup } from 'common/models';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('testing confirmation-dialog.hook.ts', () => {
  it('should return an object: isOpen & itemToDelete with default values and onAccept, onClose, onOpenDialog return functions ', () => {
    //Arrange
    //Act
    const { result } = renderHook(() => useConfirmationDialog());
    //Assert
    const defaultIsOpen: boolean = false;
    const defaultItemToDelete: Lookup = { id: '', name: '' };
    expect(result.current.isOpen).toEqual(defaultIsOpen);
    expect(result.current.itemToDelete).toEqual(defaultItemToDelete);
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('should update values of isOpen & itemToDelete when i call onOpenDialog with a new item', () => {
    //Arrange
    const newItemToDelete: Lookup = { id: '1', name: 'Javier' };
    //Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(newItemToDelete);
    });

    //Assert
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(newItemToDelete);
  });

  it('should return default values, when onOpenDialog is called, and after that onClose & onAccept are called', () => {
    //Arrange
    const defaultIsOpen: boolean = false;
    const defaultItemToDelete: Lookup = { id: '', name: '' };
    const newItemToDelete: Lookup = { id: '1', name: 'Javier' };
    //Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(newItemToDelete);
      result.current.onAccept();
      result.current.onClose();
    });

    //Assert
    expect(result.current.isOpen).toEqual(defaultIsOpen);
    expect(result.current.itemToDelete).toEqual(defaultItemToDelete);
  });
});
