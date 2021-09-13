import React from 'react'
import Footer from './footer'
import Header from './header'
import '../styles/index.scss'
import * as layout from './layout.module.scss';

const Layout = ({children}) => {
    return (
        <div className={layout.container}>
            <div className={layout.content}>
                <Header/>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
