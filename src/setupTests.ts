import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { server } from './mocks/msw/server.js';

Enzyme.configure({ adapter: new EnzymeAdapter() });

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
