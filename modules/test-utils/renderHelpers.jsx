/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TR from 'react-test-renderer';
import { render as RTLRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

/**
 *
 * @param Component
 * @param props
 * @param children
 * @returns {JSX.Element}
 */
export const render = (Component, { props, children } = {}) => (
  <Component {...props}>{children}</Component>
);

/**
 * Render React component inside MemoryRouter
 * @param Component
 * @param props
 * @param children
 * @param routerOptions
 * @returns {JSX.Element}
 */
export const renderWithRouter = (
  Component,
  { props, children } = {},
  routerOptions = {},
) => (
  <MemoryRouter {...routerOptions}>
    <Component {...props}>{children}</Component>
  </MemoryRouter>
);

/**
 * Shallow render component using "react-test-renderer"
 * @type {import('react-test-renderer').create}
 */
export const shallow = TR.create;

/**
 * Render component using "render()" from "@testing-library/react"
 * @type {import('@testing-library/react').render}
 */
export const mount = RTLRender;
