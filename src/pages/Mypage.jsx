import React, { useState } from "react";
import { useResetRecoilState } from "recoil";
import { authJwtAtom } from "../recoil/auth/atoms";

import { NewContainer, NewContainerInnerScroll } from "../styles/Container";

import PrevRecord from "../assets/Mypage/prev-record.svg";
import PrevRecordHover from "../assets/Mypage/prev-record-hover.svg";
import MainMug from "../assets/Mypage/mainmug.svg";

import ImgBottle from "../assets/Mypage/bottle.svg";
import ImgBottleHover from "../assets/Mypage/bottle-hover.svg";
import ImgCup from "../assets/Mypage/cup.svg";
import ImgCupHover from "../assets/Mypage/cup-hover.svg";
import ImgCustom from "../assets/Mypage/custom.svg";
import ImgCustomHover from "../assets/Mypage/custom-hover.svg";
import ImgSip from "../assets/Mypage/sip.svg";
import ImgSipHover from "../assets/Mypage/sip-hover.svg";

import styled from "styled-components";
import { nenu, pretendard } from "../styles/fonts";
import GroupOnOffToggle from "../components/Mypage/GroupOnOffToggle";
import LastLog from "../components/Mypage/LastLog";
import AttendanceCheck from "../components/Mypage/AttendanceCheck";

function Mypage() {
  const resetAuth = useResetRecoilState(authJwtAtom);

  const [groupMode, setGroupMode] = useState(false);
  const [showRecord, setShowRecord] = useState("init");

  return (
    <NewContainerInnerScroll style={{ backgroundColor: "#EDECEB" }}>
      <AttendanceCheck />
      <LastLog show={showRecord} setShow={setShowRecord} />
      <div>
        <button onClick={() => resetAuth()}>로그아웃</button>
      </div>

      <TopBlock.wrapper>
        <TopBlock.left>
          <HoverImageSpan onClick={() => setShowRecord("show")}>
            <img src={PrevRecord} draggable={false} />
            <img className="hover" src={PrevRecordHover} draggable={false} />
          </HoverImageSpan>
        </TopBlock.left>
        <TopBlock.center>
          <LevelIconBox>
            <LevelBoxIconContent.dayNum>#01</LevelBoxIconContent.dayNum>
            <LevelBoxIconContent.weekNum>WEEK 2</LevelBoxIconContent.weekNum>
            <LevelBoxIconContent.desc>
              Drinking
              <br />
              Water
            </LevelBoxIconContent.desc>
          </LevelIconBox>
          <CurrentLevel>Lv.3</CurrentLevel>
        </TopBlock.center>
        <TopBlock.right>
          <span onClick={() => setGroupMode((prev) => !prev)}>
            <GroupOnOffToggle clicked={groupMode} />
          </span>
        </TopBlock.right>
      </TopBlock.wrapper>
      <MainMugArea>
        <img src={MainMug} />
      </MainMugArea>

      <WaterButtons>
        <WaterButton>
          <HoverImageSpan>
            <img src={ImgSip} draggable={false} />
            <img className="hover" src={ImgSipHover} draggable={false} />
          </HoverImageSpan>
          <div className="text">한 모금</div>
        </WaterButton>
        <WaterButton>
          <HoverImageSpan>
            <img src={ImgCup} draggable={false} />
            <img className="hover" src={ImgCupHover} draggable={false} />
          </HoverImageSpan>
          <div className="text">한 컵</div>
        </WaterButton>
        <WaterButton>
          <HoverImageSpan>
            <img src={ImgBottle} draggable={false} />
            <img className="hover" src={ImgBottleHover} draggable={false} />
          </HoverImageSpan>
          <div className="text">한 병</div>
        </WaterButton>
        <WaterButton>
          <HoverImageSpan>
            <img src={ImgCustom} draggable={false} />
            <img className="hover" src={ImgCustomHover} draggable={false} />
          </HoverImageSpan>
          <div className="text">직접추가</div>
        </WaterButton>
      </WaterButtons>
    </NewContainerInnerScroll>
  );
}

export default Mypage;

const TopBlock = {
  wrapper: styled.div`
    padding-top: 171px; // Header 없어서 임시
    display: flex;
    align-items: flex-end;
    margin-bottom: 3px;

    & > * {
      /* border: 1px solid red; */
      box-sizing: border-box;
    }

    img {
    }
  `,
  left: styled.div`
    flex: 1 1 150px;
    width: 150px;
    * {
      float: right;
      margin-right: 13px;
    }
  `,
  center: styled.div`
    flex: 0 0 300px;
    width: 300px;
    padding-bottom: 19px;
  `,
  right: styled.div`
    flex: 1 1 150px;
    width: 150px;
    padding-left: 26px;
  `,
};

const LevelIconBox = styled.div`
  ${nenu}
  border: 1px solid black;
  padding: 8px 11px;
  /* width: calc(129px - 22px); */
  width: 129px;
  border-radius: 10px;
  box-sizing: border-box;
  margin: auto;
  margin-bottom: 60px;
`;

const LevelBoxIconContent = {
  dayNum: styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    /* identical to box height */
    text-transform: uppercase;

    color: #000000;
  `,
  weekNum: styled.div`
    /* week 2 */

    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
    text-transform: uppercase;

    color: #000000;

    margin-bottom: 11px;
  `,
  desc: styled.div`
    /* Drinking water */

    font-style: normal;
    font-weight: 450;
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;

    color: #000000;
  `,
};

const HoverImageSpan = styled.span`
  & {
    cursor: pointer;
  }

  & .hover {
    display: none;
  }

  &:hover .hover {
    display: inline;
  }

  &:hover img:not(.hover) {
    display: none;
  }
`;

const CurrentLevel = styled.div`
  /* Lv.3 */

  ${pretendard}
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  text-transform: capitalize;

  color: #000000;
  text-align: center;
`;

const MainMugArea = styled.div`
  text-align: center;
  margin-bottom: 54px;
`;

const WaterButtons = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 85px;
`;

const WaterButton = styled.div`
  padding: 8px;
  ${HoverImageSpan} {
    display: block;
  }
  .text {
    /* 한 모금 */
    ${pretendard}
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    text-transform: uppercase;

    color: #000000;
  }
`;
