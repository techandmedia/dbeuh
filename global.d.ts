import '@testing-library/jest-dom';

declare namespace jest {
  interface Matchers<R> {
    toBeInTheDocument(): R;
  }
}
