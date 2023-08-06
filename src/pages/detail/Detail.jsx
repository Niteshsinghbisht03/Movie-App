import React from "react";
import "./detail.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import DetailsBanner from "./detailsBanner/Detailsbanner";
import Cast from "./cast/Cast";
import VideosSection from "./videoSection/videosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

const Detail = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  return (
    <div>
      <DetailsBanner video={data?.result?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Detail;
