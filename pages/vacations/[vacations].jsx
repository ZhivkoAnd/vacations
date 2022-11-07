import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchVacations from "../../components/fetchVacations";

const Vacations = () => {
  const { data, isLoading, error } = useQuery(
    ["vacation-images"],
    fetchVacations
  );

  return (
    <div>
      {data?.fetchedVacations.map((vacation, index) => (
        <div key={index}>
          <div>
            {vacation.imageCollection.items.map((image, index) => {
              return (
                <div key={index}>
                  <img src={image.url} className="image" />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Vacations;
