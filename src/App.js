import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function App() {
  const [hours, setHours] = useState([]);
  const [currentDay, setCurrentDay] = useState('');
  const [currentHours, setCurrentHours] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [totalPayment, setTotalPayment] = useState(0);

  const addWorkDay = () => {
    if (currentDay && currentHours) {
      setHours([...hours, { day: currentDay, hours: parseFloat(currentHours) }]);
      setCurrentDay('');
      setCurrentHours('');
    }
  };

  const calculatePayment = () => {
    const totalHours = hours.reduce((sum, entry) => sum + entry.hours, 0);
    setTotalPayment(totalHours * parseFloat(hourlyRate));
  };

  return (
    <Container>
      <Typography variant="h1" gutterBottom>Work Hours Tracker</Typography>
      
      <Box mb={2}>
        <TextField
          label="Day"
          variant="outlined"
          value={currentDay}
          onChange={(e) => setCurrentDay(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Hours Worked"
          variant="outlined"
          value={currentHours}
          onChange={(e) => setCurrentHours(e.target.value)}
          fullWidth
          margin="normal"
          type="number"
        />
        <Button variant="contained" color="primary" onClick={addWorkDay}>Add Work Day</Button>
      </Box>
      
      <Box mb={2}>
        <TextField
          label="Hourly Rate"
          variant="outlined"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(e.target.value)}
          fullWidth
          margin="normal"
          type="number"
        />
        <Button variant="contained" color="secondary" onClick={calculatePayment}>Calculate Payment</Button>
      </Box>

      <Box mb={2}>
        <Typography variant="h6">Work Days</Typography>
        {hours.map((entry, index) => (
          <Typography key={index}>{entry.day}: {entry.hours} hours</Typography>
        ))}
      </Box>
      
      <Typography variant="h5">Total Payment: ${totalPayment.toFixed(2)}</Typography>
    </Container>
  );
}

export default App;
