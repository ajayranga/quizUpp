export interface CredentailsState {
  userInfo: UserInfo;
  loading: boolean;
  error: Error | null;
  success: boolean;
}

export interface UserInfo {
  name?: string;
  dob?: string;
  email?: string;
  fatherName?: string;
  address?: string;
  docType?: string;
  image?: string;
  docNum?: string;
}
