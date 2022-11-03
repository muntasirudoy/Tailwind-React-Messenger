import React, { useEffect } from 'react'
import Header from '../../components/header'
import LeftPanel from '../../components/left_panel'
import ChatBox from '../../components/chat_box'
import RightPanel from '../../components/right_panel'
import Drawer, {
  DrawerContainer,
  MainContentContainer,
} from 'react-swipeable-drawer'
import DrawerContent from '../common/DrawerContent'

const Dashboard = () => {
  return (
    <>
      <div className="main_body">
        <div className="right_shape"></div>
        <div className="left_shape"></div>

        <div className="main_content">
          {/* header */}
          <Header />
          <div className=" flex justify-between">
            {/* left panel */}
            <LeftPanel />
            {/* chat box */}
            <ChatBox />
            {/* right panel */}
            <RightPanel />
          </div>

          <Drawer position="left" size={80}>
            {({
              position,
              size,
              swiping,
              translation,
              mainContentScroll,
              toggleDrawer,
              handleTouchStart,
              handleTouchMove,
              handleTouchEnd,
            }) => (
              <div>
                <DrawerContainer
                  position={position}
                  size={size}
                  swiping={swiping}
                  translation={translation}
                  toggleDrawer={toggleDrawer}
                  handleTouchStart={handleTouchStart}
                  handleTouchMove={handleTouchMove}
                  handleTouchEnd={handleTouchEnd}
                  drawerContent={<DrawerContent />}
                />
                <MainContentContainer
                  translation={translation}
                  mainContentScroll={mainContentScroll}
                >
                  <LeftPanel />
                </MainContentContainer>
              </div>
            )}
          </Drawer>
        </div>
      </div>
    </>
  )
}

export default Dashboard
