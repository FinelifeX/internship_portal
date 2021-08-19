import React from 'react';
import TR from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import InputField from './index';

describe('InputField component', () => {
  const TEST_ID = 'input';
  const defaultProps = {
    onChange: jest.fn(),
    onFocus: jest.fn(),
    onBlur: jest.fn(),
  };
  const renderComponent = (props) => (
    <InputField {...defaultProps} {...props} />
  );
  const renderElement = (props) => {
    const { getByTestId } = render(renderComponent(props));

    return getByTestId(TEST_ID);
  };

  it('should render correctly', () => {
    const tree = TR.create(renderComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should have value that was passed via props', () => {
    const value = '123';
    const elem = renderElement({ value });

    expect(elem).toHaveValue(value);
  });

  it('should call onFocus when focused', () => {
    const elem = renderElement();

    fireEvent.focus(elem);

    expect(defaultProps.onFocus).toBeCalledTimes(1);
  });

  it('should call onBlur when unfocused', () => {
    const elem = renderElement();

    fireEvent.blur(elem);

    expect(defaultProps.onBlur).toBeCalledTimes(1);
  });

  it('should call onChange with provided value when change occurs', () => {
    const elem = renderElement();

    fireEvent.change(elem, { target: { value: '123' } });

    expect(defaultProps.onChange).toBeCalledTimes(1);
  });
});
