import { render } from '@testing-library/react';
import { INextLink, NextLink } from './next-link';

const testMenu: INextLink = {
  href: 'home',
  title: 'Home',
  iconType: 'master',
};

describe('NextLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NextLink {...testMenu} />);
    expect(baseElement).toBeTruthy();
  });
});
