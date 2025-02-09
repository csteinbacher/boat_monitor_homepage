import { BOATS_TO_DISPLAY } from "@/constants";
import { HeaderContainer, MainContainer } from "./styles";
import BoatMonitor from "@/components/BoatMonitor";

function App() {
  return (
    <>
      <HeaderContainer>
        <h1>B IS FOR BOAT MONITOR</h1>
      </HeaderContainer>
      <MainContainer>
        {BOATS_TO_DISPLAY.map((boat, index) => (
          <BoatMonitor key={`monitor_${boat.name}_${index}`} boat={boat} />
        ))}
      </MainContainer>
    </>
  );
}

export default App;
