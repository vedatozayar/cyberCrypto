import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Title, Text } = Typography;
const { Options } = Select;
const News = ({ simplyfied }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: 'Cryptocurrency',
    count: simplyfied ? 10 : 100,
  });
  console.log(cryptoNews);
  return <div>News</div>;
};

export default News;
