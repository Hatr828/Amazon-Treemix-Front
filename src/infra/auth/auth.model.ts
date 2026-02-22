export type AuthUser = {
  id?: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  role?: string | null;
  createdAtUnix?: number;
};

export type AuthSession = {
  user?: AuthUser;
  receivedAt: number;
};
