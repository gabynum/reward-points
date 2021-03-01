import { useState } from "react";
import { SAMPLE_TRANSACTIONS } from "./constants";
import Data from "./Data";
import { parseTransactions } from "./helperFunctions";

function handleClick(state, setState) {
  const customerRecords = parseTransactions(state.transactions);
  setState({
    ...state,
    customerRecords: customerRecords
  })
}

function handleTransactionsChange(event, state, setState) {
  setState({
    ...state,
    transactions: event.target.value
  });
}

export default function RewardsPage(props) {
  const [state, setState] = useState({
    transactions: '',
    customerRecords: {}
  });

  return (
    <div>
      <h2>Calculate Reward Points</h2>
      <div>Transactions (JSON):</div>
      <div>
        <textarea
          value={state.transactions}
          placeholder={SAMPLE_TRANSACTIONS}
          rows={20}
          cols={40}
          onChange={(event) => handleTransactionsChange(event, state, setState)}
        />
      </div>
      <button onClick={() => handleClick(state, setState)}>
        Calculate
      </button>
      <div>
        <Data customerRecords={state.customerRecords} />
      </div>
    </div>
  );
}

RewardsPage.propTypes = {};