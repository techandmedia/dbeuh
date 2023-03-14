import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import Page from '../pages/index';

describe('Page', () => {
  let jsdom: JSDOM;

  beforeAll(() => {
    jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
      url: 'http://localhost',
    });
    (global as any).window = jsdom.window;
    (global as any).document = jsdom.window.document;
    (global as any).HTMLElement = jsdom.window.HTMLElement;
  });

  afterAll(() => {
    jsdom?.window?.close();
  });

  it('should render successfully', () => {
    render(<Page />);
    const listText = screen.getByText('List Kategori Produk');
    expect(listText).toBeInTheDocument();
  });
});
