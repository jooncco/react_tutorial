import styled from 'styled-components';

const TabNav = (props) => {
    const { activeTab, handleTabClick } = props;
    const tabTitles = [ 'A', 'B' ];

    return (
        <Container>
            {tabTitles.map((title, idx) => {
                return (
                    <Tab
                        key={idx}
                        onClick={() => handleTabClick(idx)}
                        style={{ background: activeTab === idx ? "cornflowerblue" : "none" }}
                    >
                        {title}
                    </Tab>
                );
            })}
        </Container>
    );
};

const Container = styled.ul`
    display: flex;
    justify-content: left;
    width: 500px;
    font-size: 20px;
    list-style: none;
`;

const Tab = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 35px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;
`;




export default TabNav;