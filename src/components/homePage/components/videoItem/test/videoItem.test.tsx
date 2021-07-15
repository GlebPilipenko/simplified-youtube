import { shallow } from 'enzyme';
import { WrapperType } from 'src/types';
import { VideoItem } from '../VideoItem';

describe('videoItem', () => {
  const defaultProps = { url: '' };

  const getWrapper = (): WrapperType => shallow(
    <VideoItem {...defaultProps} />,
  );

  it('should render correct with default props', () => {
    const wrapper = getWrapper();

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
