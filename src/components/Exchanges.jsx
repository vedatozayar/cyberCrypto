import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';
import Loader from './Loader';
import { useGetExchangesQuery } from '../services/exchangesApi';
const { Text } = Typography;
const { Panel } = Collapse;
const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Country</Col>
        <Col span={6}>Year of Establishment</Col>
      </Row>
      <Row>
        {data.map((data) => (
          <Col span={24} key={data.id}>
            <Collapse>
              <Panel
                key={data.id}
                showArrow={false}
                header={
                  <Row key={data.id}>
                    <Col span={6}>
                      <Text>
                        <strong>{data.trust_score_rank}.</strong>
                      </Text>
                      <Avatar className='exchange-image' src={data.image} />
                      <Text>
                        <strong>{data.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6}>${millify(data.trade_volume_24h_btc)}</Col>
                    <Col span={6}>{data.country}</Col>
                    <Col span={6}>{data.year_established}</Col>
                  </Row>
                }
              >
                {HTMLReactParser(data.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
