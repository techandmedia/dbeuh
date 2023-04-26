/* eslint-disable @typescript-eslint/ban-ts-comment */
import crypto from 'crypto';
import { IDataResponse } from './types';

export function validateData<T>(dataResponse: IDataResponse<T>): T[] {
  // @ts-ignore
  const { data, pagination } = dataResponse.data;
  if (Array.isArray(data) && pagination.totalItems !== null) {
    const numberAddition = pagination.currentPage * pagination.pageSize - pagination.pageSize;
    const newData = data.map((item, index) => ({
      ...item,
      key: index + 1 + numberAddition,
    })) as T[];

    return newData;
  } else {
    return data;
  }
}

// TODO: Add a function to encrypt and decrypt data
// Define a secret key used for encryption/decryption
const SECRET_KEY = 'my-secret-key';

// Utility function to encrypt a payload
export function encrypt(payload: object): string {
  const cipher = crypto.createCipher('aes-256-cbc', SECRET_KEY);
  let encrypted = cipher.update(JSON.stringify(payload), 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Utility function to decrypt a ciphertext
export function decrypt(ciphertext: string): object {
  const decipher = crypto.createDecipher('aes-256-cbc', SECRET_KEY);
  let decrypted = decipher.update(ciphertext, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return JSON.parse(decrypted);
}
