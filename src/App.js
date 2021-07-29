import { BrowserRouter } from "react-router-dom";

import './App.css';
// components
import {Container} from '../src/components/ComponentsPartials';


import Routes from './Routes';


const App = ()=>{
  return (
    <BrowserRouter>
    <Container>
      <Routes />
    </Container>
    </BrowserRouter>
  );
}

export default App;
 