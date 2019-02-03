import React from 'react';
import Classes from './Layout.module.css'

import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <>
        <div>
            <Toolbar/>
        </div>
        <main className={Classes.Content}>
            {props.children}
        </main>
    </>
)

export default layout;