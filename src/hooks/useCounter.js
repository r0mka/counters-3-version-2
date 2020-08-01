import React from 'react';
import { v4 as uuid } from 'uuid';

/**
 * uuid() GENERATES AND RETURNS A UNIQUE INDENTIFICATOR OF TYPE STRING
 */

const useCounter = (defaultCounter) => {
  // array of counters represented as { id: uuid(), count: 0, range: 3 }
  const [counters, setCounters] = React.useState([defaultCounter]);

  const deleteAll = () => setCounters([]); // remove the counters by setting the state  to an empty array

  // map iterates over the array of counter objects and changes property count on every object to 0
  const resetAll = () =>
    setCounters(counters.map((counter) => ({ ...counter, count: 0 })));
  // creates a new counter object and adds it to the array of objects in the state
  const addCounter = () =>
    setCounters([...counters, { id: uuid(), count: 0, range: 3 }]);
  // accepts id and newRange iterate over the counters array with map, on every iteration
  // checks if the id of current element matches the id the fucntion received as argument
  // if yes create a new object with updated range property
  const updateCounterRange = (id, newRange) =>
    setCounters(
      counters.map((counter) =>
        counter.id === id
          ? {
              ...counter,
              range: newRange,
            }
          : counter
      )
    );

  const updateCounter = (id, newCount) =>
    setCounters(
      counters.map((counter) =>
        counter.id === id
          ? {
              ...counter,
              count: newCount,
            }
          : counter
      )
    );

  const resetCounter = (id) =>
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, count: 0 } : counter
      )
    );

  const deleteCounter = (id) =>
    setCounters(counters.filter((counter) => counter.id !== id));

  return {
    counters,
    deleteAll,
    resetAll,
    addCounter,
    updateCounter,
    resetCounter,
    deleteCounter,
    updateCounterRange,
  };
};

export default useCounter;
