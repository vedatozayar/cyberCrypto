import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import icon from '../images/cryptocurrency.png';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';

const Navbar = () => {
  const menuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: <Link to='/'>Home</Link>,
    },
    {
      key: 'crypto',
      icon: <FundOutlined />,
      label: <Link to='/cryptocurrencies'>Cryptocurrencies</Link>,
    },
    {
      key: 'exchanges',
      icon: <MoneyCollectOutlined />,
      label: <Link to='/exchanges'>Exchanges</Link>,
    },
    {
      key: 'news',
      icon: <BulbOutlined />,
      label: <Link to='/news'>News</Link>,
    },
  ];
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size='large' />
        <Typography.Title level={2} className='logo'>
          <Link to='/'>CyberCrypto</Link>
        </Typography.Title>
      </div>
      <Menu theme='dark' items={menuItems} />
    </div>
  );
};

export default Navbar;
