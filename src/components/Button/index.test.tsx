import { fireEvent } from '@testing-library/react';
import { shallow, mount, render } from 'test-utils/renderHelpers';
import Button, { ButtonProps } from '.';

describe('Button component', () => {
  const TEST_ID = 'button';
  const defaultProps: Partial<ButtonProps> = {
    variant: 'primary',
    type: 'button',
    onClick: jest.fn(),
  };
  const children = 'button';

  it('should render correctly', () => {
    const tree = shallow(
      render(Button, { props: defaultProps, children }),
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call onClick 1 time when clicked', () => {
    const { getByTestId } = mount(
      render(Button, { props: defaultProps, children }),
    );

    fireEvent.click(getByTestId(TEST_ID));

    expect(defaultProps.onClick).toBeCalledTimes(1);
  });
});
