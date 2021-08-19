import { fireEvent } from '@testing-library/react';
import { domRender, shallowRender } from 'test-utils/renderHelpers';
import Checkbox from './index';

describe('Checkbox component', () => {
  const TEST_ID_INPUT = 'checkbox';
  const TEST_ID_LABEL = 'label';
  const TEST_ID_TEXT = 'text';

  const defaultProps = {
    label: 'checkbox',
    checked: true,
    onChange: jest.fn(),
  };

  it('should render correctly', () => {
    const elem = shallowRender(Checkbox, {
      defaultProps,
    }).toJSON();

    expect(elem).toMatchSnapshot();
  });

  const renderComponent = (props) =>
    domRender(Checkbox, { defaultProps, props });

  it('should have correct label', () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId(TEST_ID_TEXT)).toHaveTextContent(defaultProps.label);
  });

  it('should be checked if checked prop === true', () => {
    const props = {
      checked: true,
    };
    const { getByTestId } = renderComponent(props);

    expect(getByTestId(TEST_ID_INPUT)).toBeChecked();
  });

  it('should call onChange 1 time when checkbox is clicked', () => {
    const { getByTestId } = renderComponent();
    const input = getByTestId(TEST_ID_INPUT);

    fireEvent.click(input);

    expect(defaultProps.onChange).toBeCalledTimes(1);
  });

  it("should call onChange when checkbox's label was clicked", () => {
    const { getByTestId } = renderComponent();
    const label = getByTestId(TEST_ID_LABEL);

    fireEvent.click(label);

    expect(defaultProps.onChange).toBeCalled();
  });

  it('should be checked after being clicked', () => {
    const { getByTestId } = renderComponent();
    const elem = getByTestId(TEST_ID_INPUT);

    fireEvent.click(elem);

    expect(elem).toBeChecked();
  });
});
