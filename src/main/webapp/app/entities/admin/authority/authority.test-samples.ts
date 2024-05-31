import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'd789c6ab-9ce2-4dee-bb35-7ef49a9da640',
};

export const sampleWithPartialData: IAuthority = {
  name: '55bef2ea-3341-4cd6-93a3-b86046b38b2f',
};

export const sampleWithFullData: IAuthority = {
  name: '35c4dbf7-f59b-4265-b821-dc243d19e837',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
