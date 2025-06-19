//React
import React from 'react';

//Hooks
import useApp from '../../../hooks/useApp';

//Onsen UI
import * as Ons from 'react-onsenui';

//Views
import Dialog from '../../Dialog';
import Initialize from '../../../views/Initialize';

//Components
import Loading from '../../Loading';

//Shared
import {
    actionTypes,
    animationTypes
} from '../../../shared/const';


/**
 * Navigator 
 * 
 * @returns
 */
function Navigator() {
    //Context
    const { appState, setAppState } = useApp();


    /**
     * initialRoute
     * 
     */
    const initialRoute = { component: Initialize };


    /**
     * renderPage
     * 
     * @see https://onsen.io/v2/api/react/Navigator.html
     * @param {*} route 
     * @param {*} navigator 
     * @returns 
     */
    const renderPage = (route: any, navigator: any) => {
        const props = route.props || {};
        props.navigator = navigator;

        if (appState.navigator === undefined) {
            setAppState(actionTypes.app.SET_NAVIGATOR, navigator);
        }

        return React.createElement(route.component, props);
    }


    /**
     * LoadingComponent
     * 
     */
    const LoadingComponent = () => appState.busy ? <Loading /> : null;


    return (
        <React.Fragment>
            <Ons.Navigator
                animation={animationTypes.FADE}
                initialRoute={initialRoute}
                renderPage={renderPage} />
            <Dialog />
            <LoadingComponent />
        </React.Fragment>
    );
}

export default Navigator;