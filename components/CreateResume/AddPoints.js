import React, { useState } from 'react';
import { Box, TextField, Button, Typography, IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const TextFieldWithDemoPoints = () => {
  // Pre-written pointers list
  const preWrittenPoints = [
    'First demo line',
    'Second demo line',
    'Third demo line',
    'Fourth demo line',
    'Fifth demo line',
  ];

  const [selectedPoints, setSelectedPoints] = useState([]);
  const [result, setResult] = useState('');

  const handleAddPoint = (point) => {
    // Add the selected point to the list of selected points
    setSelectedPoints([...selectedPoints, point]);
    updateResult([...selectedPoints, point]);
  };

  const updateResult = (points) => {
    // Format the selected points with bullet points
    const formattedResult = points.map((point) => `• ${point}`).join('\n');
    setResult(formattedResult);
  };

  return (
    <Box>
      <Typography variant="h6" mb={2}>
        Select Pointers:
      </Typography>
      <List>
        {preWrittenPoints.map((point, index) => (
          <ListItem key={index}>
            <ListItemText primary={point} />
            <IconButton
              onClick={() => handleAddPoint(point)}
              color="primary"
            >
              <AddIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      <Typography variant="h6" mt={4} mb={2}>
        Result:
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        multiline
        value={result}
        InputProps={{
          readOnly: true,
        }}
        rows={selectedPoints.length + 1}
      />
    </Box>
  );
};

export default TextFieldWithDemoPoints;
