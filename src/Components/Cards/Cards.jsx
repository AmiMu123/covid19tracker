import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';

const Cards = ({data:{confirmed,recovered,death,lastUpdate} }) =>{
    if(!confirmed){
        return 'Loading ...';
    }
    console.log(confirmed);

    return(
        
        <div className = {styles.container}>
            <Grid  container spacing = {3} justify = "center">
                <Grid item component = {Card}>
                 <CardContent>
                    <Typography color = "textSecondary" gutterBottom>Infected</Typography>
                <Typography variant="h5">{confirmed.value}</Typography>
                    <Typography color="textSecondary">Real DATE</Typography>
                    <Typography variant = "body2">Number of Active cases of COVID-19</Typography>
                </CardContent>
                </Grid>

                <Grid item component = {Card}>
                 <CardContent>
                    <Typography color = "textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">Real Data</Typography>
                    <Typography color="textSecondary">Real DATE</Typography>
                    <Typography variant = "body2">Number of recoveries from  COVID-19</Typography>
                </CardContent>
                </Grid>

                <Grid item component = {Card}>
                 <CardContent>
                    <Typography color = "textSecondary" gutterBottom>DEATH</Typography>
                    <Typography variant="h5">Real Data</Typography>
                    <Typography color="textSecondary">Real DATE</Typography>
                    <Typography variant = "body2">Number of deaths caused by  COVID-19</Typography>
                </CardContent>
                </Grid>
            </Grid>
            
        </div>
    )
}
export default Cards;