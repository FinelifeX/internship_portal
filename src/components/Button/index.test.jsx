import React from 'react';
import TR from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';

describe('Button component', () => {
  const TEST_ID = 'button';
  const defaultProps = {
    variant: 'primary',
    type: 'button',
    onClick: jest.fn(),
  };
  const renderComponent = (props) => (
    <Button {...defaultProps} {...props}>
      Button
    </Button>
  );

  it('should render correctly', () => {
    const tree = TR.create(renderComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call onClick 1 time when clicked', () => {
    const { getByTestId } = render(renderComponent());

    fireEvent.click(getByTestId(TEST_ID));

    expect(defaultProps.onClick).toBeCalledTimes(1);
  });
});
