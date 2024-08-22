import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import './index.css';
import { Grid, Icon, TextField, Typography, Button } from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import CostomTimeline from '../../components/Timeline/Timeline';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

export const Skills = () => {
  const [experienceComponents, setExperienceComponents] = useState([
    { textField: '', calendar: '', description: '' },
  ]);

  const handleAddExperience = () => {
    setExperienceComponents([
      ...experienceComponents,
      { textField: '', calendar: '', description: '' },
    ]);
  };

  const handleRemoveExperience = (index) => {
    const newExperienceComponents = experienceComponents.filter((_, i) => i !== index);
    setExperienceComponents(newExperienceComponents);
  };

  return (
    <Box >
      <Grid item xs={12}>
        {experienceComponents.map((experience, index) => (
          <Box>
            <Grid container spacing={3} justifyContent="space-around">
              {resumeData.services.map((service) => (
                <Grid item xs={12} sm={6} md={4}>
                  <div className={'service'}>
                    <Icon className={'service_icon'}>{service.icon}</Icon>
                    <Typography className={'service_title'} variant={'h6'}>
                      {service.title}
                    </Typography>
                    <Typography className={'service_description'} variant={'body2'}>
                      <TextField
                        type="text"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2, width: '500px' }}
                      />
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
            <Button
              onClick={() => handleRemoveExperience(index)}
              variant="contained"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
                color: 'inherit',
                marginRight:'200px'
              }}
            >
              <CostomTimeline icon={<RemoveIcon />}> </CostomTimeline>
            </Button>
            <Button
              onClick={handleAddExperience}
              variant="contained"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
                color: 'inherit',
                marginLeft:'600px'
              }}
            >
              <CostomTimeline icon={<AddIcon />}> </CostomTimeline>
            </Button>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};
