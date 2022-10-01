import "./block.css";
export function Block() {
  return (
    <div className="box">
      <img src={require("./images/image-qr-code.png")} alt="qrcode"/>
      <div className="description">
        <h1> Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
