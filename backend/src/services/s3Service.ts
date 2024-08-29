import s3 from "../s3Client";
import { ManagedUpload } from "aws-sdk/clients/s3";

interface UploadParams {
  Bucket: string;
  Key: string;
  Body: Buffer | string;
  ContentType: string;
}

export const uploadFile = async (
  file: Buffer,
  fileName: string,
  mimeType: string
): Promise<ManagedUpload.SendData> => {
  const params: UploadParams = {
    Bucket: process.env.AWS_S3_BUCKET_NAME as string,
    Key: fileName,
    Body: file,
    ContentType: mimeType,
  };

  try {
    const data = await s3.upload(params).promise();
    return data;
  } catch (error) {
    throw new Error(`File upload failed: ${(error as Error).message}`);
  }
};
