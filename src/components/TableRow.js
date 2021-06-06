import styled from 'styled-components';

const TableRow = (props) => {
    const { rowTitle, data  } = props;

    return (
        <Row>
            <RowTitle>{rowTitle}</RowTitle>
            <RowData>{data}</RowData>
        </Row>
    );
};

const Row = styled.div`
    display: flex;
    width: 100%;
    align-content: center;
    jusify-content: center;
    vertical-align: middle;
`;

const RowTitle = styled.span`
    width: 100px;
    font-size: 30px;
    font-weight: bold;
    padding: 10px;
`;

const RowData = styled.span`
    width: 300px;
    font-size: 30px;
    padding: 10px;
`;

export default TableRow;