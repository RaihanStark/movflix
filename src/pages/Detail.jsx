import { Box, Typography, Tabs, Tab, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Tabpanel from "../components/UI/Tabpanel";
import StarIcon from "@mui/icons-material/Star";
import MovieList from "../components/Movie/List";
import { getAPIURL } from "../utils";

function Detail() {
  let params = useParams();

  const [detailMovie, setDetailMovie] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [tabValue, setTabValue] = useState("overview");

  const URL_FETCH = getAPIURL(`${"movie"}/` + params.detailId);

  useEffect(() => {
    // clean up controller
    let isSubscribed = true;

    axios.get(URL_FETCH).then((res) => {
      if (isSubscribed) {
        setDetailMovie(res.data);
        setLoaded(true);
      }
    });

    return () => (isSubscribed = false);
  }, []);

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
    if (!loaded) {
      return skeletonDetailMovie();
    }

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
        <Box
          component="img"
          sx={{
            width: "auto",
            height: "auto",
            "@media (min-width:789.89px) and (max-width:1068.89px)": {
              width: "250px",
              height: "375px",
            },
          }}
          src={`https://image.tmdb.org/t/p/w500${detailMovie.poster_path}`}
        />
        <div
          className="movie-info"
          style={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 500 }}>
                {detailMovie.original_title}
              </Typography>
              <Typography
                variant="h6"
                mt={2}
                sx={{ fontWeight: 400, color: "#727272", letterSpacing: "2px" }}
              >
                {detailMovie.release_date &&
                  detailMovie.release_date.split("-")[0]}{" "}
                | {detailMovie.runtime}min | {detailMovie.original_language}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "1rem",
              }}
            >
              <Typography variant="h3">{detailMovie.vote_average} </Typography>
              <StarIcon
                sx={{
                  color: "#F1C40F",
                  fontSize: "2.25rem",
                }}
              />
            </Box>
          </Box>

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
                  width: "125px",
                },
                ".table-name": {
                  color: "#727272",
                },
                "th, td": {
                  padding: "10px 0",
                },
              }}
            >
              <table>
                <tbody>
                  <tr>
                    <td className="table-name">Starring</td>
                    <td>Maria Anders</td>
                  </tr>
                  <tr>
                    <td className="table-name">Created by</td>
                    <td>Francisco Chang</td>
                  </tr>
                  <tr>
                    <td className="table-name">Genre</td>
                    <td>Francisco Chang</td>
                  </tr>
                </tbody>
              </table>
            </Box>

            <MovieList
              titleList="Related Movies"
              endpoint={`movie/${detailMovie.id}/similar`}
              sx={{
                marginLeft: "-1.5rem",
              }}
            />
          </Tabpanel>

          <Tabpanel tabId="1" tabName="trailers" tabValue={tabValue}>
            test2
          </Tabpanel>
          <Tabpanel tabId="2" tabName="more" tabValue={tabValue}>
            test3
          </Tabpanel>
          <Tabpanel tabId="3" tabName="details" tabValue={tabValue}>
            test4
          </Tabpanel>
        </div>
      </Box>
    );
  };

  return renderDetail();
}

export default Detail;
