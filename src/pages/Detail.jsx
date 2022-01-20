import {
  Box,
  Typography,
  Tabs,
  Tab,
  CircularProgress,
  Grid,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import Tabpanel from "../components/UI/Tabpanel";

import MovieList from "../components/Movie/List";
import DetailThumbnail from "../components/Detail/Thumbnail";
import DetailHeader from "../components/Detail/Header";

import { getAPIURL } from "../utils";

function Detail() {
  let params = useParams();

  const [detailMovie, setDetailMovie] = useState({});
  const [detailMovieVideo, setDetailMovieVideo] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [tabValue, setTabValue] = useState("overview");

  const location = useLocation();
  const DETAIL_TYPE = location.pathname.split("/")[1];
  const URL_FETCH = getAPIURL(`${DETAIL_TYPE}/` + params.detailId);

  useEffect(() => {
    setLoaded(false);
    // clean up controller
    let isSubscribed = true;

    axios
      .all([
        axios.get(URL_FETCH),
        axios.get(getAPIURL(`${DETAIL_TYPE}/` + params.detailId + "/videos")),
      ])
      .then(
        axios.spread((movieData, videoData) => {
          if (isSubscribed) {
            setDetailMovie(movieData.data);
            setDetailMovieVideo(videoData.data.results);
            setLoaded(true);
          }
        })
      );

    return () => (isSubscribed = false);
  }, [URL_FETCH]);

  const skeletonDetailMovie = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "10rem",
        }}
      >
        <CircularProgress />
      </Box>
    );
  };

  const renderDetail = () => {
    if (loaded) {
      return (
        <Box
          m={3}
          sx={{
            height: "750px",
            display: "flex",
            gap: "2.5rem",
            "@media (max-width:789.89px)": {
              flexDirection: "column",
            },
          }}
        >
          <DetailThumbnail itemData={detailMovie} />
          <div
            className="movie-info"
            style={{
              width: "100%",
            }}
          >
            <DetailHeader itemData={detailMovie} />
            <Box
              sx={{ width: "100%", borderBottom: 1, borderColor: "#72727224" }}
              my={3}
            >
              <Tabs
                scrollButtons
                allowScrollButtonsMobile
                variant="scrollable"
                sx={{
                  "& .MuiTabs-indicator": {
                    height: "5px",
                  },
                  "& .MuiTab-root": {
                    fontSize: "1.125rem",
                    color: "#727272",
                    flexGrow: 1,
                  },
                  "& button.Mui-selected": {
                    color: "white",
                  },
                }}
                value={tabValue}
                onChange={(e, v) => setTabValue(v)}
                aria-label="tabs"
              >
                <Tab value="overview" label="OVERVIEW" />
                <Tab value="trailers" label="TRAILERS & MORE" />
                <Tab value="more" label="MORE LIKE THIS" />
                <Tab value="details" label="DETAILS" />
              </Tabs>
            </Box>

            <Tabpanel tabId="0" tabName="overview" tabValue={tabValue}>
              <Box mb={3}>
                <Typography
                  variant="p"
                  sx={{
                    lineHeight: "1.8",
                  }}
                >
                  {detailMovie.overview}
                </Typography>
              </Box>

              <Box
                my={3}
                sx={{
                  td: {
                    padding: "10px 0",
                  },
                  ".table-name": {
                    color: "#727272",
                  },
                  "td:first-of-type": {
                    width: "125px",
                  },
                }}
              >
                <table>
                  <tbody>
                    <tr>
                      <td className="table-name">Status</td>
                      <td>{detailMovie.status}</td>
                    </tr>
                    <tr>
                      <td className="table-name">Created by</td>
                      <td>
                        {(detailMovie.production_companies &&
                          detailMovie.production_companies
                            .map((production) => production.name)
                            .join(", ")) ||
                          "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="table-name">Genre</td>
                      <td>
                        {detailMovie.genres &&
                          detailMovie.genres
                            .map((genre) => genre.name)
                            .join(", ")}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Box>

              <MovieList
                titleList={
                  DETAIL_TYPE === "movie" ? "Related Movies" : "Related TV Show"
                }
                endpoint={`${DETAIL_TYPE}/${detailMovie.id}/similar`}
                type={DETAIL_TYPE}
                sx={{
                  marginLeft: "-1.5rem",
                }}
              />
            </Tabpanel>

            <Tabpanel tabId="1" tabName="trailers" tabValue={tabValue}>
              <Grid
                container
                spacing={3}
                sx={{
                  justifyContent: "center",
                  iframe: {
                    width: "100%",
                  },
                }}
              >
                {detailMovieVideo &&
                  detailMovieVideo.slice(0, 6).map((video) => {
                    return (
                      <Grid
                        key={video.key}
                        item
                        lg={6}
                        xl={4}
                        sx={{
                          width: "100%",
                        }}
                      >
                        <iframe
                          width="560"
                          height="315"
                          src={`https://www.youtube-nocookie.com/embed/${video.key}?controls=0`}
                          title={video.name}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </Grid>
                    );
                  })}
              </Grid>
            </Tabpanel>
            <Tabpanel tabId="2" tabName="more" tabValue={tabValue}>
              <MovieList
                titleList={
                  DETAIL_TYPE === "movie"
                    ? "Recommendations movies"
                    : "Recommendations TV Show"
                }
                endpoint={`${DETAIL_TYPE}/${detailMovie.id}/recommendations`}
                type={DETAIL_TYPE}
                sx={{
                  marginLeft: "-1.5rem",
                }}
              />
            </Tabpanel>
            <Tabpanel tabId="3" tabName="details" tabValue={tabValue}>
              <Box
                my={3}
                sx={{
                  td: {
                    padding: "10px 0",
                  },
                  ".table-name": {
                    color: "#727272",
                  },
                  "td:first-of-type": {
                    width: "125px",
                  },
                }}
              >
                <table>
                  <tbody>
                    <tr>
                      <td className="table-name">Release Date</td>
                      <td>
                        {detailMovie.release_date || detailMovie.first_air_date}
                      </td>
                    </tr>
                    <tr>
                      <td className="table-name">Tagline</td>
                      <td>{detailMovie.tagline}</td>
                    </tr>
                    <tr>
                      <td className="table-name">Production Countries</td>
                      <td>
                        {detailMovie.production_countries &&
                          detailMovie.production_countries
                            .map((country) => country.iso_3166_1)
                            .join(", ")}
                      </td>
                    </tr>
                    <tr>
                      <td className="table-name">Spoken Languages</td>
                      <td>
                        {detailMovie.spoken_languages &&
                          detailMovie.spoken_languages
                            .map((language) => language.english_name)
                            .join(", ")}
                      </td>
                    </tr>
                    <tr>
                      <td className="table-name">Budget</td>
                      <td>
                        {detailMovie.budget &&
                          detailMovie.budget.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                      </td>
                    </tr>
                    <tr>
                      <td className="table-name">Revenue</td>
                      <td>
                        {detailMovie.revenue &&
                          detailMovie.revenue.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Box>
            </Tabpanel>
          </div>
        </Box>
      );
    }
    return skeletonDetailMovie();
  };

  return renderDetail();
}

export default Detail;
