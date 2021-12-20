// import Enzyme, { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import { generateBasicAuth, parseUrlString } from './utils';

// Enzyme.configure({ adapter: new Adapter() });

describe('utils', () => {
  describe('generateBasicAuth function', () => {
    it('should return correct Basic auth string', () => {
      const auth = generateBasicAuth({ username: 'admin', password: 'secret' });
      expect(auth).toBe('Basic YWRtaW46c2VjcmV0');
    });
  });

  describe('parseUrlString function', () => {
    it('should return correct object form urlString', () => {
      const auth = parseUrlString(
        'apiserver:https://be-app-hiring-bixinf-test.apps.bi-x-ire.tftp.p1.openshiftapps.com/;user:admin;password:secret',
      );
      expect(auth).toEqual({
        password: 'secret',
        url: 'https://be-app-hiring-bixinf-test.apps.bi-x-ire.tftp.p1.openshiftapps.com/',
        username: 'admin',
      });
    });
  });
});
