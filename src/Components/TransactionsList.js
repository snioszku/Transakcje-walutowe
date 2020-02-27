import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const TransactionsList = ({ transactions, deleteTransaction }) => {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item variant="dark">
        <p className="p_list"> Lista transakcji</p>
      </ListGroup.Item>

      {transactions.map(t => (
        <ListGroup.Item key={t.id}>
          {' '}
          <p className="p_list">
            {' '}
            nowe itemy:{t.title} {t.exchanged}
            {t.currency}
          </p>{' '}
          .<button onClick={() => deleteTransaction(t.id)}>delete</button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
export default TransactionsList;
