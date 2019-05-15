import * as React from 'react';
import { BaseIconProps } from './types';

interface ArrowDownIconProps extends BaseIconProps {
  size?: '25' | '15';
  type?: 'outline';
}

export const ArrowDownIcon = ({
  color = 'currentColor',
  size = '25',
  type = 'outline',
  ...props
}: ArrowDownIconProps) => {
  if (type === 'outline' && size === '25') {
    return (
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M18.5 14.5l-6 6-6-6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12.5 4.5v16" stroke={color} strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'outline' && size === '15') {
    return (
      <svg
        width="15"
        height="15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M11.5 8.5l-4 4-4-4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M7.5 2.5v10" stroke={color} strokeLinecap="round" />
      </svg>
    );
  }

  console.error(
    `ArrowDownIcon doesn't support the combination of ${size} and ${type}`
  );
  return null;
};

export default ArrowDownIcon;
