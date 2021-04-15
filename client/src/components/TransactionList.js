import React,{ useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  const {transactions, getTransaction} = useContext(GlobalContext)

  useEffect(() => {
    getTransaction();
    // eslint-disable-next-line 
  }, []);
    return (
        <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map((transaction, index) => (
          <Transaction key={index} transaction={transaction} />
        ))}
      </ul>
     </>
    )
}

export default TransactionList
