import { meetings } from "../../data/meetings.json";

const MEETING_DURATION_HOURS = 1;

export function filterMeetings() {
  const upcomingMeetings = [];
  const previousMeetings = [];

  const currentDate = new Date();
  
  for (const item of meetings) {
    
    const timeSplit = /^([0-9]+)(:*[0-9]+)\s*(am|pm)$/i.exec(item.time);
    const endTime = (timeSplit) ? parseInt(timeSplit[1]) + MEETING_DURATION_HOURS + timeSplit[2] + " " + timeSplit[3] : "";

    const date = new Date(item.date.replaceAll(/(st|nd|rd|th),/gu, "") + " " + endTime);

    if (date >= currentDate) {
      upcomingMeetings.push(item);
    } else {
      previousMeetings.push(item);
    }
  }

  return { upcomingMeetings, previousMeetings };
}
