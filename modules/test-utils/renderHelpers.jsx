/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TR from 'react-test-renderer';
import { render as RTLRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

/**
 * @typedef {Object.<string, any>} Props
 */

/**
 * @typedef {React.ReactNode} Children
 */

/**
 * @typedef {{props?: Props, children?: Children}} RenderOptions
 */

/**
 *
 * @param {React.ComponentType} Component
 * @param {RenderOptions} [options]
 * @returns {JSX.Element}
 */
export const render = (Component, options = {}) => {
  const { props, children } = options;
  return <Component {...props}>{children}</Component>;
};

/**
 * Render React component inside MemoryRouter
 * @param {React.ComponentType} Component
 * @param {RenderOptions} [options]
 * @param {import('react-router-dom').MemoryRouterProps} routerOptions
 * @returns {JSX.Element}
 */
export const renderWithRouter = (
  Component,
  options = {},
  routerOptions = {},
) => {
  const { props, children } = options;

  return (
    <MemoryRouter {...routerOptions}>
      <Component {...props}>{children}</Component>
    </MemoryRouter>
  );
};

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
