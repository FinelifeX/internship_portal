import { shallow, renderWithRouter, mount } from 'test-utils/renderHelpers';
import BackToLogin from './index';

describe('BackToLogin component', () => {
  const TEST_ID_LINK = 'login';

  it('should render correctly', () => {
    const tree = shallow(renderWithRouter(BackToLogin)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should have link to Login page', () => {
    const { getByTestId } = mount(renderWithRouter(BackToLogin));

    expect(getByTestId(TEST_ID_LINK)).toBeInTheDocument();
  });
});
