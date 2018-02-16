import { TabNavigator, StackNavigator } from 'react-navigation';

import * as Screens from './main-app';

const mainNavigatorOptions = {
    headerMode: 'none',
    cardStyle: {
        backgroundColor: '#FAFAFA'
    },
};

const MainNavigator = StackNavigator({



    init: { screen: Screens.InitScreen },
    welcome: { screen: Screens.WelcomeScreen },
    login: { screen: Screens.LoginScreen },

    firstEmailRegistration: { screen: Screens.FirstEmailRegistrationScreen },
    secondEmailRegistration: { screen: Screens.SecondEmailRegistrationScreen },
    phoneVerification: { screen: Screens.PhoneVerificationScreen },

    emailLogin: { screen: Screens.EmailLoginScreen },

    interestsSelections: { screen: Screens.InterestsSelectionScreen },

    home: { screen: Screens.HomeScreen },



}, mainNavigatorOptions);

export default MainNavigator;
