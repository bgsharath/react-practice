import { useContext } from "react";
import useRestroCards from "../hooks/useRestroCards";
import Card from "./Card";
import { HocCard } from "./HocCard";
import UserContext from "../context/userLoginContect";

const RestroCard = () => {
  const restroData = useRestroCards("users");  
  if (restroData === null) {
    return <div>Loading ...</div>;
  }
  const CompletedCard = HocCard(Card);

  return (
    <>      
      <div className="menuContainer m-2">
        {restroData.map((item) =>
          item.website === "hildegard.org" ? (
            <CompletedCard key={item.id} item={item} />
          ) : (
            <Card key={item.id} item={item} />
          )
        )}
      </div>
    </>
  );
};

export default RestroCard;
