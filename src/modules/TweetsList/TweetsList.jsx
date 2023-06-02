import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from 'react';

import { fetchAllUsers } from "../../redux/users/users-operations";
import { getAllUsers } from "../../redux/selectors";

import TweetItem from '../TweetItem/TweetItem';
import styled from './TweetsList.module.css';

const TweetsList = () => {

    const dispatch = useDispatch();
    const users = useSelector(getAllUsers);

    useEffect(()=> {
        dispatch(fetchAllUsers());
    }, [dispatch])

    return (
        <>
        <div className={styled.listWrapper}>
        <ul className={styled.list}>
            {users?.data.map((items) => {
                return( <TweetItem
                    key={items.id}
                    data={items}
                    // toggleModal={handleOpenModal}
                    // deleteNotices={handleOpenModal}
                    // addFavorite={handleAddFavorite}
                    // deleteFavorite={handleDeleteFavorite}
                    // userID={user._id}
                    // className={category === 'favorite' && !items.favorite.includes(user._id) ? styled.isHidden : ''}
                />)
            })}
        </ul>

        </div>

        </>
    )

}

export default TweetsList;