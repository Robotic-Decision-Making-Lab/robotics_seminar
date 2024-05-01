import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';

import theme from './theme/index';
import Home from './views/Home';
import Archive from './views/Archive';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
