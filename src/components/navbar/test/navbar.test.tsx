import { shallow } from 'enzyme';
import { WrapperType } from 'src/types';
import { NavBar } from '../NavBar';

describe('navbar', () => {
  const getWrapper = (): WrapperType => shallow(<NavBar />);

  it('should rendering correct ', () => {
    const wrapper = getWrapper();

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
