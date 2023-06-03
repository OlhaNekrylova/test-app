import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from 'react';

import { fetchAllUsers } from "../../redux/users/users-operations";
import { getAllUsers } from "../../redux/selectors";

import TweetItem from '../TweetItem/TweetItem';
import styled from './TweetsList.module.scss';

const TweetsList = () => {

    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(fetchAllUsers());
    }, [dispatch])

    const users = useSelector(getAllUsers);

    return (
        <>
        {/* { users.length === 0 && <p className={styled.noResult}>No results</p> } */}
        <div className={styled.listWrapper}>
        <ul className={styled.list}>
            {users?.map((user) => 
                    <TweetItem
                    key={user.id} 
                    id={user.id}
                    avatar={user.avatar}
                    tweets={user.tweets}
                    followers ={user.followers}
                    // data={user}
                    
                />
                    
                
            )}
        </ul>

        </div>

        </>
    )

}

// TweetsList.defaultProps = {
//     items: []
// }

export default TweetsList;