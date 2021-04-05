import type { Upload } from 'tus-js-client';

export type TusClientActions = ReturnType<
  | typeof insertUploadInstance
  | typeof removeUploadInstance
  | typeof successUpload
  | typeof errorUpload
>;

export const insertUploadInstance = (uploadKey: string, upload: Upload) =>
  ({
    type: 'INSERT_UPLOAD_INSTANCE',
    payload: {
      uploadKey,
      uploadState: {
        upload,
        isSuccess: false,
      },
    },
  } as const);

export const successUpload = (uploadKey: string) =>
  ({
    type: 'SUCCESS_UPLOAD',
    payload: {
      uploadKey,
    },
  } as const);

export const errorUpload = (uploadKey: string, error?: Error) =>
  ({
    type: 'ERROR_UPLOAD',
    payload: {
      uploadKey,
      error,
    },
  } as const);

export const removeUploadInstance = (uploadKey: string) =>
  ({
    type: 'REMOVE_UPLOAD_INSTANCE',
    payload: {
      uploadKey,
    },
  } as const);
