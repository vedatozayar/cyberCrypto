import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import moment from 'moment';
import Loader from './Loader';

const { Title, Text } = Typography;
const { Option } = Select;

const demoImage =
  'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
const News = ({ simplyfied }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplyfied ? 6 : 12,
  });
  const { data } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return <Loader />;
  return (
    <Row gutter={[24, 24]}>
      {!simplyfied && (
        <Col span={24}>
          <Select
            showSearch
            className='select-news'
            placeholder='Select a Crypto'
            optionFilterProp='children'
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value='Cryptocurrency'>Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => (
              <Option value={coin.name} key={coin.name}>
                {coin.name}{' '}
              </Option>
            ))}
          </Select>
        </Col>
      )}

      {cryptoNews?.value.map((news, i) => (
        <Col xs={25} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.url} target='_blank' rel='noreferrer'>
              <div className='news-image-container'>
                <Title className='news-title' level={4}>
                  {news.name}
                </Title>
                <img
                  style={{ maxWidth: '200px', maxHeight: '200px' }}
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt='news'
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className='provider-container'>
                <Avatar
                  src={
                    news.provider[0]?.image?.thumbnail?.contentUrl || demoImage
                  }
                  alt=''
                />
                <Text className='provider-name'>{news.provider[0]?.name}</Text>
                <Text>
                  {moment(news.datePublished).startOf('ss').fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
