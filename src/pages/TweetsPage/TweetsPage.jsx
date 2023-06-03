// import {  Suspense } from 'react';
// import {  Outlet } from 'react-router-dom';
// import TweetItem from 'modules/TweetItem/TweetItem';
import TweetsList from '../../modules/TweetsList/TweetsList';
// import Section from '../../modules/Section/Section';
// import styled from './TweetsPage.module.css';

const TweetsPage = ()=> {
    return (
        <>

        
        {/* <Section className={styled.searchWrapper}> */}
        {/* <h1>TweetsPage
        </h1> */}
        {/* <TweetItem /> */}
        <TweetsList />
        {/* </Section> */}
    
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