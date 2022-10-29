export interface CheckMailState {
  isExist: boolean;
  success: boolean;
  loading: boolean;
  error: Error | null;
}
