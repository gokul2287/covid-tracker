import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";
import CountUp from 'react-countup';

function InfoBox({ title, cases, total, active, isRed, ...props }) {
  console.log(title, active);
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
          <CountUp start = {0} end = {cases} duration = {2.5} separator = ","></CountUp>
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          Total numbers : {total} 
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
