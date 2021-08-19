import { fireEvent } from '@testing-library/react';
import { domRender, shallowRender } from 'test-utils/renderHelpers';
import Checkbox from './index';

describe('Checkbox component', () => {
  const TEST_ID_INPUT = 'checkbox';
  const TEST_ID_LABEL = 'label';
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

  it('should have correct label', () => {
    const { getByTestId } = domRender(Checkbox, { defaultProps });

    expect(getByTestId(TEST_ID_LABEL)).toHaveTextContent(defaultProps.label);
  });

  it('should be checked if checked prop === true', () => {
    const props = {
      checked: true,
    };
    const { getByTestId } = domRender(Checkbox, { defaultProps, props });

    expect(getByTestId(TEST_ID_INPUT)).toBeChecked();
  });

  it('should call onChange 1 time when checkbox is clicked', () => {
    const { getByTestId } = domRender(Checkbox, { defaultProps });
    const input = getByTestId(TEST_ID_INPUT);

    fireEvent.click(input);

    expect(defaultProps.onChange).toBeCalledTimes(1);
  });

  it("should call onChange 1 time when checkbox's label was clicked", () => {
    const { getByTestId } = domRender(Checkbox, { defaultProps });
    const label = getByTestId(TEST_ID_LABEL);

    fireEvent.click(label);

    expect(defaultProps.onChange).toBeCalled();
  });
});
