import { PutBucketCorsCommand, PutBucketLifecycleConfigurationCommand, S3Client } from "@aws-sdk/client-s3";

const required = ["R2_ACCOUNT_ID", "R2_ACCESS_KEY_ID", "R2_SECRET_ACCESS_KEY", "R2_BUCKET_NAME"];
const missing = required.filter((name) => !process.env[name]);
if (missing.length) {
  throw new Error(`Missing R2 configuration: ${missing.join(", ")}`);
}

const client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY
  }
});
const bucket = process.env.R2_BUCKET_NAME;
const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://atelier-marble-site.vercel.app";

await client.send(new PutBucketCorsCommand({
  Bucket: bucket,
  CORSConfiguration: {
    CORSRules: [{
      AllowedOrigins: [origin],
      AllowedMethods: ["PUT", "GET", "HEAD"],
      AllowedHeaders: ["content-type", "x-amz-*"],
      ExposeHeaders: ["ETag"],
      MaxAgeSeconds: 900
    }]
  }
}));

await client.send(new PutBucketLifecycleConfigurationCommand({
  Bucket: bucket,
  LifecycleConfiguration: {
    Rules: [{
      ID: "expire-inquiry-files",
      Status: "Enabled",
      Filter: { Prefix: "inquiries/" },
      Expiration: { Days: 90 }
    }]
  }
}));

console.log(`R2 CORS and 90-day inquiry file lifecycle configured for ${bucket} (${origin}).`);
