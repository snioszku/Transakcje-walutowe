import React from 'react';
import AddTransactionContainer from '../Containers/AddTransactionContainer';
import TransactionsListContainer from '../Containers/TransactionListContainer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SumOfTransactionContainer from './SumOfTransactionContainer';
import MaxTransactionContainer from './MaxTransactionContainer';

const MainContainer = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} lg={6}>
          <AddTransactionContainer />
        </Col>

        <Col md={12} lg={6}>
          <Row bsPrefix="row custom-row ">
            <Col xs={6} sm={6} md={6} lg={6}>
              <SumOfTransactionContainer />
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <MaxTransactionContainer />
            </Col>
            <Col xs={12} sm md lg={12}>
              {' '}
              <TransactionsListContainer />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainContainer;
