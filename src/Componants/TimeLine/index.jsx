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
import { motion } from "framer-motion";

const timelineData = [
  {
    date: "Feb 2025 - Now",
    title: "ISchoolConnect | Junior Software Engineer",
    description:
      "Building experience as a full-stack developer, mastering technologies, including Angular, Nest.js, git",
    icon: <LaptopMacIcon />,
    dotColor: "secondary",
    dotVariant: "outlined",
  },
  {
    date: "2020 - 2023",
    title: "Engineering (E&TC)",
    description: "JSPM's Imperial College of Engineering and Research",
    icon: <EngineeringIcon />,
    dotColor: "primary",
    dotVariant: "",
  },
  {
    date: "2018 - 2020",
    title: "Diploma | Electronics and Telecommunication",
    description: "Government College of Aurangabad",
    icon: <SchoolIcon />,
    dotColor: "primary",
    dotVariant: "outlined",
  },
  {
    date: "2016 - 2018",
    title: "12th",
    description: "Shiv Chhatrapati College | Aurangabad",
    icon: <SchoolIcon />,
    dotColor: "primary",
    dotVariant: "outlined",
  },
  {
    date: "2015 - 2016",
    title: "10th",
    description: "Sushila Devi Deshmukh School | Aurangabad",
    icon: <CreateIcon />,
    dotColor: "secondary",
    dotVariant: "outlined",
  },
];

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
    <motion.div
      initial={{ opacity: 0, y: 400 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="timeline-container"
    >
      <Timeline
        position={`${window.innerWidth > 800 ? "alternate" : "right"}`}
        sx={alignTimeLine}
      >
        {timelineData.map((item, index) => (
          <TimelineItem key={index} tabIndex={0}>
            <TimelineOppositeContent
              sx={{ m: "auto 0", fontFamily: "Space Grotesk" }}
              variant="body2"
              color="var(--text)"
            >
              {item.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color={item.dotColor} variant={item.dotVariant}>
                {item.icon}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "50px", px: 2 }}>
              <Typography variant="h6" component="span">
                {item.title}
              </Typography>
              <Typography>{item.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </motion.div>
  );
}
