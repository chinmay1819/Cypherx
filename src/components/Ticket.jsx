
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Ticket = ({ ticket }) => {
  return (
    <Card sx={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderRadius:"10px"}} variant="outlined" className="ticket">
      <CardContent>
        <Typography variant="h6">{ticket.title}</Typography>
        <Typography>Status: {ticket.status}</Typography>
        <Typography>User: {ticket.userId}</Typography>
        <Typography>Priority: {ticket.priority}</Typography>
      </CardContent>
    </Card>
  );
};

export default Ticket;
