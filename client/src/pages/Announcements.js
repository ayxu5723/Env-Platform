import React from 'react'
import { QUERY_ANNOUNCEMENTS } from '../utils/queries';
import { useQuery } from '@apollo/client';
import AnnouncementList from '../components/AnnouncementList';

const Announcements = () => {
  const { loading : loadingAnnouncements, data : announcementsdata } = useQuery( QUERY_ANNOUNCEMENTS );
  const announcements = announcementsdata?.announcements || [];

  if (loadingAnnouncements) {
    return <div>Loading...</div>;
  }
  console.log(announcements)
  return (
    <div className="w-full h-full bg-pollution-image bg-cover bg-center flex justify-center align-center">
      <div className="col-auto mb-5 bg-white/80 h-max mt-80 rounded-md px-5 py-5">
        <h2 className="text-xl text-black">Recent Announcements</h2>
          <AnnouncementList 
            announcements={announcements}
            title={`${announcements.username}'s announcements`}
            showTitle={false}
            showUsername={true}
          />
      </div>
    </div>
  )
}

export default Announcements