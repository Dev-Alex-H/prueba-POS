import { HomeTwoTone, EditTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Header = () => {
    const [current, setCurrent] = useState('h');
    const onClick = (e) => {
        setCurrent(e.key);
    };
    return (
        <>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="h" icon={<HomeTwoTone />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="c" icon={<EditTwoTone />}>
                    <Link to="/client">Clients</Link>
                </Menu.Item>
                <Menu.Item key="p" icon={<CheckCircleTwoTone />}>
                    <Link to="/product">Products</Link>
                </Menu.Item>
                <Menu.Item key="co" icon={<CheckCircleTwoTone />}>
                    <Link to="/cotization">Cotizations</Link>
                </Menu.Item>
            </Menu>
            <Outlet />
        </>

    )
};
export default Header;