import React from "react"
import styled from "styled-components"

import TradeBox from "../../components/Molecules/TradeBox"
import InfiniteScroll from "../../components/InfiniteScroll"
import Footer from "../../components/Footer"
import dummy from "../../mock/myitems/myitems"

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60rem;
  height: 90%;
  padding: 1rem;
  margin: 5px auto;
  border-radius: 30px;
  overflow-y: auto;
  border: #dfdfdf solid 1px;
`

const ScrollFrame = styled.div`
  width: 60rem;
  height: 90%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

const TabContatiner = styled.div`
  width: 100%;
  height: 1rem;
  padding: 5px;
  margin: 5px 0;
`

const Page = props => {
  const fetcher = (delay = 1000) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dummy)
      }, delay)
    })

  const drawer = item => item.map(value => <TradeBox {...value} />)

  return (
    <Container>
      <ContentContainer>
        <ScrollFrame>
          <InfiniteScroll fetcher={fetcher} drawer={drawer} />
        </ScrollFrame>
      </ContentContainer>
      <Footer />
    </Container>
  )
}

export default Page