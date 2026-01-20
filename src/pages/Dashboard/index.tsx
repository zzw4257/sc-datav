import { useNavigate } from "react-router";
import styled from "styled-components";
import { useCityStore } from "@/stores/cityStore";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 40px;
  background-color: #f5f5f5;
  color: #333;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

const Preview = styled.div<{ $bg?: string }>`
  height: 160px;
  background-color: #eee;
  background-image: url(${(props) => props.$bg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: #ccc;
`;

const Content = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
`;

const CardMeta = styled.div`
  color: #666;
  font-size: 14px;
`;

const AddButton = styled(Card)`
  border: 2px dashed #ccc;
  box-shadow: none;
  background: transparent;
  align-items: center;
  justify-content: center;
  min-height: 250px;
  color: #666;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    border-color: #666;
    color: #333;
  }
`;

export default function Dashboard() {
  const navigate = useNavigate();
  const cities = useCityStore((state) => state.cities);

  return (
    <Wrapper>
      <Title>Select a Map</Title>
      <Grid>
        {/* Official Demo */}
        <Card onClick={() => navigate("/sichuan")}>
          <Preview $bg="/sc-datav/demo_0.jpg" />
          <Content>
            <CardTitle>Sichuan (Official)</CardTitle>
            <CardMeta>The default demonstration map</CardMeta>
          </Content>
        </Card>

        {/* User Maps */}
        {cities.map((city) => (
          <Card key={city.id} onClick={() => navigate(`/view/${city.id}`)}>
            <Preview $bg={city.mapTextureUrl} />
            <Content>
              <CardTitle>{city.name}</CardTitle>
              <CardMeta>Custom created map</CardMeta>
            </Content>
          </Card>
        ))}

        {/* Create New */}
        <AddButton onClick={() => navigate("/builder")}>
          + Create New Map
        </AddButton>
      </Grid>
    </Wrapper>
  );
}
