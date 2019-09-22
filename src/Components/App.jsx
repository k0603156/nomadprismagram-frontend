import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQuery } from "react-apollo-hooks";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import AppRouter from "./Router";
import Footer from "./Footer";
import { QUERY } from "./AppQuery";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <GlobalStyles />
        <div>{"ss:" + isLoggedIn}</div>
        <AppRouter isLoggedIn={isLoggedIn} />
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};