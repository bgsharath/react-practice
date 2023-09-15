export const HocCard = (WrapComponent) => {
  return (props) => {
    return (
      <>
        <div style={{ position: "absolute", color: "red" }}>completed</div>
        <WrapComponent {...props} />
      </>
    );
  };
};