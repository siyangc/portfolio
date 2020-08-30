import React, { Component } from 'react'
import {Desktop, Tablet, Mobile, Default} from '../../configs/mediaQueryBreakPoint'

export default class topNavBarRight extends Component {
    render() {
        return (
            <div>
                <Default>
                    <div>
                        right
                    </div>
                </Default>
                <Mobile>
                    haha
                </Mobile>
            </div>
            
        )
    }
}
