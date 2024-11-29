import './App.css';
import AppHeader from './Components/Header'
import PageContent from './Components/PageContent'
import PageFooter from './Components/Footer'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
     
     <BrowserRouter>
     <AppHeader/>
     <PageContent/>
     <PageFooter/>
     </BrowserRouter>
      

    </div>
  );
}

export default App;
