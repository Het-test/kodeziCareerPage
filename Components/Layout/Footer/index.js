import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import SVG from "react-inlinesvg";
import { logo } from "../../../assets/svgs/pageSvgs";

import Item from "../../../Components/Item";
import { theme } from "../../../utils/theme";

const Footer = () => {
  return (
    <Box
      sx={{
        paddingTop: "0px",
        paddingBottom: "0px",
      }}
    >
      <Container
        sx={{
          [theme.breakpoints.down("lg")]: {
            maxWidth: "900px",
          },
          [theme.breakpoints.down("md")]: {
            maxWidth: "600px",
          },
          [theme.breakpoints.down("sm")]: {
            maxWidth: "100%",
          },
        }}
      >
        <Box
          sx={{
            paddingTop: "0px",
            backgroundImage: `url(${"../../images/assets/banner-footer.svg"})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            textAlign: "center",
            minHeight: "400px",
            borderRadius: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "0px 20px",
            [theme.breakpoints.down("md")]: {
              padding: "0px 10px",
              minHeight: "345px",
              backgroundImage: `url(${"../../images/assets/banner-img-footer.svg"})`,
              backgroundSize: "cover",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "48px",
              fontWeight: "700",
              color: "#fff",
              fontFamily: "Inter",
              lineHeight: "56px",
              margin: "0px auto 40px",
              [theme.breakpoints.down("md")]: {
                fontSize: "36px",
                lineHeight: "46px",
                margin: "0px auto 20px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "28px",
                lineHeight: "40px",
              },
            }}
          >
            Start Writing Better Code Today!
          </Typography>
          <Box
            sx={{
              paddingTop: "0px",
              backgroundImage: `linear-gradient( 108.2deg, #4460fa 0%, #907bff 30.21%, #ec9ab6 57.86%, #febc6d 100% )`,
              borderRadius: "30px",
              padding: "2px",
            }}
          >
            <Button
              sx={{
                bgcolor: "#685078",
                padding: "10px 25px",
                borderRadius: "30px",
                color: "#fff",
                fontFamily: "Inter",
                textTransform: "capitalize",
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "14px",
                height: "40px",
                [theme.breakpoints.down("md")]: {
                  bgcolor: "#31325c",
                },
              }}
            >
              Download
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            paddingTop: "132px",
            paddingBottom: "65px",
            borderBottom: "1px solid #1D2539",
            [theme.breakpoints.down("lg")]: {
              paddingTop: "75px",
              paddingBottom: "25px",
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xl={5} lg={5} md={5} xs={12}>
              <Item
                sx={{
                  background: "transparent",
                  padding: "0px",
                  paddingLeft: "0px",
                  paddingTop: "0px",
                }}
              >
                <Box
                  sx={{
                    paddingRight: "20px",
                    svg: {
                      [theme.breakpoints.down("md")]: {
                        width: "140px",
                      },
                      [theme.breakpoints.down("sm")]: {
                        width: "90px",
                      },
                    },
                  }}
                >
                  <Link href="#">
                    <SVG src={logo} />
                  </Link>
                  <Box
                    sx={{
                      padding: "9px 15px",
                      bgcolor: "#121929",
                      marginTop: "42px",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      maxWidth: "220px",
                      [theme.breakpoints.down("md")]: {
                        marginTop: "20px",
                      },
                    }}
                  >
                    <Box>
                      <img src="../../images/assets/award-img.png"></img>
                    </Box>
                    <Box
                      sx={{
                        paddingLeft: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "11px",
                          fontWeight: "400",
                          color: "#fff",
                          fontFamily: "Inter",
                          lineHeight: "12px",
                          margin: "0px 0px 10px",
                        }}
                      >
                        PRODUCT HUNT
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "13px",
                          fontWeight: "600",
                          color: "#fff",
                          fontFamily: "Inter",
                          lineHeight: "15px",
                          margin: "0px",
                        }}
                      >
                        #4 Product of the day
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Item>
            </Grid>
            <Grid item xl={7} lg={7} md={7} xs={12}>
              <Item
                sx={{
                  background: "transparent",
                  padding: "0px",
                  paddingLeft: "0px",
                  paddingTop: "0px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    [theme.breakpoints.down("md")]: {
                      flexWrap: "wrap",
                    },
                  }}
                >
                  <Box
                    sx={{
                      [theme.breakpoints.down("md")]: {
                        width: "50%",
                        display: "block",
                        marginBottom: "20px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#fff",
                        fontFamily: "Inter",
                        lineHeight: "20px",
                        margin: "0px 0px 12px",
                      }}
                    >
                      Product
                    </Typography>
                    <Box
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#6F7687",
                        fontFamily: "Inter",
                        lineHeight: "20px",
                        margin: "0px 0px 12px",
                      }}
                    >
                      <Link href="#">Kodezi Code</Link>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#6F7687",
                        fontFamily: "Inter",
                        lineHeight: "20px",
                        margin: "0px 0px 12px",
                      }}
                    >
                      <Link href="#">Kodezi Cloud</Link>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      [theme.breakpoints.down("md")]: {
                        width: "50%",
                        display: "block",
                        marginBottom: "20px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#fff",
                        fontFamily: "Inter",
                        lineHeight: "20px",
                        margin: "0px 0px 12px",
                      }}
                    >
                      Integrations
                    </Typography>
                    <Box
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#6F7687",
                        fontFamily: "Inter",
                        lineHeight: "20px",
                        margin: "0px 0px 12px",
                      }}
                    >
                      <Link href="#">Web</Link>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#6F7687",
                        fontFamily: "Inter",
                        lineHeight: "20px",
                        margin: "0px 0px 12px",
                      }}
                    >
                      <Link href="#">VS Code</Link>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      [theme.breakpoints.down("md")]: {
                        width: "50%",
                        display: "block",
                        marginBottom: "20px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#fff",
                        fontFamily: "Inter",
                        lineHeight: "20px",
                        margin: "0px 0px 12px",
                      }}
                    >
                      Resources
                    </Typography>
                    <Box
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#6F7687",
                        fontFamily: "Inter",
                        lineHeight: "20px",
                        margin: "0px 0px 12px",
                      }}
                    >
                      <Link href="#">Blog</Link>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#6F7687",
                        fontFamily: "Inter",
                        lineHeight: "20px",
                        margin: "0px 0px 12px",
                      }}
                    >
                      <Link href="#">Learn More </Link>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#6F7687",
                        fontFamily: "Inter",
                        lineHeight: "20px",
                        margin: "0px 0px 12px",
                      }}
                    >
                      <Link href="#">Contact Us</Link>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      // display: "flex",
                      // justifyContent: "space-between",
                      [theme.breakpoints.down("md")]: {
                        width: "50%",
                        display: "block",
                        marginBottom: "20px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#fff",
                        fontFamily: "Inter",
                        lineHeight: "20px",
                        margin: "0px 0px 12px",
                      }}
                    >
                      Company
                    </Typography>
                    <Box
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#6F7687",
                        fontFamily: "Inter",
                        lineHeight: "20px",
                        margin: "0px 0px 12px",
                      }}
                    >
                      <Link href="#">Privacy</Link>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#6F7687",
                        fontFamily: "Inter",
                        lineHeight: "20px",
                        margin: "0px 0px 12px",
                      }}
                    >
                      <Link href="#">Pricing </Link>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#6F7687",
                        fontFamily: "Inter",
                        lineHeight: "20px",
                        margin: "0px 0px 12px",
                      }}
                    >
                      <Link href="#">About</Link>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#fff",
                        fontFamily: "Inter",
                        lineHeight: "20px",
                        margin: "0px 0px 12px",
                      }}
                    >
                      Accounts
                    </Typography>
                    <Box
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#6F7687",
                        fontFamily: "Inter",
                        lineHeight: "20px",
                        margin: "0px 0px 12px",
                      }}
                    >
                      <Link href="#">LinkedIn</Link>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#6F7687",
                        fontFamily: "Inter",
                        lineHeight: "20px",
                        margin: "0px 0px 12px",
                      }}
                    >
                      <Link href="#">Instagram </Link>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#6F7687",
                        fontFamily: "Inter",
                        lineHeight: "20px",
                        margin: "0px 0px 12px",
                      }}
                    >
                      <Link href="#">Twitter</Link>
                    </Box>
                  </Box>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            padding: "20px 0px",
            justifyContent: "space-between",
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              color: "#6F7687",
              fontFamily: "Inter",
              lineHeight: "26px",
              [theme.breakpoints.down("md")]: {
                fontSize: "12px",
                lineHeight: "15px",
                paddingBottom: "8px",
              },
            }}
          >
            @ 2022 Kodezi Inc. All Rights Reserved
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#6F7687",
                fontFamily: "Inter",
                lineHeight: "20px",
                margin: "0px",
                [theme.breakpoints.down("md")]: {
                  fontSize: "12px",
                  lineHeight: "15px",
                },
              }}
            >
              <Link href="#">Terms of Service</Link>
            </Box>
            <Box
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#6F7687",
                fontFamily: "Inter",
                lineHeight: "20px",
                paddingLeft: "20px",
                [theme.breakpoints.down("md")]: {
                  fontSize: "12px",
                  lineHeight: "15px",
                  paddingLeft: "10px",
                },
              }}
            >
              <Link href="#">Privacy Policy</Link>
            </Box>
            <Box
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#6F7687",
                fontFamily: "Inter",
                lineHeight: "20px",
                paddingLeft: "20px",
                [theme.breakpoints.down("md")]: {
                  fontSize: "12px",
                  lineHeight: "15px",
                  paddingLeft: "10px",
                },
              }}
            >
              <Link href="#">Cookies Policy</Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
