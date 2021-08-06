import { Switch,Route } from 'react-router-dom';

// Pages
import Home from './pages/Home'
import Main from './pages/Main';
import CreateAccount from './pages/CreateAccount';
import CreateEmail from './pages/CreateEmail';
import CreatePassword from './pages/CreatePassword';
import Signin from './pages/Signin';
import SigninConfirm from './pages/SigninConfirm';
import Pix from './pages/Pix';
import Pay from './pages/Pay';
import Transfer from './pages/Transfer';
import Deposit from './pages/Deposit';
import Recharger from './pages/Recharger';
import RechargerConfirm from './pages/RechargerConfirm';
import Demand from './pages/Demand';
import Donation from './pages/Donation';
import DonationInstitute from './pages/DonationInstitute';
import DonationValue from './pages/DonationValue';
import CreateName from './pages/CreateName';
import UserInfo from './pages/UserInfo';
import PageError from './pages/PageError';

// helpers
import {isLogged} from './helpers/AuthHandler';

const Routes = ()=>{
    let logged = isLogged();
    return (

        <Switch>
            
                
            <Route exact path="/">
                <Main />
            </Route>

            <Route exact path="/CreateAccount">
                <CreateAccount />
            </Route>

            <Route exact path="/CreateEmail">
                <CreateEmail />
            </Route>

            <Route exact path="/CreatePassword">
                <CreatePassword />
            </Route>

            <Route exact path="/CreateName">
                <CreateName />
            </Route>

            <Route exact path="/Signin">
                <Signin />
            </Route>

            <Route exact path="/SigninConfirm">
                <SigninConfirm />
            </Route>
        
            
           {logged && 
            <>
                <Route exact path="/Home">
                    <Home />
                </Route>
            
                <Route exact path="/Pix">
                    <Pix />
                </Route>

                <Route exact path="/Pay">
                    <Pay />
                </Route>

                <Route exact path="/Transfer">
                    <Transfer />
                </Route>

                <Route exact path="/Deposit">
                    <Deposit />
                </Route>

                <Route exact path="/Recharger">
                    <Recharger />
                </Route>
                <Route exact path="/RechargerConfirm">
                    <RechargerConfirm />
                </Route>
                <Route exact path="/Demand">
                    <Demand />
                </Route>
                <Route exact path="/Donation">
                    <Donation />
                </Route>
                <Route exact path="/DonationInstitute">
                    <DonationInstitute />
                </Route>
                <Route exact path="/DonationValue">
                    <DonationValue />
                </Route>
  
                <Route exact path="/UserInfo">
                    <UserInfo />
                </Route>

                
            </>
           }
            <Route>
               <PageError />
           </Route>


        </Switch>
    )
}

export default Routes;