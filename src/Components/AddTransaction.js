import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const AddTransaction = ({ addNewTransaction, CurrencyRate, Errors }) => {
  const [transaction, setTransaction] = useState({
    title: '',
    amount: '',
    currency: '',
  });

  const handleChange = event => {
    const value = event.target.value;
    return setTransaction({
      ...transaction,
      [event.target.name]: value,
    });
  };

  return (
    <Form
      id="form"
      onSubmit={event => {
        event.preventDefault();
        if (
          transaction.currency === 0 ||
          transaction.amount === '' ||
          transaction.currency === ''
        ) {
          alert('wybierz walute');
        } else {
          addNewTransaction(transaction);
          setTransaction({
            title: '',
            amount: '',
            currency: '',
          });
        }
      }}
    >
      <Row bsPrefix="row custom-row ">
        <Col xs={12} md={{ span: 8, offset: 2 }} lg={8}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Nazwa transakcji </Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="Nazwa transakcji"
              value={transaction.title}
              onChange={handleChange}
              bsPrefix="customform-control "
              disabled={Errors}
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm md={{ span: 8, offset: 2 }} lg={8}>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Kwota </Form.Label>
            <Form.Control
              name="amount"
              type="number"
              min="0"
              step="0.01"
              placeholder="Wpisz kwotę"
              value={transaction.amount}
              onChange={handleChange}
              bsPrefix="customform-control "
              disabled={Errors}
            />
          </Form.Group>
        </Col>
        <Col xs={0} lg={6}>
          {' '}
        </Col>
        <Col xs={12} sm md={{ span: 8, offset: 2 }} lg={8}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label> Wybierz walutę </Form.Label>
            <Form.Control
              as="select"
              type="text"
              name="currency"
              value={transaction.currency}
              onChange={handleChange}
              bsPrefix="customform-control "
              disabled={Errors}
            >
              {' '}
              <option value="">Wybierz z listy </option>
              <option value={CurrencyRate.euro}>
                EUR - {CurrencyRate.euro} PLN{' '}
              </option>
              <option value={CurrencyRate.funt}>
                GBP - {CurrencyRate.funt} PLN
              </option>
              <option value={CurrencyRate.frank}>
                CHF - {CurrencyRate.frank} PLN
              </option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm md lg={12}>
          <Button variant="success" type="submit" disabled={Errors}>
            Submit form
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddTransaction;
