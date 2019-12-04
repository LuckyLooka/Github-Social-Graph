import React from 'react';
import Moment from 'react-moment';const SortedList = (props) => {
  if (props.repitems) {
    return (
        <ul>
          {props.repitems.map((repitem) =>
            <li key={repitem.sha}>
              <div>
                <div>
                  <a> Commit by "{repitem.commit.author.name}" at {repitem.commit.author.date}</a>
                </div>
                <div>
                  <i>Commit message :{repitem.commit.description}</i>
                </div>
              </div>
            </li>
          )}
        </ul>
      )
  } else { return null;}
  };export default SortedList;