import React from "react";

function DetailItem() {
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
                      detailMovie.genres.map((genre) => genre.name).join(", ")}
                  </td>
                </tr>
              </tbody>
            </table>
          </Box>

          <MovieList
            titleList="Related movies"
            endpoint={`movie/${detailMovie.id}/similar`}
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
            titleList="Recommendations movies"
            endpoint={`movie/${detailMovie.id}/recommendations`}
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
                  <td>{detailMovie.release_date}</td>
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

export default DetailItem;
