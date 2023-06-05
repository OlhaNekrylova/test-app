// import { createSelector } from "@reduxjs/toolkit";

export const selectAllUsers = store => store.users.users;
export const selectTotalUsers = state => state.users.totalUsers;

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