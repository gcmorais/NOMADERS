/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { PrismaneProvider } from "@prismane/core";
import { BrowserRouter } from "react-router-dom";

import Rotas from "./routes";

import { ColorContextProvider } from "./contexts/ThemeMaterial";
import ThemeProvider from "./contexts/ThemeContext";
import ApiProvider from "./contexts/ApiContext";
import { AuthProvider } from "./contexts/AuthContext";
import FindProvider from "./components/table/findSearch";

function App() {
  return (
    <ThemeProvider>
      <ColorContextProvider>
        <PrismaneProvider>
          <BrowserRouter>
            <AuthProvider>
              <ApiProvider>
                <FindProvider>
                  <Rotas />
                </FindProvider>
              </ApiProvider>
            </AuthProvider>
          </BrowserRouter>
        </PrismaneProvider>
      </ColorContextProvider>
    </ThemeProvider>
  );
}

export default App;
