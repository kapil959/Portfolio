import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const months = {
  Jan: "1",
  Feb: "2",
  Mar: "3",
  Apr: "4",
  May: "5",
  Jun: "6",
  Jul: "7",
  Aug: "8",
  Sep: "9",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};
export default function WorkExBody({ work }) {
  const duration = React.useCallback(() => {
    let startMonth = work.start.month
      ? Object.keys(months).find(
          (key) => months[key] === work.start.month.toString()
        )
      : "";
    let endMonth = work?.end.month
      ? `${Object.keys(months).find(
          (key) => months[key] === work?.end?.month.toString()
        )} ${work.end.year}`
      : "Present";

    return `${startMonth} ${work.start.year} - ${endMonth}`;
  }, [work]);
  const workHighlights = () => {
    return work.highlights.map((highlight) => {
      return <li>{highlight}</li>;
    });
  };
  return (
    <Card>
      {" "}
      <CardContent>
        <Typography
          variant="h4"
          component="div"
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          <div className="positionCompany">
            {work.position} @{" "}
            <span className="companyName">{work.company}</span>
          </div>
          <div className="duration">{duration()}</div>
        </Typography>
        <ul>{workHighlights()}</ul>
      </CardContent>
    </Card>
  );
}
