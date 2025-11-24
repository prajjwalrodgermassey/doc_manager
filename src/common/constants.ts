export const SALT_ROUNDS = 10;

export const ERROR = Object.freeze({
  USER: {
    NOT_FOUND: 'User not found',
    ALREADY_EXISTS: 'User already exists',
    LOGIN_FAILED: 'User login failed',
    CANNOT_CREATE: 'User could not be created',
    WRONG_PASSWORD: 'Password is wrong',
  },
});
