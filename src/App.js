import { BrowserRouter } from "react-router-dom";

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
