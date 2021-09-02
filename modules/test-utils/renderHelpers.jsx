/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TR from 'react-test-renderer';
import { render as RTLRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

export const render = (Component, options = {}) => {
  const { props, children } = options;
  return <Component {...props}>{children}</Component>;
};

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

export const shallow = TR.create;

export const mount = RTLRender;
