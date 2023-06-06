import { useSetRecoilState } from "recoil";
import { Container } from "../components/container";
import { Header } from "../components/header";
import { isDarkAtom } from "../state/atoms";

const Home = () => {
  // 아톰의 value를 변경하기 위해 useSetRecoilState 사용
  const setterTheme = useSetRecoilState(isDarkAtom);

  return (
    <>
      <Header>
        Header
        <button onClick={() => setterTheme((prev) => !prev)}>
          change theme
        </button>
      </Header>
      <Container>
        <h1>gh</h1>
      </Container>
    </>
  );
};

export default Home;
