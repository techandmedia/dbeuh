import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';

import { IconCopy } from './IconCopy';
import { icons } from './shared/icons';

const Meta = styled.div`
  color: #666;
  font-size: 12px;
`;

const Item = styled.li`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 20%;
  min-width: 120px;

  padding: 0px 7.5px 20px;

  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }

  ${(props) =>
    props.minimal &&
    css`
      flex: none;
      min-width: auto;
      padding: 0;
      background: #fff;
      border: 1px solid #666;

      svg {
        display: block;
        margin-right: 0;
        width: 48px;
        height: 48px;
      }
    `};
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`;

export default {
  title: 'Design System/Icon',
  component: IconCopy,
};

export function Labels(args) {
  return (
    <Fragment>
      There are {Object.keys(icons).length} icons
      <List>
        {Object.keys(icons).map((key) => (
          <Item key={key}>
            <IconCopy icon={key} aria-hidden block={false} />
            <Meta>{key}</Meta>
          </Item>
        ))}
      </List>
    </Fragment>
  );
}

export function NoLabels(args) {
  return (
    <List>
      {Object.keys(icons).map((key) => (
        <Item minimal key={key}>
          <IconCopy icon={key} aria-label={key} block={false} />
        </Item>
      ))}
    </List>
  );
}

NoLabels.storyName = 'no labels';

export function Inline(args) {
  return (
    <Fragment>
      this is an inline <IconCopy {...args} /> icon (default)
    </Fragment>
  );
}
Inline.args = {
  icon: 'facehappy',
  'aria-label': 'Happy face',
};

export function Block(args) {
  return (
    <Fragment>
      this is a block <IconCopy {...args} /> icon
    </Fragment>
  );
}
Block.args = {
  icon: 'facehappy',
  'aria-label': 'Happy face',
  block: true,
};
