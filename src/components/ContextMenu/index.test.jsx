import { shallow, mount, render } from 'test-utils/renderHelpers';
import { fireEvent } from '@testing-library/react';
import ContextMenu from './index';

describe('ContextMenu component', () => {
  const TEST_ID_OPTION = 'option';
  const TEST_ID_OPTION_BUTTON = 'optionButton';
  const TEST_ID_CONTAINER = 'container';

  const createOption = (index) => ({
    key: `key${index}`,
    title: `Option ${index}`,
    action: jest.fn(),
  });
  const options = new Array(4).fill(0).map((item, idx) => createOption(idx));

  const defaultProps = {
    options,
    visible: true,
    onClose: jest.fn(),
  };

  const renderComponent = (props) =>
    render(ContextMenu, { props: { ...defaultProps, ...props } });

  it('should render correctly', () => {
    const tree = shallow(renderComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should not be rendered if visible=false', () => {
    const { queryByTestId } = mount(renderComponent({ visible: false }));

    expect(queryByTestId(TEST_ID_CONTAINER)).toBeNull();
  });

  it('should render all option elements', () => {
    const { getAllByTestId } = mount(renderComponent());

    expect(getAllByTestId(TEST_ID_OPTION)).toHaveLength(
      defaultProps.options.length,
    );
  });

  test('each option should call it\'s "action" callback when clicked', () => {
    const { getAllByTestId } = mount(renderComponent());

    getAllByTestId(TEST_ID_OPTION_BUTTON).forEach((item, idx) => {
      fireEvent.click(item);

      expect(defaultProps.options[idx].action).toBeCalledTimes(1);
    });
  });
});
