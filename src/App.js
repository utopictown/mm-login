import "./App.css";

import { WagmiConfig } from "wagmi";
import { client } from "./utils/wallet-client";
import { Profile } from "./components/profile";

function App() {
  return (
    <div className="App">
      <main style={{marginTop: '50vh'}}>
        <WagmiConfig client={client}>
          <Profile />
        </WagmiConfig>
      </main>
    </div>
  );
}

export default App;
