// import { createSelector } from "@reduxjs/toolkit";

export const getAllUsers = store => store.users.items;

// export const getFilter = store => store.filter;

// export const getFilteredContacts = createSelector(
//     [getAllContacts, getFilter],
//     (allContacts, filter) => {
//       if(filter){
//         return allContacts.filter(contact =>      
//         contact.name.toLowerCase().includes(filter.toLowerCase()));
//       } else {
//         return allContacts;
//       }
// }); 