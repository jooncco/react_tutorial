import PageTitle from '../components/PageTitle';
import Table from '../components/Table';

const RowDetailPage = (props) => {
    const { rowDetailInfo, handleBackButtonClick } = props;
    const { title, singer, melodizer, lyricist, genre } = rowDetailInfo;

    return (
        <>
            <div style={{display: "flex", alignContent: "left"}}>
                <button onClick={handleBackButtonClick}>Back</button>
            </div>
            <PageTitle title={title} subTitle={singer}/>
            <Table rowData={[lyricist, melodizer, genre]}/>
        </>
    );
};

export default RowDetailPage;