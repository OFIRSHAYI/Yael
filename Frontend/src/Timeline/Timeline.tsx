import { FC } from "react"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export const TimelinePage: FC = () => {
  return ( 
    <Timeline position="alternate" sx={{ 
      width: {
        sx: "90vw",
        md: "60vw"
      }, 
      }}>
      <TimelineItem>
        <TimelineOppositeContent variant="h4">
          ההודעה הראשונה
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white" variant="h4">07/05/24</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent variant="h4">
          הסינון הראשון והאחרון
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white" variant="h4">11/05/24</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent variant="h4">
          היציאה הראשונה שלנו לבד
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white" variant="h4">16/06/24</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent variant="h4">
          ה"אני אוהב אותך" הראשון
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white" variant="h4">19/06/24</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent variant="h4">
          הנשיקה הראשונה 
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white" variant="h4">23/06/24</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent variant="h4">
          התמונה הראשונה
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white" variant="h4">29/06/24</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent variant="h4">
          השינה הראשונה ביחד
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white" variant="h4">05/07/24</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent variant="h4">
          היום הולדת הראשון
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white" variant="h4">20/07/24</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent variant="h4">
          החופשה הראשונה
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white" variant="h4">02/08/24</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent variant="h4">
          הפרחים הראשונים
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white" variant="h4">19/08/24</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent variant="h4">
          ההופעה הראשונה
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white" variant="h4">22/08/24</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent variant="h4">
          הילדה הראשונה שלנו
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white" variant="h4">27/08/24</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent variant="h4">
          ה🥨 הראשון
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white" variant="h4">06/09/24</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent variant="h4">
          הטיסה הראשונה
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white" variant="h4">16/10/24</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent variant="h4">
          הגיוס הראשון
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white" variant="h4">17/11/24</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent variant="h4">
          חצי שנה
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="white" variant="h4">23/12/24</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}