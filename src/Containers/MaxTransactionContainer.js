import MaxTransaction from '../Components/MaxTransaction';
import React from 'react';

import { connect } from 'react-redux';

const getMax = arr => {
  if (arr.length === 0) {
    return 0;
  } else {
    return Math.max.apply(
      null,
      arr.map(item => item.exchanged),
    );
  }
};

const mapStateToProps = ({ AddorDeleteTansaction }) => ({
  max: getMax(AddorDeleteTansaction),
});

const MaxTransactionContainer = connect(mapStateToProps, null)(MaxTransaction);

export default MaxTransactionContainer;
