import { render } from '@testing-library/react';

import Sider from './sider';

describe('Sider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Sider />);
    expect(baseElement).toBeTruthy();
  });
});
