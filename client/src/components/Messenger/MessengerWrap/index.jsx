import styled from 'styled-components';
import React, {useState}from 'react';
import MessengerRoom from './MessengerRoom';
import MessengerChatWrap from './MessengerChat';

const MessengerDiv= styled.div` 
    position:fixed;
    bottom:7rem;
    right:1rem;
    width:20rem;
    height:25rem;
    border:solid 0.1rem;
    border-color:#FEAA6E;
    background-color:white;

    &::after{
        content: '';
        position: absolute;
        border-top: 1rem solid #FEAA6E;
        border-right: 0.5rem solid transparent;
        border-left: 0.5rem solid transparent;
        bottom: -1rem;
        right: 1.5rem;
    } 
`;

const MessengerScroll = styled.div`
width:100%;
height:100%;
overflow-x:hidden;
overflow-y:auto;
`;
function MessengerWrap(props) {

    const [RoomList,setRoomList] = useState([
    <MessengerRoom clickroom={()=>{clickRoomList()}} Img={"A"} Name={"과장님"} RecentMsg={"ㅇ야ㅑ야야야야ㅑ야야야야ㅑ야야야ㅑ야야야야ㅑ양"}/>,
    <MessengerRoom Img={"B"} Name={"주임님"} RecentMsg={"부재중 전화 112통"}/>,
    <MessengerRoom Img={"E"} Name={"거래처"} RecentMsg={"부재중 전화 2통"}/>,
    <MessengerRoom Img={"A"} Name={"과장님"} RecentMsg={"부재중 전화 21통"}/>,
    <MessengerRoom Img={"B"} Name={"주임님"} RecentMsg={"부재중 전화 11통"}/>,
    <MessengerRoom Img={"E"} Name={"거래처"} RecentMsg={"부재중 전화 2통"}/>,
    <MessengerRoom Img={"A"} Name={"과장님"} RecentMsg={"부재중 전화 21통"}/>,
    <MessengerRoom Img={"B"} Name={"주임님"} RecentMsg={"부재중 전화 11통"}/>,
    <MessengerRoom Img={"E"} Name={"거래처"} RecentMsg={"부재중 전화 2통"}/>]);

    const [ChatHistory,setChatHistory] = useState(<MessengerChatWrap></MessengerChatWrap>);
    const [isRoomList,setIsRoomList] = useState(true);

    function initRoomList(){
        setRoomList([]);
    }
    function initChat(){
        setChatHistory([]);
    }
    function clickRoomList(){
        setIsRoomList(!isRoomList);
    }
    

    return (
        <MessengerDiv>
            <MessengerScroll>
                {isRoomList ? RoomList:ChatHistory}
            </MessengerScroll>
        </MessengerDiv>
    );
  }
  
  export default MessengerWrap;