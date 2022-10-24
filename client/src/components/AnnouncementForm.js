import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { Label, Textarea } from 'flowbite-react';


import { ADD_ANNOUNCEMENT } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const AnnouncementForm = () => {
  const [announcementText, setAnnouncementText] = useState('');


  const [addAnnouncement, { error }] = useMutation(ADD_ANNOUNCEMENT, {
  //   update(cache, { data: { addAnnouncement } }) {
  //     // try {
  //     //   const { announcements } = cache.readQuery({ query: QUERY_ANNOUNCEMENTS });

  //     //   cache.writeQuery({
  //     //     query: QUERY_ANNOUNCEMENTS,
  //     //     data: { announcements: [addAnnouncement, ...announcements] },
  //     //   });
  //     // } catch (e) {
  //     //   console.error(e);
  //     // }

  //     // update me object's cache
  //     // const { me } = cache.readQuery({ query: QUERY_ME });
  //     // cache.writeQuery({
  //     //   query: QUERY_ME,
  //     //   data: { me: { ...me, announcements: [...me.announcements, addAnnouncement] } },
  //     // });
  //   },

    refetchQueries: [
      {query: QUERY_ME},

    ],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(announcementText)

    try {
      const { data } = await addAnnouncement({
        variables: {
          announcementText,
          username: Auth.getProfile().data.username,
        },
      });

      setAnnouncementText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    console.log(event.target)
    
    setAnnouncementText(value);
    
  };

  return(
    <div>
      <h3>What have you got going on?</h3>

      {Auth.loggedIn() ? (
        <>

      <form className="flex flex-row justify-center"
      onSubmit={handleFormSubmit}>
        <div id="textarea">
          <div className="mb-2 block">
            <Label
              htmlFor="announcementText"
              value="Your announcement"
            />
          </div>
          <Textarea
            id="announcementText"
            placeholder="Create an announcement"
            required={true}
            rows={4}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="rounded-md px-3 py-2 hover:text-white bg-blue-700" type="submit">
            Post Announcement
          </button>
        </div>
        {error && (
          <div className="my-3 bg-red-500 text-black p-3">
            {error.message}
          </div>
          )}
      </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
        
      )}
    </div>
  )

}

export default AnnouncementForm;