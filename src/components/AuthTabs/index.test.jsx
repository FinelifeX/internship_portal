import { shallow, mount, renderWithRouter } from 'test-utils/renderHelpers';
import AuthTabs from './index';

describe('AuthTabs component', () => {
  const TEST_ID_LOGIN = 'login';
  const TEST_ID_SIGNUP = 'signup';

  it('should render correctly', () => {
    const tree = shallow(renderWithRouter(AuthTabs)).toJSON();

    expect(tree).toMatchSnapshot();
  });

  const renderComponent = () => mount(renderWithRouter(AuthTabs));

  it('should have links to login and sign-up pages', () => {
    const { getByTestId } = renderComponent();
    const loginLink = getByTestId(TEST_ID_LOGIN);
    const signUpLink = getByTestId(TEST_ID_SIGNUP);

    expect(loginLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
  });
});
