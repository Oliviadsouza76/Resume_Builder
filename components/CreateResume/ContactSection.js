import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import CostomButton from '../../components/Button/Button'; // Make sure to import your custom button component

const ContactSection = () => {
  return (
    
    <Grid container spacing={6} className="section pt_45 pb_45">
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
            placeholder="Say something about Yourself..."
            rows="4"
            cols="50"
          />
        </Grid>
      </Grid>
      {/* Content form */}
      <Grid item xs={12} lg={7}>
        <Grid container>
          <Grid item className="section_title mb-30">
            <span></span>
            <h6 className={'section_title_text'}>Contact Form</h6>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
              <TextField fullWidth name={'name'} label={'Name'} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth name={'email'} label={'E-mail'} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth name={'message'} label={'Message '} multiline rows={4} />
              </Grid>
              <Grid item xs={12}>
                <CostomButton text={'Submit'} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Content information */}
      <Grid item xs={12} lg={5}>
        <Grid container>
          <Grid item className="section_title mb-30">
            <span></span>
            <h6 className={'section_title_text'}>Contact Information</h6>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Typography className={'contactInfo_item'}>
                  <TextField fullWidth name={'address'} label={'Address'} />
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={'contactInfo_item'}>
                  <TextField fullWidth name={'phone'} label={'Phone'} />
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={'contactInfo_item'}>
                  <TextField fullWidth name={'email'} label={'Email'} />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactSection;
