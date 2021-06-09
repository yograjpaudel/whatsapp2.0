import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{ displey: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="./images/whatsapp.png"
          style={{ marginBottom: "10" }}
          height={200}
          alt=""
        />
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
}

export default Loading;
