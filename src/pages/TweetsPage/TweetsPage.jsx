import React, { useState, useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { fetchAllUsers } from "../../redux/users/users-operations";
import { selectTotalUsers } from "../../redux/selectors";

import Section from '../../modules/Section/Section';
import TweetsList from '../../modules/TweetsList/TweetsList';
import LoadMoreBtn from '../../modules/LoodMoreBtn/LoadMoreBtn';
import styled from './TweetsPage.module.scss';

const TweetsPage = ()=> {
    const [page, setPage] = useState(1);
    
    const totalUsers = useSelector(selectTotalUsers);
    const totalPages = totalUsers/3;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchAllUsers({ page: page }));
    }, [dispatch, page]);

    const onClick = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    return (
        <>
        <Section className={styled.tweetsListWrapper}>
            <TweetsList />
            { page < totalPages && <LoadMoreBtn onClick={ onClick }/> }
        </Section>
                
        {/* {LoadMoreBtn && <LoadMoreBtn onClick={loadMore}>Load more</LoadMoreBtn>}  */}
        
        </>
    )
}

export default TweetsPage;


// const TweetsPage = ()=> {
//     // const navigate = useNavigate();
//     // const location = useLocation();
//     // const from = location.state?.from || '/tweets'; 
//     // const goBack = useCallback(()=> navigate(from), [from, navigate]);

//     return (
//         <> <h1>Home
//         </h1>
//         {/* <div className="container" > */}
//         {/* <Link
//             state={{ from }}
//             to={`/`}
//             className={styled.link}
//         >
//             <button type="button" 
//                     // onClick={goBack} 
//                 className={styled.btn}>
//                 Back
//             </button>
//         </Link> */}

//         {/* <TweetsList />
//         </div> */}
        
//         </>
//     ) 
// }

// export default TweetsPage;