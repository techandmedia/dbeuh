import { render } from '@testing-library/react';

import AntdV5 from './antd-v5';

describe('AntdV5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AntdV5 />);
    expect(baseElement).toBeTruthy();
  });
});
