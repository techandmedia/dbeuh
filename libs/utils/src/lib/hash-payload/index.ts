/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
const CryptoJS = require('crypto-js');
const SECRET_KEY =
  process.env['NX_SECRET_KEY'] || process.env['NEXT_PUBLIC_SECRET_KEY'] || 'random-string';

/**
 * If you try to decrypt a string of text, use deHashString, otherwise use deHashPayload
 * @param payload
 * A secret key is reqruired.
 * If you are using NX, make sure to put NX_SECRET_KEY in your env file.
 * For NEXT.Js, put NEXT_PUBLIC_SECRET_KEY in your env file.
 * Otherwise it will use the default key 'random-string'.
 * Use at your own risk.
 * @returns a string
 */
export function hashPayload(payload: unknown): string {
  let tempPayload = '';
  let hashedPayload = '';
  if (typeof payload === 'string') {
    tempPayload = payload;
  } else {
    tempPayload = JSON.stringify(payload);
  }

  hashedPayload = CryptoJS.AES.encrypt(tempPayload, SECRET_KEY).toString();
  return hashedPayload;
}

export function deHashPayload(hashedPayload: string): any {
  const bytes = CryptoJS.AES.decrypt(hashedPayload, SECRET_KEY);
  const originalText = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return originalText;
}

export function deHashString(hashedPayload: string): any {
  const bytes = CryptoJS.AES.decrypt(hashedPayload, SECRET_KEY);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}
