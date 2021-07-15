import { shallow } from 'enzyme';
import { WrapperType } from 'src/types';
import { PropsType } from '../types';
import { VideoList } from '../VideoList';

describe('videoList', () => {
  const defaultProps = { files: ['one', 'two'] };

  const getWrapper = (props: PropsType = defaultProps): WrapperType => shallow(
    <VideoList {...props} />,
  );

  it('should render correct with default properties', () => {
    const wrapper = getWrapper(defaultProps);

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
