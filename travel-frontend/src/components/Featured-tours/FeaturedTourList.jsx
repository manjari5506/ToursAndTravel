import React from "react";
import tourData from "../../assets/data/tours";
import { FeaturedTourCard } from "./FeaturedTourCard";
import { Col } from "reactstrap";
import { useFetch } from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

export const FeaturedTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}tours/search/getFeaturedTours`);

  console.log("featuredTours",featuredTours);
  return loading ? (
    <h4>...loading</h4>
  ) : error ? (
    <h4>{error}</h4>
  ) : (
    <>
      {tourData?.map(
        (
          tour //replace tourData with featuredTours
        ) => (
          <Col lg="3" md='6' sm='6' className="mb-4" key={tour.id}>
            <FeaturedTourCard tour={tour} />
          </Col>
        )
      )}
    </>
  );
};
