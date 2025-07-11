import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  env: process.env.NODE_ENV,
  frontend_url: process.env.FRONTEND_URL,
  backend_image_url: process.env.BACKEND_IMAGE_URL,
  stripe_secret_key: process.env.STRIPE_SECRET_KEY,
  stripe_publishable_key: process.env.STRIPE_PUBLISHABLE_KEY,
  stripe_client_id: process.env.STRIPE_CLIENT_ID,
  port: process.env.PORT || 4000,
  jwt: {
    jwt_secret: process.env.JWT_SECRET,
    expires_in: process.env.EXPIRES_IN,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
    refresh_token_expires_in: process.env.REFRESH_TOKEN_EXPIRES_IN,
    reset_pass_secret: process.env.RESET_PASS_TOKEN,
    reset_pass_token_expires_in: process.env.RESET_PASS_TOKEN_EXPIRES_IN,
  },
  reset_pass_link: process.env.RESET_PASS_LINK,
  emailSender: {
    email: process.env.EMAIL,
    app_pass: process.env.APP_PASS,
  },
  ssl: {
    storeId: process.env.STORE_ID,
    storePass: process.env.STORE_PASS,
    successUrl: process.env.SUCCESS_URL,
    cancelUrl: process.env.CANCEL_URL,
    failUrl: process.env.FAIL_URL,
    sslPaymentApi: process.env.SSL_PAYMENT_API,
    sslValidationApi: process.env.SSL_VALIDATIOIN_API,
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  },
};
