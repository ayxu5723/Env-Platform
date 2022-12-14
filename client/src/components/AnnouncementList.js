import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'flowbite-react';

const AnnouncementList = ({
  announcements,
  title,
  showTitle = true,
  }) => {
  if (!announcements.length) {
    return <h3>No Announcements Yet</h3>;
  }
  
  return (
    <div>
       {showTitle && <h3>{title}</h3>}

       {announcements && announcements.map((announcement) => (
      <Accordion alwaysOpen={true}>
        <Accordion.Panel key={announcement._id}>
          <Accordion.Title>

                <Link
                  className="text-black"
                  to={`/userdashboard/${announcement.username}`}
                >
                  {announcement.username} <br />
                  <span style={{ fontSize: '1rem' }}>
                    posted this on {announcement.createdAt}
                  </span>
                </Link>

          </Accordion.Title>
          
            <Accordion.Content >
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {announcement.announcementText}
              </p>
            </Accordion.Content>
            <Link
              className="bg-blue-700 px-3 py-2 border rounded-md"
              to={`/announcements/${announcement._id}`}
            >
              Come see who else is joining.
            </Link>
        

        </Accordion.Panel>
      </Accordion> 
  ))}
    </div>
  
  );
};

export default AnnouncementList;