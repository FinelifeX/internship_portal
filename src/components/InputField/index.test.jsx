import { fireEvent } from '@testing-library/react';
import { shallow, mount, render } from 'test-utils/renderHelpers';
import InputField from './index';

describe('InputField component', () => {
  const TEST_ID = 'input';
  const defaultProps = {
    onChange: jest.fn(),
    onFocus: jest.fn(),
    onBlur: jest.fn(),
  };

  it('should render correctly', () => {
    const tree = shallow(render(InputField, { defaultProps })).toJSON();

    expect(tree).toMatchSnapshot();
  });

  const renderComponent = (props) =>
    mount(render(InputField, { defaultProps, props }));

  it('should have value that was passed via props', () => {
    const props = { value: '123' };
    const { getByTestId } = renderComponent(props);

    expect(getByTestId(TEST_ID)).toHaveValue(props.value);
  });

  it('should call onFocus when focused', () => {
    const { getByTestId } = renderComponent();

    fireEvent.focus(getByTestId(TEST_ID));

    expect(defaultProps.onFocus).toBeCalledTimes(1);
  });

  it('should call onBlur when unfocused', () => {
    const { getByTestId } = renderComponent();

    fireEvent.blur(getByTestId(TEST_ID));

    expect(defaultProps.onBlur).toBeCalledTimes(1);
  });

  it('should call onChange with provided value when change occurs', () => {
    const { getByTestId } = renderComponent();

    fireEvent.change(getByTestId(TEST_ID), { target: { value: '123' } });

    expect(defaultProps.onChange).toBeCalledTimes(1);
  });
});
