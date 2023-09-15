import React from "react";

function AccordianBody({ userData, headerName }) {
  if(userData === null){
    return (<p>Loading ...</p>)
  }
  
  return (
    <div>
      {headerName === "address" ? (
        <div>
          <div>{userData.address.street}</div>
          <div>{userData.address.suite}</div>
          <div>{userData.address.city}</div>
          <div>{userData.address.zipcode}</div>
        </div>
      ) : (
        <div>
          <div>{userData.company.name}</div>
          <div>{userData.company.catchPhrase}</div>
        </div>
      )}
    </div>
  );
}

export default AccordianBody;
