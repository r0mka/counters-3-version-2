import React from 'react';
import { TiPlusOutline } from 'react-icons/ti';
import { FaTrash } from 'react-icons/fa';
import { RiRestartLine } from 'react-icons/ri';
import { v4 as uuid } from 'uuid';

import useCounter from '../hooks/useCounter';
import Counter from './Counter';

/**
 * uuid() GENERATES AND RETURNS A UNIQUE INDENTIFICATOR OF TYPE STRING
 */

export default function CounterList({ defaultCounter }) {
  const {
    counters,
    deleteAll,
    resetAll,
    addCounter,
    updateCounter,
    resetCounter,
    deleteCounter,
    updateCounterRange,
  } = useCounter(defaultCounter);

  return (
    <React.Fragment>
      <div>
        <button
          disabled={counters.length > 4}
          className={`btn-add ${counters.length > 4 && 'not-allowed'}`}
          onClick={addCounter}
        >
          <TiPlusOutline size={64} />
        </button>

        <button className="btn-delete-all" onClick={deleteAll}>
          <FaTrash size={48} />
        </button>

        <button className="btn-delete-all" id="reset" onClick={resetAll}>
          <RiRestartLine size={48} />
        </button>
      </div>

      <ul>
        {counters.map((counter) => (
          <li key={counter.id}>
            <Counter
              id={counter.id}
              count={counter.count}
              range={counter.range}
              deleteCounter={deleteCounter}
              updateCounter={updateCounter}
              resetCounter={resetCounter}
              updateRange={updateCounterRange}
            />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

CounterList.defaultProps = {
  defaultCounter: { id: uuid(), count: 0, range: 3 },
};
