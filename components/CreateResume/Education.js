import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Typography,
  Button,
  Box,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import SchoolIcon from '@material-ui/icons/School';
import { TimelineContent, TimelineItem } from '@material-ui/lab';
import CostomTimeline, { CostomTimelineSeparator } from '../../components/Timeline/Timeline';
import CalendarComponent from '../../Calendar/calendar';

export const CreateEducation = () => {
  const [educationComponents, setEducationComponents] = useState([
    { textField: '', calendar: '', description: '' },
  ]);

  const handleAddEducation = () => {
    setEducationComponents([
      ...educationComponents,
      { textField: '', calendar: '', description: '' },
    ]);
  };

  const handleRemoveEducation = (index) => {
    const newEducationComponents = educationComponents.filter((_, i) => i !== index);
    setEducationComponents(newEducationComponents);
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducationComponents = educationComponents.map((experience, i) =>
      i === index ? { ...experience, [field]: value } : experience,
    );
    setEducationComponents(updatedEducationComponents);
  };

  return (
    <Box>
      <CostomTimeline title={'Education'} icon={<SchoolIcon />}>
        {educationComponents.map((experience, index) => (
          <TimelineItem key={index}>
            <CostomTimelineSeparator />
            <TimelineContent className={'timeline_content'}>
              <Typography variant={'body2'} className={'timeline_title'}>
                Degree
              </Typography>
              <Typography className={'timeline_title'}>
                <TextField 
                  type="text" 
                  variant="outlined" 
                  fullWidth 
                  sx={{ mb: 2 }} 
                  value={experience.textField} 
                  onChange={(e) => handleEducationChange(index, 'textField', e.target.value)} 
                />
              </Typography>

              <Typography variant={'body2'} className={'timeline_title'}>
                Course
              </Typography>
              <Typography className={'timeline_title'}>
                <TextField 
                  type="text" 
                  variant="outlined" 
                  fullWidth 
                  sx={{ mb: 2 }} 
                />
              </Typography>

              <Typography className={'timeline_title'}>
                <CalendarComponent />
              </Typography>

              <Box display="flex" justifyContent="flex-start" alignItems="center" mt={2}>
                <Button
                  onClick={handleAddEducation}
                  variant="contained"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                    color: 'inherit',
                    marginRight: '8px',
                  }}
                >
                   <CostomTimeline icon={<AddIcon />}> </CostomTimeline>
                </Button>
                <Button
                  onClick={() => handleRemoveEducation(index)}
                  variant="contained"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                    color: 'inherit',
                  }}
                >
                  <CostomTimeline icon={<RemoveIcon />}> </CostomTimeline>
                </Button>
              </Box>

            </TimelineContent>
          </TimelineItem>
        ))}
      </CostomTimeline>
    </Box>
  );
};
