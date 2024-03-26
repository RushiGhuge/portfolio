import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SchoolIcon from "@mui/icons-material/School";
import CreateIcon from "@mui/icons-material/Create";
import "./style.css";
import { useEffect, useState } from "react";

export default function TimeLine() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  console.log(innerWidth);

  const alignTimeLine =
    innerWidth > 800
      ? {}
      : {
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        };

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="timeline-container">
      <Timeline
        position={`${innerWidth > 800 ? "alternate" : "right"}`}
        sx={alignTimeLine}
      >
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="var(--text)"
          >
            Feb 2024 - Now
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary" variant="outlined">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "50px", px: 2 }}>
            <Typography variant="h6" component="span">
              ISchoolConnect | FullStack Developer Intern
            </Typography>
            <Typography>
              Building experience as a full-stack developer, mastering
              technologies, including Angular, Nest.js, git
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="var(--text)"
          >
            2020 - 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <EngineeringIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "50px", px: 2 }}>
            <Typography variant="h6" component="span">
              Engineering (E&TC)
            </Typography>
            <Typography>
              JSPM's Imperial College of Engineering and Research,
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="var(--text)"
          >
            2018-2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "50px", px: 2 }}>
            <Typography variant="h6" component="span">
              Diploma | Electronics and Telecommunication
            </Typography>
            <Typography>Government College of Aurangabad</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="var(--text)"
          >
            2016-2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "50px", px: 2 }}>
            <Typography variant="h6" component="span">
              12th
            </Typography>
            <Typography>Shiv Chhatrapati College | Aurangabad</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="var(--text)"
          >
            2015-2016
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary" variant="outlined">
              <CreateIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "50px", px: 2 }}>
            <Typography variant="h6" component="span">
              10th
            </Typography>
            <Typography>Sushila Devi Deshmukh School | Aurangabad</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
