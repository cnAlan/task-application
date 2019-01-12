import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { CSSTransition } from 'react-transition-group'
import { Menu, Icon } from 'antd'


import { 
    SearchInput
} from './style'

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;


class Header extends Component {
    render() {
        const {
            current
        } = this.props

        const {
            handleClick
        } = this.props

        return (
            <Menu
                onClick = {handleClick}
                selectedKeys = {[current]}
                mode = "horizontal"
            >
                <Menu.Item key="all">
                    <Icon type="all" />Home
                    
                </Menu.Item>
                <Menu.Item key="search">
                    <Icon type="search" />
                    <CSSTransition
                        in={current === 'search' ? true:false}
                        timeout={200}
                        classNames="slide"
                    >
                        <SearchInput 
                            className={current === 'search' ? 'show':''}
                        />
                    </CSSTransition>
                </Menu.Item>
                <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" /></span>}>
                    <Menu.Item key="login">登录</Menu.Item>
                    <Menu.Item key="register">注册</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}

const mapStateToProps = state => {
    return {
        current: state.getIn(['header', 'current'])
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleClick(e) {
            dispatch(actionCreators.changeMenuItem(e.key))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)