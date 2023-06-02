// import { useState, useEffect, useCallback, Suspense } from 'react';
// import { Link, Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';

// import TweetsList from '../../modules/TweetsList/TweetsList';
import styled from './TweetsPage.module.css';

const TweetsPage = ()=> {
    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from || '/tweets'; 
    // const goBack = useCallback(()=> navigate(from), [from, navigate]);

    return (
        <> <h1>Home
        </h1>
        {/* <div className="container" > */}
        {/* <Link
            state={{ from }}
            to={`/`}
            className={styled.link}
        >
            <button type="button" 
                    // onClick={goBack} 
                className={styled.btn}>
                Back
            </button>
        </Link> */}

        {/* <TweetsList />
        </div> */}
        
        </>
    ) 
}

export default TweetsPage;