import { shallow, mount, render } from 'test-utils/renderHelpers';
import { fireEvent } from '@testing-library/react';
import Form from './index';

describe('Form component', () => {
  const TEST_ID_FORM = 'form';
  const defaultProps = {
    onSubmit: jest.fn(),
  };
  const renderComponent = (props) =>
    render(Form, { props: { ...defaultProps, ...props }, children: 'hello' });

  it('should render correctly', () => {
    const tree = shallow(renderComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call onSubmit 1 time when submit occurs', () => {
    const { getByTestId } = mount(renderComponent());

    fireEvent.submit(getByTestId(TEST_ID_FORM));

    expect(defaultProps.onSubmit).toBeCalledTimes(1);
  });
});
