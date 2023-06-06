import { Container } from "../components/container";
import { Header } from "../components/header";

const Home = () => {
  return (
    <>
      <Header>
        Header
        <button>change theme</button>
      </Header>
      <Container>
        <h1>gh</h1>
      </Container>
    </>
  );
};

export default Home;
