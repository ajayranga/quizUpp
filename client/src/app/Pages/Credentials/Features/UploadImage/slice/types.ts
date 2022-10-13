export interface UploadImageState {
  imageUrl: string;
  loading: boolean;
  error: Error | null;
  success: boolean;
}
