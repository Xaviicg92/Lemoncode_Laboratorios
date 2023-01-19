import * as apiModel from './api/project.api-model';
import { mapProjectFromApiToVm } from './project.mapper';
import { createEmptyProject } from './project.vm';
import * as viewModel from './project.vm';

describe('Testing proyect.mapper.ts', () => {
  it('should return an empty proyect when feeding null value ', () => {
    //Arrange
    const project = null;
    const createEmptyProject = jest.spyOn(viewModel, 'createEmptyProject');
    const expectedResult = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };
    //Act
    const result = mapProjectFromApiToVm(project);
    //Assert
    expect(result).toEqual(expectedResult);
    expect(createEmptyProject).toHaveBeenCalled;
  });

  it('should return an empty proyect when feeding undefined value ', () => {
    //Arrange
    const project = undefined;
    const createEmptyProject = jest.spyOn(viewModel, 'createEmptyProject');
    const expectedResult = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };
    //Act
    const result = mapProjectFromApiToVm(project);
    //Assert
    expect(result).toEqual(expectedResult);
    expect(createEmptyProject).toHaveBeenCalled;
  });

  it('should return the same project values when feeding project value', () => {
    //Arrange
    const project: apiModel.Project = {
      id: '5',
      name: 'Javier',
      externalId: 'hi',
      comments: 'none',
      isActive: false,
      employees: [],
    };

    const expectedResult: viewModel.Project = {
      id: '5',
      name: 'Javier',
      externalId: 'hi',
      comments: 'none',
      isActive: false,
      employees: [],
    };

    //Act
    const result = mapProjectFromApiToVm(project);
    //Assert
    expect(result).toEqual(expectedResult);
  });
});
