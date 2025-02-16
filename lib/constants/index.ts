export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'BebraStore';
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'A modern store built with Next.js, ShadCN, and Prisma.';
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

export const signInDefaultValues = {
  email: 'admin@gmail.com',
  password: '123456',
};

export const signUpDefaultValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const shippingAddressDefaultValues = {
  fullName: 'Alex Lysenko',
  streetAddress: 'Rampova 7',
  city: 'Kosice',
  postalCode: '8001',
  country: 'Slovakia',
};
