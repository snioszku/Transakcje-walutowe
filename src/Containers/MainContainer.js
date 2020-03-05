import React from 'react';
import AddTransactionContainer from '../Containers/AddTransactionContainer';
import TransactionsListContainer from '../Containers/TransactionListContainer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SumOfTransactionContainer from './SumOfTransactionContainer';
import MaxTransactionContainer from './MaxTransactionContainer';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import ErrorMessage from '../Components/ErrorMessage';

const MainContainer = () => {
  return (
    <div>
      <Row>
        <Col>
          {' '}
          <Nav /> <ErrorMessage />
        </Col>{' '}
      </Row>
      <Container>
        <Row>
          <Col sm={12} lg={4}>
            <AddTransactionContainer />
          </Col>

          <Col md={12} lg={8}>
            <Row bsPrefix="row custom-row ">
              <Col xs={6} sm={6} md={6} lg={6}>
                <SumOfTransactionContainer />
              </Col>
              <Col xs={6} sm={6} md={6} lg={6}>
                <MaxTransactionContainer />
              </Col>
              <Col xs={12} sm={12} md={12} lg={12}>
                {' '}
                <p> Wykaz Transakcji </p>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} bsPrefix=" col customlist ">
                {' '}
                <TransactionsListContainer />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col>
          {' '}
          <Footer />
        </Col>{' '}
      </Row>
    </div>
  );
};

export default MainContainer;
