/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TR from 'react-test-renderer';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

/**
 * Render React component
 * @param Component
 * @param defaultProps
 * @param props
 * @param children
 * @returns {JSX.Element}
 */
const renderComponent = (Component, { defaultProps, props, children }) => (
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
const renderComponentWithRouter = (
  Component,
  { defaultProps, props, children },
  routerOptions,
) => (
  <MemoryRouter {...routerOptions}>
    <Component {...defaultProps} {...props}>
      {children}
    </Component>
  </MemoryRouter>
);

/**
 * Component renderer functions
 * @type {{renderComponent: (function(*, {defaultProps: *, props: *, children: *})), renderComponentWithRouter: (function(*, {defaultProps: *, props: *, children: *}, *))}}
 */
export const ComponentRenderers = {
  renderComponent,
  renderComponentWithRouter,
};

/**
 * Shallow render component using "react-test-renderer"
 * @param Component
 * @param defaultProps
 * @param props
 * @param children
 */
export const shallowRender = (
  Component,
  { defaultProps, props, children } = {},
) => TR.create(renderComponent(Component, { defaultProps, props, children }));

/**
 * Render component using "render()" from "@testing-library/react"
 * @param Component
 * @param defaultProps
 * @param props
 * @param children
 */
export const domRender = (Component, { defaultProps, props, children } = {}) =>
  render(renderComponent(Component, { defaultProps, props, children }));
