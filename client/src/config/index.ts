export const loginURL = process.env.REACT_APP_LOGIN_URL!;
export const registerURL = process.env.REACT_APP_REGISTER_URL!;
export const candidateURL = process.env.REACT_APP_CANDIDATE_URL!;

export enum Type {
  SUCCESS = "Success",
  ERROR = "Error",
}

export interface User{
  name?: string;
  email: string;
  password: string
}

export interface INotes{
  id: string,
  text: string,
}

export interface ICandidate{
  name: string;
  email: string;
  dob: string;
  field: string;
  contact: string;
  status?: string;
  reference: string;
  notes? : INotes[];
  _id?: string;
}