import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dateformat from 'dateformat';
import styled from 'styled-components';
import PageTitle from '../components/PageTitle';
import TabNav from '../components/TabNav';
import TableWithImage from '../components/TableWithImage';
import RowDetailPage from './RowDetailPage';

const GET_CHART_LIST_URL = "http://localhost:3300/v1/chart/";
const GET_CHART_DETAIL_URL = "http://localhost:3300/v1/chart/detail/";
const CHART_TYPE = ["domestic", "overseas"];

const MainPage = (props) => {
    let [pageIdx, setPageIdx] = useState(0);
    let [activeTab, setActiveTab] = useState(0);
    let [trackList, setTrackList] = useState([]);
    let [trackDetailInfo, setTrackDetailInfo] = useState({});

    useEffect(() => {
        fetchTrackList(0);
    }, []);

    const fetchTrackList = (id) => {
        axios.get(GET_CHART_LIST_URL + CHART_TYPE[id]).then((res) => {
            setTrackList(res.data.chartList);
        });
    };

    const fetchTrackDetailInfo = (id) => {
        axios.get(GET_CHART_DETAIL_URL + id).then((res) => {
            setTrackDetailInfo(res.data.chart);
        });
    }

    const handleTabClick = (idx) => {
        fetchTrackList(idx);
        setActiveTab(idx);
    };

    const handleTrackClick = (id) => {
        fetchTrackDetailInfo(id);
        setPageIdx(1);
    };

    const handleBackButtonClick = () => setPageIdx(0);

    return (
        <Container>
            {pageIdx === 0 ? (
                <>
                    <PageTitle
                        title={"음악차트"}
                        subTitle={dateformat(Date.now(), "yyyy년 mm월 dd일 HH:MM")}
                    />
                    <TabNav activeTab={activeTab} handleTabClick={handleTabClick} />
                    <TableWithImage dataList={trackList} handleRowClick={handleTrackClick} />
                </>
            ) : (
                <>
                    <RowDetailPage
                        rowDetailInfo={trackDetailInfo}
                        handleBackButtonClick={handleBackButtonClick}
                    />
                </>
            )}
        </Container>
    );
};

const Container = styled.div`
    margin: 80px;
    padding: 20px;
    border: 5px solid black;
`;

export default MainPage;