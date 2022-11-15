export function QRCode(props) {
  return (
    <div className="qr-code">
      <img className="qr-code__image" src={props.image} alt="QR code" />
      <h1 className="qr-code__title">{props.title}</h1>
      <p className="qr-code__description">{props.description}</p>
    </div>
  );
}