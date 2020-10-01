import React from 'react';
import { shallow } from 'enzyme';

import App from '../client/src/components/App.jsx';
import Body from '../client/src/components//Body.jsx';

describe('<App />', () => {
  it('Component should render a 1 child component.', () => {
    // const wrapper = shallow(<App />);
    expect(shallow(<App />).contains(<Body />)).toBe(true);
  });
  // it('should', () => {
  //   expect("hey").toBe("hy");
  // })
});
