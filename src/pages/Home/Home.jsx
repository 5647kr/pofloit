import styled from "styled-components";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import UserFetch from "../../api/UserFetch";

export default function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const userData = async () => {
      const data = await UserFetch();
      setUser(data);
    };
    userData();
  }, []);

  return (
    <CardSection>
      <ul>
        {user.map((item) => {
          return (
            <li key={item.id}>
              <Card
                name={item.name}
                desc={item.desc}
                bgImg={item.bgImg}
                profileImg={item.profileImg}
                tag={item.tag}
                color={item.personalColor}
              />
            </li>
          );
        })}
      </ul>
    </CardSection>
  );
}

const CardSection = styled.section`
  height: 100%;
  padding-block: 40px;
  & > ul {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }

  & > ul > li {
    height: 100%;
  }
`;
