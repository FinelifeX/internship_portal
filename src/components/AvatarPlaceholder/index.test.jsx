import { shallow, mount, render } from 'test-utils/renderHelpers';
import AvatarPlaceholder from './index';

describe('AvatarPlaceholder component', () => {
  const TEST_ID_TEXT = 'text';

  const defaultProps = {
    fullName: 'Adam Jensen',
  };
  const renderComponent = (props) =>
    render(AvatarPlaceholder, { defaultProps, props });

  it('should render correctly', () => {
    const tree = shallow(renderComponent()).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should not contain letters', () => {
    const { getByTestId } = mount(renderComponent({ fullName: null }));

    expect(getByTestId(TEST_ID_TEXT)).toBeEmptyDOMElement();
  });

  it.each([
    { fullName: 'Ross Geller', expected: 'RG' },
    { fullName: 'Monica Geller', expected: 'MG' },
    { fullName: 'Phoebe Buffay', expected: 'PB' },
  ])(
    'should render transformed name correctly for $fullName - $expected',
    ({ fullName, expected }) => {
      const { getByTestId } = mount(renderComponent({ fullName }));

      expect(getByTestId(TEST_ID_TEXT)).toHaveTextContent(expected);
    },
  );
});
