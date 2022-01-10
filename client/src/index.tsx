import ReactDOM from 'react-dom';

import { Container } from '@containers/Container';

import { App } from '@components/App';

ReactDOM.render(
  <Container>
    <App text='app' />
  </Container>,
  document.getElementById('app')
);
