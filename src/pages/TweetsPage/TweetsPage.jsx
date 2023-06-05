import React, { useState, useEffect }  from 'react';
import { useLocation, Link } from 'react-router-dom';
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
    const location = useLocation();
    const from = location.state?.from || '/tweets'; 

    useEffect(() => {
        dispatch(fetchAllUsers({ page: page }));
    }, [dispatch, page]);

    const loadMore = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    return (
        <>
        <Section className={styled.tweetsListWrapper}>
            <TweetsList />
            
            <LoadMoreBtn onClick={() => {
                loadMore();
            }}/> 
            <Link
                state={{ from }}
            to={`/`}
            className={styled.link}
        >
            <button type="button" 
                className={styled.btnGoBack}>
                GO Back
            </button>
        </Link> 
        </Section>
        </>
    )
}

export default TweetsPage;
