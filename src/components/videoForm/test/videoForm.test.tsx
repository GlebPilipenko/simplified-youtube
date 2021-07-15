import { shallow } from 'enzyme';
import { WrapperType } from 'src/types';
import * as hook from 'src/hooks';
import { StatusCodes } from 'src/enum';
import { VideoForm } from '../VideoForm';

jest.mock('src/hooks/useUploadFileForm');
const mockedHook = hook as jest.Mocked<typeof hook>;

describe('videoForm', () => {
  const getWrapper = (): WrapperType => shallow(<VideoForm />);

  it('should rendering correct ', () => {
    mockedHook.useUploadFileForm.mockImplementation(() => ({
      data: { message: '', status: StatusCodes.Ok },
      isDisabled: false,
      errorMessage: '',
      handler: () => {},
      sendVideoFile: () => {},
    }));

    const wrapper = getWrapper();

    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should correct render with errorMessage length more than 0', () => {
    mockedHook.useUploadFileForm.mockImplementation(() => ({
      data: { message: '', status: StatusCodes.NotFound },
      isDisabled: false,
      errorMessage: 'Error',
      handler: () => {},
      sendVideoFile: () => {},
    }));

    const wrapper = getWrapper();

    expect(wrapper.debug()).toMatchSnapshot();
  });
});
