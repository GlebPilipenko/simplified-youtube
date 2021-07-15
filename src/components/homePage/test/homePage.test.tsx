import { shallow } from 'enzyme';
import { WrapperType } from 'src/types';
import * as hook from 'src/hooks';
import { StatusCodes } from 'src/enum';
import { HomePage } from '../HomePage';
import { NO_VIDEO_IN_SERVER } from '../constants';

jest.mock('src/hooks/useGetPathsForVideo');
const mockedHook = hook as jest.Mocked<typeof hook>;

describe('homePage', () => {
  const getWrapper = (): WrapperType => shallow(<HomePage />);

  it('should render correct with errorMessage length more than 0', () => {
    mockedHook.useGetPathsForVideo.mockImplementation(() => ({
      data: {
        files: [],
        message: '',
        status: StatusCodes.Processing,
      },
      errorMessage: 'Error',
    }));

    const wrapper = getWrapper();

    expect(wrapper.debug()).toMatchSnapshot();
  });

  it(
    'should render correct with empty array and StatusCodes.Processing', () => {
      mockedHook.useGetPathsForVideo.mockImplementation(() => ({
        data: {
          files: [],
          message: '',
          status: StatusCodes.Processing,
        },
        errorMessage: '',
      }));

      const wrapper = getWrapper();

      expect(wrapper.debug()).toMatchSnapshot();
    },
  );

  it('should render correct with NO_VIDEO_IN_SERVER and StatusCodes.NotFound',
    () => {
      mockedHook.useGetPathsForVideo.mockImplementation(() => ({
        data: {
          files: [],
          message: NO_VIDEO_IN_SERVER,
          status: StatusCodes.NotFound,
        },
        errorMessage: '',
      }));

      const wrapper = getWrapper();

      expect(wrapper.debug()).toMatchSnapshot();
    });

  it('should rendering correct',
    () => {
      mockedHook.useGetPathsForVideo.mockImplementation(() => ({
        data: {
          files: ['Video1', 'Video2'],
          message: '',
          status: StatusCodes.Ok,
        },
        errorMessage: '',
      }));

      const wrapper = getWrapper();

      expect(wrapper.debug()).toMatchSnapshot();
    });
});
