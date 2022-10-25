import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { Label, Textarea } from 'flowbite-react';
import Auth from '../utils/auth';

import { UPDATE_ANNOUNCEMENT } from '../utils/mutations';
import { QUERY_SINGLE_ANNOUNCEMENT } from '../utils/queries';

const UpdateSingleAnnouncement = () => {

  const { announcementId } = useParams();
  
  const { loading, error, data } = useQuery(QUERY_SINGLE_ANNOUNCEMENT, {
    variables: {
      announcementId : announcementId,
    }
  })
  const [updateAnnouncement] = useMutation(UPDATE_ANNOUNCEMENT);


  const [announcementText, setAnnouncementText] = useState('');

    if (loading) {
      return 'Loading...'
    }
    if (error) {
      return `Error: ${error.message}`
    }


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    

    try {
      const { data } = await updateAnnouncement({
        variables: {
          _id: announcementId,
          announcementText: announcementText
        },
      });

      // setAnnouncementText(announcementText);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    console.log(event.target)
    
    setAnnouncementText(value);
    
  };

  return (
    <div className="bg-ocean-trash-image w-full h-full bg-cover bg-center flex justify-center items-center px-4">
      <div className="bg-white/80 rounded-md grid-cols-1 w-1/2">
        <h3 className="px-4 py-3 text-2xl">Update your announcement</h3>
        
        {Auth.loggedIn() ? (
          <>

        <form className="flex flex-col justify-center items-center"
        onSubmit={handleFormSubmit}>
          <div id="textarea" className = "w-3/4">
            <div className="mb-2 block">
              <Label
                htmlFor="announcementText"
                value="Your announcement"
              />
            </div>
            <Textarea
              id="announcementText"
              placeholder={data.announcementText}
              required={true}
              rows={4}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="rounded-md px-3 py-2 hover:text-white bg-blue-700 mt-5 mb-5" type="submit">
              Update
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
      </div>
    )

}

export default UpdateSingleAnnouncement