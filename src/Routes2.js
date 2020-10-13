import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Form from './components/Form';

import Login2 from './pages2/Login2';
import Signup2 from './pages2/Signup2';
//import Fillings2 from './pages/Fillings2';
//<Scene key="fillings2" component={Fillings2} title="fillings"/>

export default class Routes extends Component {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login2" component={Login2} title="Login" initial={true}/>
			      <Scene key="signup2" component={Signup2} title="Register"/>
                  
			    </Stack>
			 </Router>
			)
	}
}