import avatarTest from '../../assets/images/Hansel.png';
import logo from '../../assets/images/Logo.png';
import picture from '../../assets/images/Picture2.png';
import rectangle from '../../assets/images/Rectangle.png';
import circle from '../../assets/images/Circle.png';
import ellipse from '../../assets/images/Ellipse.png';
import styled from './TweetItem.module.scss';

const TweetItem = ({ id, avatar, tweets, followers, following }) => {

    const followersNormalize = followers.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    const handleFollowers =  () => {
        if (!following) {
            return followers + 1;
        }

        return followers - 1;
    };

    return (
        <li className={styled.item}>
            <div className={styled.logoWrapper}>
                <img className={styled.logo}
                    src={logo}
                    alt='Logo'
                    width='76'
                    height='22'    
                />
            </div>
            <div className={styled.pictureWrapper}>
                <img className={styled.picture}
                    src={picture}
                    alt='Pic'
                    width='308'
                    height='168'  
                />
            </div> 
            <div className={styled.rectangleWrapper}> 
                <img className={styled.rectangle}
                    src={rectangle}
                    alt='rectangle'
                    width='380'
                    height='8'   
                />
            </div>
            <div className={styled.avatarBox}>
                <div className={styled.circleWrapper}>
                    <img className={styled.circle}
                        src={circle}
                            alt='circle'
                            width='80'
                            height='80'   
                        />
                </div>
                <div className={styled.ellipseWrapper}>
                    <img className={styled.ellipse}
                            src={ellipse}
                            alt='ellipce'
                            width='90'
                            height='90'   
                        />
                </div>
                    <div className={styled.avatarWrapper}>
                        <img className={styled.avatar}
                            src={avatarTest}
                            // src={avatar}
                            alt='avatar'
                            width='62'
                            height='62'   
                        />
                    </div>
                
                    
            </div>
            <div className={styled.infoWrapper}>
                    <div className={styled.tweets}>
                        <span className={styled.tweetsText}>
                            {tweets} TWEETS
                        </span>
                    </div>
                    <div className={styled.followers}>
                        <span className={styled.followersText}>
                            {followersNormalize} FOLLOWERS
                        </span>
                    </div>
                    
            </div>
            <button
                className={styled.btnFollow}
                type='button'
                onClick={() => handleFollowers(id, followers, following)}
            >
                <span className={styled.btnText}>
                    FOLLOW
                </span>
            </button>
        </li>
    )

}

export default TweetItem;