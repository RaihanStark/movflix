import { Box, Typography, Button, Rating } from "@mui/material";
import React from "react";

function MovieItemVertical({ title, imgPath, ratingValue }) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        "@media (max-width: 819.89px)": {
          flexDirection: "column",
        },
      }}
    >
      <Box
        component="img"
        src={`https://image.tmdb.org/t/p/w500/${imgPath}`}
        alt={title}
        draggable="false"
        sx={{
          display: "block",
          width: "350px",
          height: "197px",
          objectFit: "cover",
          "@media (max-width: 819.89px)": {
            width: "100%",
            height: "fit-content",
          },
        }}
      />
      <Box
        sx={{
          backgroundColor: "#00000082",
          padding: "0.5rem 1rem",
          "@media (max-width: 819.89px)": {
            padding: "1rem",
          },
        }}
        className="info-detail"
      >
        <Typography
          variant="h6"
          mb={1}
          sx={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "322px",
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="p"
          sx={{
            display: "-webkit-box",
            "-webkit-line-clamp": "2",
            "-webkit-box-orient": "vertical",
            overflow: "hidden",
          }}
        >
          From relative obscurity and a seemingly normal life, to overnight
          success and thrust into the Hollywood limelight overnight, the
          D’Amelios are faced with new challenges and opportunities they could
          not have imagined. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolores dolorum distinctio consectetur laudantium architecto,
          ut, unde, provident numquam facilis nemo aliquam amet doloremque
          possimus ullam harum enim dolorem ea repellat! Nostrum eveniet dolore,
          odio maiores, eaque nobis debitis itaque id aut laborum, facere sunt
          laudantium ipsum! Voluptates expedita distinctio ipsum eum
          necessitatibus eveniet et modi tenetur ratione eius, at voluptatem?
          Omnis voluptatum repudiandae dolore facere rem perferendis, culpa
          consectetur id officiis temporibus? Aliquid, tempore cupiditate?
          Dolore incidunt aperiam aspernatur nulla exercitationem molestiae cum,
          vero nam, praesentium ab ipsa id repellat? Eius velit labore, ab
          molestiae nihil eum nemo ducimus, harum vero illo amet facilis nisi
          fugiat a vel suscipit deleniti maiores! Incidunt fugiat repellendus
          sunt a enim officiis placeat ipsam! Vero similique, reprehenderit
          minima labore consectetur explicabo. Corporis animi exercitationem
          perspiciatis, molestias consequatur nam incidunt laboriosam, optio
          ullam veritatis doloremque eos sint, nostrum deleniti. Nisi
          consequuntur magnam quas obcaecati eos? Veritatis, non maxime veniam
          enim ducimus blanditiis unde, dolorem iste repellat, molestiae
          aspernatur qui culpa similique voluptas officiis vitae voluptatum?
          Officiis minima quos voluptates sequi voluptate? Nulla accusantium
          beatae dolore! Natus fugiat blanditiis alias aliquam rerum autem
          dignissimos, voluptate odio possimus eaque dicta at quisquam, dolorem
          velit voluptas molestias magni nemo molestiae amet ad? Doloremque iste
          repellendus nisi eos quod! Quo, nam. Vel quam facere hic nihil
          quibusdam, assumenda ipsa numquam sit temporibus aliquid sequi
          deserunt nemo beatae atque deleniti iure soluta in maiores autem
          officiis. Iure ullam debitis delectus. Aut ullam veritatis molestiae
          necessitatibus et aperiam similique ipsum fugit dolorum quam cumque
          saepe doloremque consectetur architecto, facilis, deleniti quidem.
          Maxime rerum est possimus eveniet nulla repellendus nam sed dolorem!
          Delectus similique quibusdam fugit! Praesentium, in at reiciendis
          temporibus velit natus, consectetur repellat autem ipsum doloribus ex
          rerum eos distinctio ipsa vero laboriosam modi dolorem facilis
          molestiae, ut illum minima.
        </Typography>

        <Box
          sx={{
            margin: "0.75rem 0",
            display: "flex",
          }}
        >
          <Rating name="no-value" value={ratingValue} precision={0.5} />
          {ratingValue}
        </Box>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <Button variant="contained" sx={{ marginRight: "1rem" }}>
            View details
          </Button>
          <Button variant="contained">Remove from watch list</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default MovieItemVertical;
