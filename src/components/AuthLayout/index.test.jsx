import { shallowRender } from 'test-utils/renderHelpers';
import AuthLayout from './index';

describe('AuthLayout component', () => {
  const children = 'Hello, world!';

  it('should render correctly', () => {
    const tree = shallowRender(AuthLayout, { children });

    expect(tree).toMatchSnapshot();
  });
});
