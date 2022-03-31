import { render, waitFor } from '@testing-library/react';
import { Menu } from '../menu/menu';
import { testMenu } from '../menu/menu.spec';

import { Sider } from './sider';

describe('Sider', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(
      <Sider collapsible collapsed={true}>
        <Menu
          menus={testMenu}
          theme="light"
          mode="inline"
          defaultSelectedKeys={['two']}
          defaultOpenKeys={['two']}
          style={{ height: '100%', borderRight: 0 }}
        />
      </Sider>
    );
    await waitFor(() => {
      expect(baseElement).toBeTruthy();
    });
  });
});
