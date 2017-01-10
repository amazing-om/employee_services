import React, { Component } from 'react';

//unity modules
import App from 'unity-components/react/components/App.jsx';

//local Configuration
import AppConfig from '../config/application-config.js';
import 'unity-components/less/index.less';
import 'unity-components/css/tree.css';

class Appskeleton extends Component{


    render(){
        AppConfig.dropDowns[1].label =window['__myx_user__']&&window['__myx_user__'].name||'Guest';

        return(
            <App {...AppConfig}>
                {this.props.children}
            </App>
        )
    };
};

export default Appskeleton;



