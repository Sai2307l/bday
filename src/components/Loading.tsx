import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100vh",
          height: "100vh",
          borderRadius: "50%",
          border: "10px solid #F1F1F1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: 14,
            color: "#F1F1F1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          I know Its taking time to load. Please wait and in the meantime, enjoy
          the view!
        </p>
        <p
          style={{
            fontSize: 14,
            color: "#F1F1F1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          {progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."}
        </p>
        <img
          src="../../public/sorry.jpg"
          alt="loader"
          style={{
            position: "absolute",
            width: 1280,
            height: 720,
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </Html>
  );
};

export default CanvasLoader;
