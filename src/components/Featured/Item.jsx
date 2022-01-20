import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { getAPIURL } from "../../utils";
import Rating from "../UI/Rating";

function FeaturedItem() {
  const URL_FETCH = getAPIURL("movie/popular");
  const [featuredItem, setFeaturedItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // clean up controller
    let isSubscribed = true;

    axios.get(URL_FETCH).then((res) => {
      if (isSubscribed) {
        setFeaturedItem(
          res.data.results[Math.floor(Math.random() * (4 - 1) + 1)]
        );
        setLoading(false);
      }
    });

    return () => (isSubscribed = false);
  }, [URL_FETCH]);

  const renderItem = () => {
    if (loading) return null;
    return (
      <div>
        <Box
          sx={{
            width: "100%",
            height: "105%",
            position: "absolute",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(19,19,19,1) 93%)",
          }}
        ></Box>

        <Box
          sx={{
            height: "400px",
            position: "relative",
            "@media (min-width:687.98px)": {
              height: "550px",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "405px",
              position: "absolute",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(19,19,19,1) 60%)",
              "@media (min-width:687.98px)": {
                background:
                  "linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(19,19,19,1) 60%)",
                height: "560px",
              },
              "@media (min-width:1598.99px)": {
                background:
                  "linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(19,19,19,1) 70%)",
              },
            }}
          ></Box>
          <Box
            component="img"
            sx={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={`https://image.tmdb.org/t/p/original${featuredItem.backdrop_path}`}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              padding: "2rem",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ fontSize: "1rem", fontWeight: 400 }}
              >
                Featured Movies
              </Typography>
              <h1
                style={{
                  margin: 0,
                  maxWidth: "400px",
                  "@media (min-width:687.98px)": {
                    maxWidth: "550px",
                  },
                }}
              >
                {featuredItem.original_title}
              </h1>
              <Rating
                ratingValue={featuredItem.vote_average}
                disableValueDisplay={true}
              />
              <Box
                component="h3"
                sx={{
                  maxWidth: "400px",
                  fontWeight: 300,
                  fontSize: "0.8rem",
                  "@media (min-width:687.98px)": {
                    fontSize: "1.17rem",
                  },
                }}
              >
                {featuredItem.overview}
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    );
  };

  return <>{renderItem()}</>;
}

export default FeaturedItem;
