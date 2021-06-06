import styled from 'styled-components';

const TableRowWithImage = (props) => {
    const { data , handleRowClick } = props;
    const { id, rank, title, singer, imageUrl } = data;
    const IMAGE_FILE_PATH = "images/";

    return (
        <Row onClick={() => handleRowClick(id)}>
            <RankCol>{rank}</RankCol>
            <ImageCol src={"fallback.png"}/>
            <AlignLeftCol>{title}</AlignLeftCol>
            <AlignRightCol>{singer}</AlignRightCol>
        </Row>
    );
};

const Row = styled.li`
    display: flex;
    width: 100%;
    height: 50px;
    cursor: pointer;
    align-content: center;
    vertical-align: middle;
`;

const RankCol = styled.span`
    width: 3%;
    font-weight: bold;
    padding: 10px;
`;

const ImageCol = styled.img`
    height: 100%;
`;

const AlignLeftCol = styled.span`
    width: 40%;
    text-align: left;
    padding: 10px;
`;

const AlignRightCol = styled.span`
    width: 40%;
    text-align: right;
    padding: 10px;
`;

export default TableRowWithImage;