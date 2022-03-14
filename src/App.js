import {Container} from "./components/container"
import {ContentStyle} from "./components/Content.style"

function App() {
  return (
    <div className="App" style={{display:"grid",placeItems:"center",backgroundColor:"rgb(244, 252, 249)"}}>
      <Container>
        <ContentStyle></ContentStyle>
      </Container>
    </div>
  );
}

export default App;
