import React from 'react';


import styled from './TweetItem.module.css';

const TweetItem = ({ data, }) => {
    const { id, avatar, tweets, followers } = data;

    return (
        <li>
            <div>
                <div className={styled.imageWrapper}>
                    <img className={styled.image}
                        // src={image}
                        alt='Your pet'
                        width='280'
                    />
                </div>
                <div className={styled.info}>
                    <img className={styled.image}
                        src={avatar}
                        alt='Your avatar'
                        width='280'
                    />
                </div>
                <div className={styled.info}>
                    <span className={styled.infoText}>
                        {tweets} TWEETS
                    </span>
                    <span className={styled.infoText}>
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


            </div>
        </li>
    )

}

export default TweetItem;