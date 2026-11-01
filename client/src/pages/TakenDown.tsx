export default function MaintenancePage() {
    return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            textAlign: "center",
          }}
        >
          <h1>This website is under maintenance.</h1>
          <p style={{ color: "#777", marginTop: "8px" }}>
            Please visit us again.
          </p>
        </div>
      );
}
