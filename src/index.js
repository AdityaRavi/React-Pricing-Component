import React from 'react';
import ReactDOM from 'react-dom';
import { PricingComponent, Wrapper } from './components'
import { data } from './mockedData'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCarSide, faRunning, faTimes, faCaretRight, faCaretDown, faCheck, faRocket, faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'

library.add(faCarSide, faRunning, faTimes, faCaretRight, faCaretDown, faCheck, faClock, faRocket, faGamepad)

ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      <PricingComponent data={data} />
    </Wrapper>
  </React.StrictMode>,
  document.getElementById('root')
);