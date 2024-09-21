import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 31961,
  login: 'X2Ni2',
};

export const sampleWithPartialData: IUser = {
  id: 11254,
  login: '3hvvIN',
};

export const sampleWithFullData: IUser = {
  id: 8301,
  login: 'x1Jt89',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
