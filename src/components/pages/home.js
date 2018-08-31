import React, { Component } from 'react';

import Slide from './Home/slider'
import Contents from './Home/content'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Slide/>
                <Contents/>
            </div>
        )
    }
}

export default HomePage