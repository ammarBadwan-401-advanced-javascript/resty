import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import Footer from '../../../components/footer/footer';

describe('Form test',()=>{
  it('Footer exists',()=>{
    let app = shallow(<Footer/>);
    expect(app.find('footer').exists()).toBeTruthy();
  });

  it('renders footer correctly', ()=> {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
