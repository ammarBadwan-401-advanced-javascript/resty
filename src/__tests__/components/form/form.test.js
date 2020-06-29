import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import Main from '../../../components/form/form';

describe('Form test',()=>{
  it('Buttons exist in the page',()=>{
    let app = shallow(<Main/>);
    expect(app.find('button').exists()).toBeTruthy();
  });

  it('Method changes on button press',()=>{
    let app = mount(<Main/>);
    let button = app.find('button').at(1);
    button.simulate('click');
    console.log(button)
    expect(app.state('method')).toBe('GET');
  });
});
