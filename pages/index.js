import Head from "next/head";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kodezi</title>
      </Head>
      <div>
        <Typography
          className="main-banner-title"
          sx={{
            top: 20,
            fontSize: "3.5rem",
            fontWeight: "200",
            fontFamily: "Inter, sans-serif",
            textAlign: "center",
            color: "#fff",
          }}
        > Kodezi Career page</Typography>
      </div>
    </div >
  );
}
