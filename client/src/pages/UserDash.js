import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { DELETE_ANNOUNCEMENT } from '../utils/mutations';



import Auth from '../utils/auth';
import AnnouncementForm from '../components/AnnouncementForm';
import MyAnnouncementList from '../components/MyAnnouncements';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const [deleteAnnouncement, { deleteAnnouncementError }] = useMutation(DELETE_ANNOUNCEMENT,     
    {refetchQueries: [
    {query: QUERY_ME},

  ]})
  const handleDeleteAnnouncement = async (announcementId) => {
    try {
      const { data } = await deleteAnnouncement ({
        variables: {
          announcementId: announcementId
        },
      });
      console.log(data)
    } catch (err) {
      console.error(err);
    }
  };

  const user = data?.me || data?.user || {};
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to='/me' />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div className='bg-tree-image w-full h-full bg-cover bg-center grid md:grid-cols-2 items-center justify-start px-4'>
      <div class="overflow-hidden bg-white shadow sm:rounded-lg col-auto top-40">
        <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg font-medium leading-6 text-gray-900">{user.username}'s` Profile</h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details</p>
      </div>
      <div class="border-t border-gray-200">
        <dl>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Username</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.username}</dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Email Address</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user.email}</dd>
        </div>
        </dl>
      </div>

    </div>
    <div className="col-auto mb-5 bg-white/80">
      <h2 className="text-xl text-black">Your Recent Announcements</h2>
        <MyAnnouncementList 
          announcements={user.announcements}
          title={`${user.username}'s announcements`}
          showTitle={false}
          showUsername={false}
          deleteAnnouncement={handleDeleteAnnouncement}
        />
      </div>
      <div className="col-auto mb-5 bg-white/80 px-4 py-4 rounded-sm">
        <AnnouncementForm />
      </div>
      
  </div>
  );
};

export default Profile;