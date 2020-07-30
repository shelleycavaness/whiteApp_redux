import React, { useState } from 'react'
import Header from '../components/header'
import '../../less/style.less'

const Layout = (props) => {
    return (
        <div className="app-wrapper bg-grey">
           
            <Header />
            <main className="common-container">
                {props.children}
            </main>
        </div>
    )
}

export default Layout