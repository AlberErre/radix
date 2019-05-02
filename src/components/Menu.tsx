import { ComponentProps } from 'react';
import styled, { css } from 'styled-components';
import {
  maxWidth,
  MaxWidthProps,
  space,
  SpaceProps,
  themeGet,
  width,
  WidthProps,
} from 'styled-system';
import { transparentize } from 'polished';

type MenuProps = SpaceProps & WidthProps & MaxWidthProps;

export const Menu = styled.nav<MenuProps>`
  border-radius: ${themeGet('radii.1')};
  overflow: hidden;
  ${props => css`
    box-shadow: 0 10px 38px -10px ${transparentize(0.65, themeGet('colors.grays.8')(props))},
      0 10px 20px -15px ${transparentize(0.8, themeGet('colors.grays.8')(props))};
  `}

  ${space};
  ${width};
  ${maxWidth};
`;

type MenuItemProps = ComponentProps<'button'> &
  ComponentProps<'a'> & { active?: boolean };

export const MenuItem = styled.button<MenuItemProps>`
  align-items: center;
  background-color: ${props =>
    props.active ? themeGet('colors.blues.1')(props) : 'transparent'};
  border: none;
  box-sizing: border-box;
  color: inherit;
  cursor: pointer;
  display: flex;
  line-height: 1;
  min-height: ${themeGet('space.6')};
  outline: none;
  padding: ${themeGet('space.1')} ${themeGet('space.3')};
  text-align: left;
  text-decoration: none;
  font-weight: 400;
  width: 100%;

  &:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  &:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  &:hover {
    background-color: ${themeGet('colors.grays.1')};
  }

  &:active {
    background-color: ${themeGet('colors.grays.2')};
  }

  &:focus {
    box-shadow: inset 0 0 0 1px ${themeGet('colors.blues.2')};
  }
`;

export const MenuGroup = styled.div`
  border-top: 1px solid ${themeGet('colors.grays.2')};
  border-bottom: 1px solid ${themeGet('colors.grays.2')};
  /* margin-top: ${themeGet('space.1')};
  margin-bottom: ${themeGet('space.1')}; */
`;