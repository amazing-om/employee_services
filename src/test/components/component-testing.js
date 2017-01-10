
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

//local modules
import EmployeeForm from '../../src/components/employee-form';
import EmployeeTable from '../../src/components/employee-table'

//const {renderIntoDocument,scryRenderedDOMComponentsWithTag} = TestUtils;

let dummyData = {}

describe('<EmployeeForm/>', () =>{

    it('renders form item', () =>{

        const wrapper = shallow( <EmployeeForm/> );

        expect(wrapper.find("label")).to.have.length(3);
        expect(wrapper.find("input")).to.have.length(3);
        expect(wrapper.find("button")).to.have.length(1);



    });
    it('Should handle onClick', () => {

        const handleButtonClick = sinon.spy();
        const wrapper = shallow(<button onClick={this.onFormSubmit} >Submit</button>);

        wrapper.simulate('click', {preventDefault: () => {}});
        expect(handleButtonClick.calledOnce).to.equal(true);
    });

});

describe('<EmployeeTable/>', () =>{
    it('renders Smart Table', () =>{

        const wrapper = shallow( <EmployeeTable/> );
        expect(wrapper.find("SmartTable").length).to.equal(1);

    });

    it('render table for dummy data',() =>{

        const table = shallow(<SmartTable/>);
        expect(wrapper.find("Griddle").length).to.equal(1);
        assert.equal(SmartTable.prop(dummyData), true);
    });

});


