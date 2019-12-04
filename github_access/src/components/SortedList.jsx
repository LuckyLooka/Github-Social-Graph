import React from 'react';
const SortedList = (props) => {
  if (props.repitems) {
    return (
        <ul>
          {props.repitems.map((repitem) =>
            <li key={repitem.sha}>
              <div>
                <div>
                   Commit by "{repitem.commit.author.name}" at {repitem.commit.author.date}
                </div>
                <div>
                  <i>Commit message :  {repitem.commit.message}</i>
                </div>
              </div>
            </li>
          )}
        </ul>
      )
  } else { return null;}
  };export default SortedList;