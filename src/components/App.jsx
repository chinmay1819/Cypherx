
import React, { useState, useEffect } from 'react';
import Board from './Board';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const App = () => {
  const [data, setData] = useState({ tickets: [], users: [] });
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortingOption, setSortingOption] = useState('priority');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Box mt={3}>
        <Typography variant="h4" align="center" gutterBottom>
          Kanban Board
        </Typography>
        <FormControl variant="outlined"  style={{ marginBottom: 16 }}>
          <InputLabel id="grouping-label">Group by:</InputLabel>
          <Select
            labelId="grouping-label"
            id="grouping-select"
            value={groupingOption}
            onChange={(e) => setGroupingOption(e.target.value)}
            label="Group by"
          >
            <MenuItem value="status">Status</MenuItem>
            <MenuItem value="userId">User</MenuItem>
            <MenuItem value="priority">Priority</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" >
          <InputLabel id="sorting-label">Sort by:</InputLabel>
          <Select
            labelId="sorting-label"
            id="sorting-select"
            value={sortingOption}
            onChange={(e) => setSortingOption(e.target.value)}
            label="Sort by"
          >
            <MenuItem value="priority">Priority</MenuItem>
            <MenuItem value="title">Title</MenuItem>
          </Select>
        </FormControl>
        <Board
          tickets={data.tickets}
          groupingOption={groupingOption} 
          sortingOption={sortingOption}
        />
      </Box>
    </Container>
  );
};

export default App;
