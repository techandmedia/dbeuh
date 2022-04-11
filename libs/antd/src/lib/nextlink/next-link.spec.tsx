import { render } from '@testing-library/react';
import { INextLink, Nextlink } from './next-link';

const testMenu: INextLink = {
  href: 'home',
  title: 'Home',
  iconType: 'master',
};

describe('Nextlink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Nextlink {...testMenu} />);
    expect(baseElement).toBeTruthy();
  });
});
