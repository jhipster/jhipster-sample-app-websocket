import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 3240,
  login: 'kd*zr@hb6xV\\c0Vym\\pCS6yQ\\Jyg0O',
};

export const sampleWithPartialData: IUser = {
  id: 557,
  login: 'oX6@FmzA\\[yOj\\<tn9\\F5\\nI0dHm',
};

export const sampleWithFullData: IUser = {
  id: 19087,
  login: 'N@h0',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
