import React from 'react';

import styled from './TweetItem.module.scss';

const TweetItem = ({ id, avatar, tweets, followers }) => {
    // const { id, avatar, tweets, followers } = data;

    return (
        <li className={styled.item}>
            {/* <div className={styled.itemImage}> 
                <div className={styled.imageWrapper}>
                    <img className={styled.image}
                        // src={image}
                        alt='Your pet'
                        width='50'
                    />
                </div> */}
                <div className={styled.avatarWrapper}>
                    <img className={styled.avatar}
                        src={avatar}
                        alt='Your avatar'
                        width='50'
                    />
                </div>
                <div className={styled.infoWrapper}>
                    <span className={styled.tweetsText}>
                        {tweets} TWEETS
                    </span>
                    <span className={styled.followersText}>
                        {followers} FOLLOWERS
                    </span>
                </div>
                    <button
                    className={styled.buttonOnClickModal}
                    type='button'
                    // onClick={() => toggleModal(_id, 'LeanMove')}
                    >
                        <span className={styled.buttonText}>
                            FOLLOW
                        </span>
                </button>


            {/* </div> */}
        </li>
    )

}

export default TweetItem;