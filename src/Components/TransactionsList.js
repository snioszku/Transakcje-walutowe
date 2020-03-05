import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Button from 'react-bootstrap/Button';

const TransactionsList = ({ transactions, deleteTransaction }) => {
  const pStyle = {
    color: '#28a745',
    fontsize: '1.3rem',
  };

  if (!transactions.length) {
    return (
      <div>
        <p style={pStyle}>Dodaj Pierwszą Transakcje</p>
      </div>
    );
  }
  return (
    <div>
      <ListGroup variant="flush">
        <TransitionGroup className="lista">
          {transactions.map(t => (
            <CSSTransition key={t.id} timeout={500} classNames="item">
              <ListGroup.Item key={t.id}>
                {' '}
                <p className="p_list"> {t.title}</p>{' '}
                <p className="p_list"> Wartość: {t.exchanged}</p>
                <Button
                  variant="outline-danger"
                  bsPrefix=" btn-outline-danger custombutton "
                  size="xs"
                  onClick={() => deleteTransaction(t.id)}
                >
                  Usuń
                </Button>
              </ListGroup.Item>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </div>
  );
};
export default TransactionsList;
