import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import Header from '../../../components/header/header';

describe('Form test',()=>{
  it('Buttons exist in the page',()=>{
    let app = shallow(<Header/>);
    expect(app.find('header').exists()).toBeTruthy();
  });

  it('renders correctly', ()=> {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
