import { Box, Typography, Tabs, Tab } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { API_URL } from "../../constraints";

function Detail() {
  let params = useParams();
  const [detailMovie, setDetailMovie] = useState({});
  const URL_FETCH =
    API_URL +
    `movie/${params.detailId}?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US`;

  useEffect(() => {
    axios.get(URL_FETCH).then((res) => setDetailMovie(res.data));
  }, []);

  return (
    detailMovie && (
      <Box
        m={3}
        sx={{
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
        <div className="movie-info">
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
                | {detailMovie.runtime}min | 16+
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
            mt={3}
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
              value={"one"}
              aria-label="tabs"
            >
              <Tab value="one" label="OVERVIEW" />
              <Tab value="two" label="TRAILERS & MORE" />
              <Tab value="three" label="MORE LIKE THIS" />
              <Tab value="four" label="DETAILS" />
            </Tabs>
          </Box>

          <Box my={3}>
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
            </table>
          </Box>
        </div>
      </Box>
    )
  );
}

export default Detail;
