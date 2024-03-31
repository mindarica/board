import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Navigation } from './containers/Navigation/Navigation';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
