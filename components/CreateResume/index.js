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
import { CreateEducation } from './Education';
import TextFieldWithDemoPoints from './AddPoints';
import { Skills } from './Skills';
import { WorkExperience } from './WorkExperience';
import ContactSection from './ContactSection';
const CreateResume = () => {
  // const[educationComponents, setEducationComponents] = useState([
  //   {textfield:'',calendar:''}
  // ])

  return (
    <>
      {/* About me*/}

      <Grid container className="section pb_45 pt_45 ">
        <Grid item className="section_title mb-30">
          <span></span>
          <h6 className={'section_title_text'}>About Yourself </h6>
        </Grid>
        <Grid item xs={12}>
          {/* <Typography variant={"body2"} className={"aboutme_text"}>
            {resumeData.about}
          </Typography> */}
          <textarea
            // value={text}
            // onChange={handleChange}
            placeholder="Type something..."
            rows="4"
            cols="50"
          />
        </Grid>
      </Grid>

      {/* Educational And Experiences*/}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb-30">
          <span></span>
          <h6 className={'section_title_text'}>Resume </h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className={'resume_timeline'}>
            {/*Working and Volunteering Experiences  */}
            <Grid item sm={12} md={6}>
              {/* <CostomTimeline title={'Work and Volunteering'} icon={<WorkIcon />}>
                {experienceComponents.map((experience, index) => (
                  <TimelineItem key={index}> */}
              {/* <CostomTimelineSeparator />

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

                
              </CostomTimeline> */}
              <WorkExperience />
            </Grid>

            {/*Educational*/}
            {/* <Grid item sm={12} md={6}>
              <CostomTimeline title={'Education'} icon={<SchoolIcon />}>
                {resumeData.Education.map((Education) => (
                  <TimelineItem>
                    <CostomTimelineSeparator />
                    <TimelineContent className={'timeline_content'}>
                      <Typography className={'timeline_title'}>{Education.title}</Typography>
                      <Typography variant={'caption'} className={'timeline_date'}>
                        {Education.date}
                      </Typography>
                      <Typography variant={'body2'} className={'timeline_description'}>
                        {Education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CostomTimeline>
            </Grid> */}
            <Grid item sm={12} md={6}>
              <CreateEducation />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Services*/}

      <Grid container className="section pb_45">
        <Grid item className="section_title mb-30">
          <span></span>
          <h6 className={'section_title_text'}>My Services </h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justify={'space-around'}>
            {/* {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className={'service'}>
                  <Icon className={'service_icon'}>{service.icon}</Icon>
                  <Typography className={'service_title'} variant={'h6'}>
                    {service.title}
                  </Typography>
                  <Typography className={'service_description'} variant={'body2'}>
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))} */}
            <Skills />
          </Grid>
        </Grid>
      </Grid>

      {/*Skills*/}

      {/* <Grid container className="section graybg pb_45 p_50 ">
        <Grid item xs={12}>
          <Grid container justify={'space-between'} spacing={3}>
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className={'skill'}>
                  <Typography variant={'h6'} className={'skills_title'}>
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography variant={'body2'} className={'skill_description'}>
                      <TimelineDot variant={'outlined'} className={'timeline_dot'} />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid> */}

      {/*Contact*/}

      <ContactSection />
    </>
  );
};

export default CreateResume;
