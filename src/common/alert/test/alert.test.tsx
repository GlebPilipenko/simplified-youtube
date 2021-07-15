import { shallow } from 'enzyme';
import { WrapperType } from 'src/types';
import { Alert } from '../Alert';

describe('alert', () => {
  const defaultProps = { message: '', typeOfAlert: '' };

  const getWrapper = (): WrapperType => shallow(<Alert {...defaultProps} />);

  it('should render correct with default props', () => {
    const wrapper = getWrapper();

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
