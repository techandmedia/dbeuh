import { render } from '@testing-library/react';

import Content from './content';

describe('Content', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Content />);
    expect(baseElement).toBeTruthy();
  });
});
