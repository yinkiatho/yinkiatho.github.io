import { ProjectView, PaperResumeView, AboutView, HeroView, FooterView, HeaderView, ResumeView } from "./views.jsx";
import Container from 'react-bootstrap/Container';
import React from 'react';
import './App.scss';

const App = () => {

  return (
    <Container>
      <HeaderView />
      <HeroView />
      <AboutView />
      <ResumeView />
      <ProjectView />
      <FooterView />
    </Container>
  )
};

export default App;
