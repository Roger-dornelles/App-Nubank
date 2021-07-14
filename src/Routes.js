import { Switch,Route } from 'react-router-dom';

// components
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

const Routes = ()=>{
    return (

        <Switch>
            <Route exact path="/">
                <Main />
            </Route>
           
            <Route exact path="/Home">
                <Home />
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

            <Route exact path="/Signin">
                <Signin />
            </Route>

            <Route exact path="/SigninConfirm">
                <SigninConfirm />
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
        </Switch>
    )
}

export default Routes;