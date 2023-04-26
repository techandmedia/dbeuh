import { render } from '@testing-library/react';

import Utils2 from './utils2';

describe('Utils2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Utils2 />);
    expect(baseElement).toBeTruthy();
  });
});
