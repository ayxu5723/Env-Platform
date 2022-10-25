// import React, { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { useQuery, useMutation } from '@apollo/client';
// import { Modal, Button, Label, Textarea } from 'flowbite-react';


// import { UPDATE_ANNOUNCEMENT } from '../utils/mutations';
// import { QUERY_ME } from '../utils/queries';

// const UpdateModal = ({open}) => {
//   if (!open)
//   return null

//   const { announcementId } = useParams();
//   const { loading: userloading, error: userError, data:userData } = useQuery(QUERY_ME)
//   const [updateAnnouncement, { error }] = useMutation(UPDATE_ANNOUNCEMENT);
//   const announcementText = userData?.me?.announcements?.filter((m) => m.announcement._id === announcementId)

//   const [formState, setFormState] = useState({
//     announcementId: '',
//     announcementText: ''
//     })

//     if (userLoading) {
//       return 'Loading...'
//   }
//   if (userError) {
//       return `Error: ${userError.message}`
//   }

//   if (! formState.announcementId) {
//       setFormState({
//           announcementId: announcementData[0].announcement._id,
//           announcementText: announcementData[0].announcementText
//       });
//   }

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(announcementText)

//     try {
//       const { data } = await updateAnnouncement({
//         variables: {
//           _id: formState.announcementId,
//           announcementText: formState.announcementText
//         },
//       });

//       // setAnnouncementText(announcementText);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     console.log(event.target)
    
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
    
//   };

//   return (
//     <div>
//       <Modal
//         open={false}
//         size="md"
//         popup={true}
//         onClose={onClose}
//       >
//     <Modal.Header />
//     <Modal.Body>
//       <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
//         <h3 className="text-xl font-medium text-gray-900 dark:text-white">
//           Update your announcement
//         </h3>
   

//         <form className="flex flex-row justify-center"
//           onSubmit={handleFormSubmit}>
//           <div className="mb-2 block">
//             <Label
//               htmlFor="announcementText"
//               value="Announcement"
//             />
//           </div>
//           <Textarea
//             id="announcementText"
//             placeholder={announcementText}
//             required={true}
//             rows={4}
//             onChange={handleChange}
//           />
//           <div className="w-full">
//             <Button type="submit">
//               Save
//             </Button>
//           </div>
//           {error && (
//           <div className="my-3 bg-red-500 text-black p-3">
//             {error.message}
//           </div>
//           )}
//         </form>

//       </div>
//     </Modal.Body>
//   </Modal>
//   </div>
//   )
// }

// export default UpdateModal