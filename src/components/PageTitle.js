import styled from 'styled-components';

const PageTitle = (props) => {
    const { title, subTitle } = props;
    
    return (
        <>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
        </>
    );
};

const Title = styled.div`
    font-size: 36px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SubTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default PageTitle;