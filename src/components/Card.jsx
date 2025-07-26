import styled from "styled-components";

export default function Card({ name, desc, bgImg, profileImg, tag, color }) {
  return (
    <CardWrap>
      <ImgWrap>
        <img src={bgImg} alt={name} />
        <ProfileImg>
          <img src={profileImg} alt={name} />
        </ProfileImg>
      </ImgWrap>
      <Title color={color}>{name}</Title>
      <InfoWrap>
        <p>{desc}</p>
        <ul>
          {tag.map((v, i) => {
            return <li key={i}>{v}</li>;
          })}
        </ul>
      </InfoWrap>
    </CardWrap>
  );
}

const CardWrap = styled.div`
  width: 100%;
  max-width: 300px;
  height: 400px;
  box-shadow: 0 4px 4px var(--sub-color);
  border-radius: 10px;
  overflow: hidden;
`;

const ImgWrap = styled.div`
  position: relative;
  height: 200px;
  & > img {
    width: 100%;
    height: inherit;
    /* object-fit: cover; */
  }
`;

const ProfileImg = styled.div`
  width: 70px;
  aspect-ratio: 1 / 1;
  box-shadow: 0 4px 4px var(--main-color);
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  right: 20px;
  top: 160px;
  & > img {
    width: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h3`
  padding: 10px 20px;
  background-color: ${({ color }) => color};
  color: ${({ color }) => (color === "#ffffff" ? "#000000" : "#FFFFFF")};
  font-size: 1.4rem;
  font-weight: var(--font-bw);
`;

const InfoWrap = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  height: calc(100% - 240px);
  background-color: var(--bg-color);
  & > p {
    font-size: 1.4rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  & > ul {
    display: flex;
    gap: 10px;
  }

  & > ul > li {
    background-color: #ebebeb;
    padding: 10px;
    border-radius: 10px;
    font-size: 0.8rem;
  }
`;
