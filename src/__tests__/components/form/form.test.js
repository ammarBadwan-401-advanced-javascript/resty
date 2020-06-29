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
    expect(app.state('method')).toBe('GET');
  });

  it('state url and method both can change',()=>{
    let app = mount(<Main/>);
    
    let button = app.find('button').at(2);
    button.simulate('click');
    
    let input = app.find('input');
    input.simulate('change',{target:{value:'http://someapi.com/'}});
    
    expect(app.state('method')).toBe('POST');
    expect(app.state('url')).toBe('http://someapi.com/');
  });

  it('renders correctly', ()=> {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
