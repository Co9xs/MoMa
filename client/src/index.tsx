import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { AppPageContainer } from '@containers/AppPageContainer';

ReactDOM.render(
  <BrowserRouter>
    <AppPageContainer />
  </BrowserRouter>,
  document.getElementById('app')
);
