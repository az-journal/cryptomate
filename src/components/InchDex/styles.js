const styles = {
  card: {
    maxWidth: "500px",
    marginTop: "100px",
    width: "100%",
    padding: "20px",
    background: "#161623",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: "8px",
    color: "#bfbfbf"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
    color: "#bfbfbf",
  },
  swapbox: {
    overflow: "auto",
    margin: "10px 0",
    borderRadius: "8px",
    padding: "13px",
    fontSize: "14px",
    fontWeight: "600",
    fontcolor: "#bfbfbf",
    backgroundColor: "#1f2331",
    boxShadow: "inset 0px 3px 4px rgba(0, 0, 0, 0.25)",
  },
  swapboxHeader: {
    marginBottom: "10px",
    color:"#bfbfbf"
  },
  swapboxSelect: {
    display: "flex",
    justifyContent: "space-between",
  },
  selectedToken: {
    height: "30px",
  },
  selectedRow: {
    display: "flex",
    alignItems: "center",
    gap: "3px",
    cursor: "pointer",
  },
  swapboxInput: {
    color: "#bfbfbf",
    outline: "none",
    fontSize: "16px",
    border: "none",
    backgroundColor: "transparent",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textverflow: "ellipsis",
    padding: "0px",
    appearance: "textfield",
  },
  swapButton: {
    border: "0px",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "16px",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "600",
    borderRadius: "8px",
    outline: "0px",
    height: "44px",
    color: "white",
    width: "100%",
    backgroundColor: "#21BF96",
  },
};

export default styles;
