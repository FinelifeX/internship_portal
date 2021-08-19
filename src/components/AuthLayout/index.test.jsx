import { shallow, render } from 'test-utils/renderHelpers';
import AuthLayout from './index';

describe('AuthLayout component', () => {
  const children = 'Hello, world!';

  it('should render correctly', () => {
    const tree = shallow(render(AuthLayout, { children })).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
