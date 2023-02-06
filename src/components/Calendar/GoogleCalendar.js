import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function GoogleCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      // Make a request to the Google Calendar API to retrieve the events
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/{calendarId}/events?key=AIzaSyBWF5HmDzc5fQjB04WNr1HJMYe1zoLwcL8`
      );
      const data = await response.json();
      setEvents(data.items);
    }

    fetchEvents();
  }, []);

  return (
    <Calendar
      className="pt-20"
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
    />
  );
}

export default GoogleCalendar;
