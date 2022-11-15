import './assets/styles/scss/main.scss';
import { QRCode } from "./components/QRCode";
import { Attribution } from "./components/Attribution";
import image from "./assets/images/image-qr-code.png";



function App() {
  return (
    <main className="main">
      <QRCode
        image={image}
        title="Improve your front-end skills by building projects"
        description="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level" />
      <Attribution
      />
    </main>
  );
}

export default App;
