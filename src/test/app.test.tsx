import { shallow } from 'enzyme';
import { App } from '../App';
import { WrapperType } from '../types';

describe('app', () => {
  const getWrapper = (): WrapperType => shallow(<App />);

  it('should rendering correct ', () => {
    const wrapper: WrapperType = getWrapper();

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
