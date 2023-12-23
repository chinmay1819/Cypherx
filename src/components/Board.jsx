
import React, { useState, useEffect } from 'react';
import Ticket from './Ticket';
import _ from 'lodash';
import Grid from '@mui/material/Grid';



const Board = ({ tickets, groupingOption, sortingOption }) => {

  const [groupedTickets, setGroupedTickets] = useState({});

  useEffect(() => {
    setGroupedTickets(groupTickets(tickets, groupingOption));
  }, [tickets, groupingOption]);

  function groupTickets(tickets, option) {
    return _.groupBy(tickets, option);
  }

  function sortTickets(groupedTickets, option) {
    return _.mapValues(groupedTickets, (group) => _.sortBy(group, option));
  }

  function renderTickets() {
    const sortedTickets = sortTickets(groupedTickets, sortingOption);

    return Object.keys(sortedTickets).map((group, index) => (
      <Grid key={index} item xs={1} sm={5} md={4} lg={3}>
        <div style={{display:"flex",gap:"10px",flexDirection:"column"}}>
          <h2>{group}</h2>
          <hr style={{border:"1px solid #afafaf",width:"100%"}}/>
          {sortedTickets[group].map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </Grid>
    ));
  }

  return (
    <Grid container spacing={2} className="board">
      {renderTickets()}
    </Grid>
  );
};

export default Board;
