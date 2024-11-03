export interface RegisterUserPayload {
  displayName: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string
}

export interface Account {
  id: string;
  displayName: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
}