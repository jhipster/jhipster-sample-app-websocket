import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 31961,
  login: '@yhX12',
};

export const sampleWithPartialData: IUser = {
  id: 18597,
  login: 'PY&_z@5A\\)LKPXNX\\Miq\\`5I\\!OZ52Un\\C19o-d',
};

export const sampleWithFullData: IUser = {
  id: 12203,
  login: 'Wlo',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
