import React, { useEffect, useState } from 'react';
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
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);

      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

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
        <Button
          onClick={() => setActiveMenu(!activeMenu)}
          className='menu-control-container'
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && <Menu theme='dark' items={menuItems} />}
    </div>
  );
};

export default Navbar;
