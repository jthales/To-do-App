import 'modules/bootstrap/dist/css/bootstrap.css'
import 'modules/font-awesome/css/font-awesome.css'

import '../template/custom.css'

import React from 'react'
import Routes from './routes'
import Menu from '../template/menu'

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)   