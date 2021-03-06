import React from 'react';
import { shallow } from 'enzyme';

import DestinationDisplay from '../../components/pages/requests/DestinationDisplay';
import requestsMocks from '../mocks/requestsMocks';

const props = {
  destination: requestsMocks.destination,
};

const wrapper = shallow(<DestinationDisplay {...props} />);

describe('DestinationDisplay Test Suite', () => {
  it('Should Render DestinationDisplay Component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Should Return DayPickerInput from react-bootstrap ', () => {
    expect(wrapper.find('[data-test="destination-display"]')).toHaveLength(1);
  });
});
