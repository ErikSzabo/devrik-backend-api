export interface LoginUser {
  username: string;
  password: string;
}

export type Role = 'user' | 'admin';

export interface MongoUser extends LoginUser {
  role: Role;
}

export interface TokenUser {
  username: string;
  role: Role;
}

export interface Token {
  token: string;
}
