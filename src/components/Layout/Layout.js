import React from 'react';
import Classes from './Layout.module.css'

const layout = (props) => (
    <>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={Classes.Content}>
            {props.children}
        </main>
    </>
)

export default layout;