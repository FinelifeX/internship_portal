/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TR from 'react-test-renderer';
import { render } from '@testing-library/react';

export const renderComponent = (
  Component,
  { defaultProps, props, children },
) => (
  <Component {...defaultProps} {...props}>
    {children}
  </Component>
);

/**
 * Shallow render component using "react-test-renderer"
 * @param Component
 * @param defaultProps
 * @param props
 * @param children
 */
export const shallowRender = (Component, { defaultProps, props, children }) =>
  TR.create(renderComponent(Component, { defaultProps, props, children }));

/**
 * Render component using "render()" from "@testing-library/react"
 * @param Component
 * @param defaultProps
 * @param props
 * @param children
 */
export const domRender = (Component, { defaultProps, props, children }) =>
  render(renderComponent(Component, { defaultProps, props, children }));
