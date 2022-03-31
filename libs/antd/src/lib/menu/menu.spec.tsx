import { render, waitFor } from '@testing-library/react';
import { Menu } from './menu';

export const testMenu = [
  {
    key: 'home',
    component: 'Home',
  },
  {
    key: 'one',
    component: 'One',
  },
  {
    key: 'two',
    component: 'Two',
  },
];

describe('Menu', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(
      <Menu
        menus={testMenu}
        theme="light"
        mode="inline"
        defaultSelectedKeys={['two']}
        defaultOpenKeys={['two']}
        style={{ height: '100%', borderRight: 0 }}
      />
    );
    await waitFor(() => {
      expect(baseElement).toBeTruthy();
    });
  });
});
