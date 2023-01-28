import { render } from '@testing-library/react';

import MenuLink from './menu-link';

describe('MenuLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuLink />);
    expect(baseElement).toBeTruthy();
  });
});
