import { render } from '@testing-library/react';

import NavLink from './nav-link';

describe('NavLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavLink />);
    expect(baseElement).toBeTruthy();
  });
});
