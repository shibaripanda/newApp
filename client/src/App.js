import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { createTheme, MantineProvider } from '@mantine/core'
import { ContextMenuProvider } from 'mantine-contextmenu';

import MainPage from './pages/MainPage';
import AuthPage from './pages/AuthPage';

import '@mantine/core/styles.css';

import '@mantine/core/styles.layer.css';
import 'mantine-contextmenu/styles.layer.css';
import './layout.css';

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
      <MantineProvider theme={theme}>
        <ContextMenuProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/auth" element={<AuthPage/>} />
              {/* <Route path="*" element={<Page404/>} /> */}
            </Routes>
          </BrowserRouter>
        </ContextMenuProvider>
      </MantineProvider>
  );
}

export default App;
