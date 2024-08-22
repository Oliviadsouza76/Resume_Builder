import React, { useState } from 'react';
import './index.css';
import { Grid, Icon, Paper, TextField, Typography, Button, IconButton } from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import CostomTimeline, { CostomTimelineSeparator } from '../../components/Timeline/Timeline';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import AddIcon from '@material-ui/icons/Add';
import { TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@material-ui/lab';
import CostomButton from '../../components/Button/Button';
import CalendarComponent from '../../Calendar/calendar';
import RemoveIcon from '@material-ui/icons/Remove';
import {CreateEducation } from './Education';
import TextFieldWithDemoPoints from './AddPoints';
import { Skills } from './Skills';
export const WorkExperience=()=>
{
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
    
      const handleExperienceChange = (index, field, value) => {
        const updatedExperienceComponents = experienceComponents.map((experience, i) =>
          i === index ? { ...experience, [field]: value } : experience,
        );
        setExperienceComponents(updatedExperienceComponents);
      }


      return(
       <div>
         
         
              
              <CostomTimeline title={'Work and Volunteering'} icon={<WorkIcon />}>
                {experienceComponents.map((experience, index) => (
                  <TimelineItem key={index}>
                    <CostomTimelineSeparator />

                    <TimelineContent className={'timeline_content'}>
                      <Grid item xs={12} sx={{ mt: 2 }}>
                        <Typography variant={'body2'} className={'timeline_description'}>
                          Position
                        </Typography>

                        <TextField
                          type="text"
                          variant="outlined"
                          fullWidth
                          value={experience.textField}
                          onChange={(e) =>
                            handleExperienceChange(index, 'textField', e.target.value)
                          }
                          sx={{ mb: 2 }}
                        />
                      </Grid>

                      <Grid item xs={12} sx={{ mt: 2 }}>
                        <Typography variant={'body2'} className={'timeline_title'}>
                          Job Description
                        </Typography>

                        <TextField
                          type="text"
                          variant="outlined"
                          fullWidth
                          value={experience.description}
                          onChange={(e) =>
                            handleExperienceChange(index, 'description', e.target.value)
                          }
                          sx={{ mb: 2 }}
                          multiline
                          rows={5}
                        />
                      </Grid>
                      <Grid item xs={12} sx={{ mt: 2 }}>
                        <Typography className={'timeline_content'}>
                          <CalendarComponent />
                        </Typography>
                      </Grid>
                      <Button
                        onClick={() => handleRemoveExperience(index)}
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
                      <Button
                  onClick={handleAddExperience}
                  variant="contained"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                    color: 'inherit',
                  }}
                >
                  <CostomTimeline icon={<AddIcon />}> </CostomTimeline>
                </Button>
                    </TimelineContent>
                  </TimelineItem>
                ))}

                
              </CostomTimeline>
           
       </div>
           
      )
}