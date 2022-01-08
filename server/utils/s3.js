import AWS from "aws-sdk";
require("dotenv").config();

// AWS S3 bucket
const s3Bucket = new AWS.S3({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_KEY,
  region: "ap-south-1",
});

export const s3Upload = (options) => {
  return new Promise((res, rej) =>
    s3Bucket.upload(options, (error, data) => {
      if (error) return rej(error);

      return res(data);
    })
  );
};
