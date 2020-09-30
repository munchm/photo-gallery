import React from 'react';
import { shallow } from 'enzyme';

import App from '../client/src/components/App.jsx';
import Detail from '../client/src/components/detail/Detail.jsx';

describe('<App />', () => {
  it('Component should render a 1 child component.', () => {
    // const wrapper = shallow(<App />);
    expect(shallow(<App />).contains(<Detail />)).toBe(true);
  });
  // it('should', () => {
  //   expect("hey").toBe("hy");
  // })
});
