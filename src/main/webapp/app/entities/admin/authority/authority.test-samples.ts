import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '0a9a85b9-c957-437c-9816-8e5914c0e668',
};

export const sampleWithPartialData: IAuthority = {
  name: 'f6e037de-abb5-4d81-b9c9-6fdef77a67dd',
};

export const sampleWithFullData: IAuthority = {
  name: '01b68a37-d5b6-4a32-82bd-671af9089d35',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
