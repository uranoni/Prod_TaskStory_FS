import React,{useState,Fragment} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import StoryCard from '../components/StoryCard';
import Grid from '@material-ui/core/Grid';

const History = () => {
  const [story, setstory] = useState([{title:"good",task:"asd"},{title:"good",task:"asd"}])
    return (
    <Fragment>
        <CssBaseline />
        <Container justify="center"
        alignItems="center">
        <Grid container spacing={3} maxWidth="sm" justify="center"
        alignItems="center">
        
            <Grid item xl={3} md={6} xs={12}>
          <StoryCard title='good'></StoryCard>
        </Grid>
        <Grid item xl={3} md={6} xs={12}>
          <StoryCard ></StoryCard>
        </Grid>
        <Grid item xl={3} md={6} xs={12}>
          <StoryCard ></StoryCard>
        </Grid>
        <Grid item xl={3} md={6} xs={12}>
          <StoryCard ></StoryCard>
            </Grid>
            <Grid item xl={3} md={6} xs={12}>
            <StoryCard ></StoryCard>
          </Grid>
      </Grid>
          
        </Container>
    </Fragment>
    )
}

export default History
