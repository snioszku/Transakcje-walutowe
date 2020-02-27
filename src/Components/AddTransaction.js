import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const AddTransaction = ({ addNewTransaction, CurrencyRate }) => {
  //useEffect(() => FetchRate(), []);

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
      onSubmit={event => {
        event.preventDefault();
        if (transaction.currency == 0) {
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
        <Col xs={12} md lg={12}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Nazwa transakcji</Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="Nazwa transakcji"
              value={transaction.title}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm md lg={12}>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Kwota </Form.Label>
            <Form.Control
              name="amount"
              type="number"
              placeholder="Wpisz kwotę"
              value={transaction.amount}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm md lg={12}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label> Wybierz walutę </Form.Label>
            <Form.Control
              as="select"
              type="text"
              name="currency"
              value={transaction.currency}
              onChange={handleChange}
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
        <Col xs={12} sm md lg={4}>
          <Button type="submit">Submit form</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddTransaction;
