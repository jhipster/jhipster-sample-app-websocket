import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'd8ca9ede-37f9-49a4-bc5e-2a31d338063b',
};

export const sampleWithPartialData: IAuthority = {
  name: '3cdff925-2d23-41e3-9f81-702cc7c30cf6',
};

export const sampleWithFullData: IAuthority = {
  name: 'e9106c93-739e-4a16-80af-0f6b8d522989',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
