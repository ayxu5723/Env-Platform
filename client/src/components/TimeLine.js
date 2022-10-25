import React from 'react';
import { Timeline } from 'flowbite-react';
import { FaCalendar } from 'react-icons/fa';

const AboutTimeLine = () => {
  return (
    <div className = "bg-white/80">
      <Timeline horizontal={true}>
        <Timeline.Item>
          <Timeline.Point icon={FaCalendar} />
          <Timeline.Content>
            <Timeline.Title>
              Register/Login to an account
            </Timeline.Title>
            <Timeline.Body>
              Get started by seeing what events are nearby.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={FaCalendar} />
          <Timeline.Content>
            <Timeline.Title>
              Contact Organizations/Users
            </Timeline.Title>
            <Timeline.Body>
              Get in touch and see which events you are interested in.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={FaCalendar} />
          <Timeline.Content>
            <Timeline.Title>
              Join up
            </Timeline.Title>
            <Timeline.Body>
              Get started on your journey towards helping the environment in a meaningful way!
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
    </Timeline>
    </div>
  )
}

export default AboutTimeLine