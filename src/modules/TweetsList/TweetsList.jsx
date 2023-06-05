import { useSelector } from "react-redux";

import { selectAllUsers } from "../../redux/selectors";

import TweetItem from '../TweetItem/TweetItem';

import styled from './TweetsList.module.scss';

const TweetsList = () => {
    const users = useSelector(selectAllUsers);

    return (
        <>
        <div className={styled.listWrapper}>
        <ul className={styled.list}>
            {users?.map((user) => 
                <TweetItem
                    key={user.id} 
                    id={user.id}
                    avatar={user.avatar}
                    tweets={user.tweets}
                    followers ={user.followers}
                />
            )}
        </ul>
        </div>
        
        </>
    )

}

export default TweetsList;