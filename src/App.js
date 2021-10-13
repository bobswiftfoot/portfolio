import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App()
{
  const [currentPage, handlePageChange] = useState('About');

  useEffect(() =>
  {
      document.title = currentPage;
  }, [currentPage]);

  function renderPage()
  {
    switch(currentPage)
    {
      case "About":
        return(<>
              <About></About> 
              <Projects></Projects>
              </>);
      case "Resume":
        return(<Resume></Resume>);
      default:
        return (<>
              <About></About>
              <Projects></Projects>
              </>);
    }
  };


  return (
    <div>
      <Header
        currentPage={currentPage} 
        handlePageChange={handlePageChange} >
      </Header>
      <div>
        {renderPage()}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
