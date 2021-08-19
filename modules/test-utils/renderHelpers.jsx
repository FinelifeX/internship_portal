/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TR from 'react-test-renderer';
import { render as RTLRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

/**
 * Render React component
 * @param Component
 * @param defaultProps
 * @param props
 * @param children
 * @returns {JSX.Element}
 */
export const render = (Component, { defaultProps, props, children } = {}) => (
  <Component {...defaultProps} {...props}>
    {children}
  </Component>
);

/**
 * Render React component inside MemoryRouter
 * @param Component
 * @param defaultProps
 * @param props
 * @param children
 * @param routerOptions
 * @returns {JSX.Element}
 */
export const renderWithRouter = (
  Component,
  { defaultProps, props, children } = {},
  routerOptions = {},
) => (
  <MemoryRouter {...routerOptions}>
    <Component {...defaultProps} {...props}>
      {children}
    </Component>
  </MemoryRouter>
);

/**
 * Shallow render component using "react-test-renderer"
 */
export const shallow = TR.create;

/**
 * Render component using "render()" from "@testing-library/react"
 * @type {import('@testing-library/react').render}
 */
export const mount = RTLRender;
