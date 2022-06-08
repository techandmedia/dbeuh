/* eslint-disable @typescript-eslint/no-explicit-any */
import { cleanup, render } from '@testing-library/react';

import { Rc } from './rc';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

beforeAll(() => {
  cleanup();
});

describe('Rc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rc>OK</Rc>);
    expect(baseElement).toBeTruthy();
  });
});
