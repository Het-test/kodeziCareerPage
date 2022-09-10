import {
  Box,
  Button,
  capitalize,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import NavBar from "../../Components/Layout/Navbar";
import useMetadata from "../../constants/metadata";
import Footer from "../../Components/Layout/Footer";
import SVG from "react-inlinesvg";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Carousel from 'react-material-ui-carousel'
import * as s from "./styles/careers.style";
import {
  IconTimeline,
  FetureIcon,
  ApplyArrow,
  IconSeed,
  IconMic,
  IconInstant,
  IconCommunity,
} from "../../assets/svgs/pageSvgs";
import Item from "../../Components/Item";
import { theme } from "../../utils/theme";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 371 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 370, min: 0 },
    items: 1,
  },
};
const CareerPage = () => {
  const carrerPageFirstCards = useMetadata("carrerPageFirstCards");
  const careerPageFutureCardData = useMetadata("careerPageFutureCardData");
  const trustecPartyIcons = useMetadata("trustecPartyIcons");
  const howWeWorkCardsGridContent = useMetadata("howWeWorkCardsGridContent");
  const moreThanJustJobContent = useMetadata("moreThanJustJobContent");
  const joinOurTeamContent = useMetadata("joinOurTeamContent");

  return (
    <>
      <s.HeaderBanner>
        <Container>
          <Box>
            <NavBar />
          </Box>
        </Container>
        <s.FixEllipsImg>
          <img src="../../images/assets/ellipse-top.png"></img>
        </s.FixEllipsImg>
        <s.BannerBlock>
          <Box
            sx={{
              display: "flex",
              paddingTop: "70px",
              minHeight: "630px",
              // backgroundImage: `url(${"../../images/assets/banner-main.png"})`,
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
              textAlign: "center",
              [theme.breakpoints.down("md")]: {
                paddingTop: "30px",
                minHeight: "auto",
                backgroundImage: "none",
              },
              [theme.breakpoints.down("sm")]: {
                paddingTop: "25px",
              },
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
              <Box>
                <Typography
                  className="main-banner-title"
                  sx={{
                    fontSize: "3.5rem",
                    fontWeight: "800",
                    fontFamily: "Inter, sans-serif",
                    color: "#fff",
                    [theme.breakpoints.down("md")]: {
                      fontSize: "36px",
                      lineHeight: "46px",
                    },
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "28px",
                      lineHeight: "40px",
                    },
                  }}
                >
                  Work with us
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "400",
                    color: "#fff",
                    maxWidth: "650px",
                    fontFamily: "Inter, sans-serif",
                    margin: "10px auto 30px",
                    [theme.breakpoints.down("md")]: {
                      fontSize: "16px",
                      maxWidth: "70%",
                      margin: "10px auto 20px",
                    },
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "14px",
                      maxWidth: "100%",
                    },
                  }}
                >
                  Explore remote-friendly, flexible opportunities and join our
                  mission to make work life simpler, more pleasant and more
                  productive.
                </Typography>
                <Button
                  sx={{
                    fontSize: "16px",
                    fontWeight: "700",
                    fontFamily: "Inter",
                    lineHeight: "16px",
                    padding: "18px 23px",
                    bgcolor: "#fff",
                    color: "#020816",
                    borderRadius: "32px",
                    textTransform: "capitalize",
                    "&:hover": {
                      background:
                        "linear-gradient( 108.43deg, #4460fa -85.13%, #907bff -28.86%, #ec9ab6 22.64%, #febc6d 101.12% )",
                      color: "#fff",
                    },
                    [theme.breakpoints.down("md")]: {
                      fontSize: "14px",
                      padding: "15px 20px",
                    },
                  }}
                >
                  View open roles
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  paddingTop: "110px",
                  paddingBottom: "140px",
                  flexWrap: "wrap",
                  textAlign: "left",
                  [theme.breakpoints.down("lg")]: {
                    paddingTop: "80px",
                    paddingBottom: "50px",
                  },
                  [theme.breakpoints.down("md")]: {
                    paddingTop: "50px",
                    paddingBottom: "30px",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    [theme.breakpoints.down("md")]: {
                      display: "none",
                    },
                  }}
                >
                  {carrerPageFirstCards?.map((item, key) => (
                    <Box
                      className="year-block-main"
                      key={key}
                      sx={{
                        borderLeft: "1px solid #1D2539",
                        width: "18%",
                        cursor: "pointer",
                        transition: "0.3s",
                        margin: "9px",
                        height: "auto",
                        [theme.breakpoints.down("lg")]: {
                          margin: "5px",
                        },
                        "&:hover": {
                          background:
                            "linear-gradient(90deg, rgba(144, 123, 255, 0) 0%, rgba(144, 123, 255, 0.1) 99.15%)",
                          color: "#fff",
                          borderLeft: "1px solid #F5B3A3",
                          "& $yearTitle": {
                            background:
                              "linear-gradient(108.43deg, #4460FA -85.13%, #907BFF -28.86%, #EC9AB6 22.64%, #FEBC6D 101.12%)",
                          },
                        },
                      }}
                    >
                      <Typography
                        component="span"
                        className="yearTitle"
                        sx={{
                          fontSize: "1rem",
                          fontWeight: "400",
                          color: "#fff",
                          maxWidth: "650px",
                          fontFamily: "Inter, sans-serif",
                          padding: "4px 14px",
                          width: "106px",
                          bgcolor: "#1D2539",
                          transition: "0.3s",
                          borderRadius: "0px 4px 4px 0px",
                          transition: "0.5s",
                        }}
                      >
                        {item?.year}
                      </Typography>
                      <Box
                        sx={{
                          padding: "15px 2px 15px 15px",
                          [theme.breakpoints.down("lg")]: {
                            padding: "10px 2px 10px 10px",
                          },
                        }}
                      >
                        <SVG src={item?.icon} />
                        <Typography
                          sx={{
                            fontSize: "18px",
                            lineHeight: "19px",
                            fontWeight: "700",
                            color: "#fff",
                            fontFamily: "Inter, sans-serif",
                            margin: "8px auto 6px",
                            [theme.breakpoints.down("lg")]: {
                              fontSize: "16px",
                              lineHeight: "20px",
                            },
                            [theme.breakpoints.down("md")]: {
                              fontSize: "14px",
                              lineHeight: "20px",
                            },
                          }}
                        >
                          {item?.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            lineHeight: "26px",

                            fontWeight: "400",
                            color: "#6F7687",
                            fontFamily: "Inter, sans-serif",
                            [theme.breakpoints.down("lg")]: {
                              fontSize: "12px",
                              lineHeight: "18px",
                            },
                          }}
                        >
                          {item?.text}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: "none",
                    [theme.breakpoints.down("md")]: {
                      display: "flex",
                      height: "auto",
                      width: "100%",
                    },
                    ".react-multiple-carousel__arrow": {
                      opacity: "0",
                    },
                    ".react-multi-carousel-track": {
                      padding: "0 0 30px",
                      ".react-multi-carousel-dot": {
                        button: {
                          backgroundColor: "#373F53",
                          border: "none",
                        },
                      },
                    },
                    ".awssld__controls": {
                      opacity: "0",
                    },
                  }}
                >
                  <Carousel  swipe={true} sx={{width:'100%'}}>
                    <Box
                      className="year-block-main"
                      sx={{
                        borderLeft: "1px solid #1D2539",
                        width: "18%",
                        cursor: "pointer",
                        transition: "0.3s",
                        margin: "9px",
                        height: "auto",
                        [theme.breakpoints.down("lg")]: {
                          margin: "5px",
                        },
                        [theme.breakpoints.down("md")]: {
                          width: "100%",
                          padding: "0px",
                        },
                        "&:hover": {
                          background:
                            "linear-gradient(90deg, rgba(144, 123, 255, 0) 0%, rgba(144, 123, 255, 0.1) 99.15%)",
                          color: "#fff",
                          borderLeft: "1px solid #F5B3A3",
                          "& $yearTitle": {
                            background:
                              "linear-gradient(108.43deg, #4460FA -85.13%, #907BFF -28.86%, #EC9AB6 22.64%, #FEBC6D 101.12%)",
                          },
                        },
                      }}
                    >
                      <Typography
                        component="span"
                        className="yearTitle"
                        sx={{
                          fontSize: "1rem",
                          fontWeight: "400",
                          color: "#fff",
                          maxWidth: "650px",
                          fontFamily: "Inter, sans-serif",
                          padding: "4px 14px",
                          width: "106px",
                          bgcolor: "#1D2539",
                          transition: "0.3s",
                          borderRadius: "0px 4px 4px 0px",
                          transition: "0.5s",
                          [theme.breakpoints.down("md")]: {
                            fontSize: "12px",
                          },
                        }}
                      >
                        2019
                      </Typography>
                      <Box
                        sx={{
                          padding: "15px 2px 15px 15px",
                          [theme.breakpoints.down("lg")]: {
                            padding: "10px 2px 10px 10px",
                          },
                        }}
                      >
                        <SVG src={IconTimeline} />
                        <Typography
                          sx={{
                            fontSize: "18px",
                            lineHeight: "19px",
                            fontWeight: "700",
                            color: "#fff",
                            fontFamily: "Inter, sans-serif",
                            margin: "8px auto 6px",
                            [theme.breakpoints.down("lg")]: {
                              fontSize: "16px",
                              lineHeight: "20px",
                            },
                            [theme.breakpoints.down("md")]: {
                              fontSize: "14px",
                              lineHeight: "20px",
                            },
                          }}
                        >
                          Started Kodezi
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            lineHeight: "26px",

                            fontWeight: "400",
                            color: "#6F7687",
                            fontFamily: "Inter, sans-serif",
                            [theme.breakpoints.down("lg")]: {
                              fontSize: "12px",
                              lineHeight: "18px",
                            },
                          }}
                        >
                          Kodezi was founded in 2019 by immigrant founder Ishraq
                          Khan
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      className="year-block-main"
                      sx={{
                        borderLeft: "1px solid #1D2539",
                        width: "18%",
                        cursor: "pointer",
                        transition: "0.3s",
                        margin: "9px",
                        height: "auto",
                        [theme.breakpoints.down("lg")]: {
                          margin: "5px",
                        },
                        [theme.breakpoints.down("md")]: {
                          width: "100%",
                          padding: "0px",
                        },
                        "&:hover": {
                          background:
                            "linear-gradient(90deg, rgba(144, 123, 255, 0) 0%, rgba(144, 123, 255, 0.1) 99.15%)",
                          color: "#fff",
                          borderLeft: "1px solid #F5B3A3",
                          "& $yearTitle": {
                            background:
                              "linear-gradient(108.43deg, #4460FA -85.13%, #907BFF -28.86%, #EC9AB6 22.64%, #FEBC6D 101.12%)",
                          },
                        },
                      }}
                    >
                      <Typography
                        component="span"
                        className="yearTitle"
                        sx={{
                          fontSize: "1rem",
                          fontWeight: "400",
                          color: "#fff",
                          maxWidth: "650px",
                          fontFamily: "Inter, sans-serif",
                          padding: "4px 14px",
                          width: "106px",
                          bgcolor: "#1D2539",
                          transition: "0.3s",
                          borderRadius: "0px 4px 4px 0px",
                          transition: "0.5s",
                          [theme.breakpoints.down("md")]: {
                            fontSize: "12px",
                          },
                        }}
                      >
                        2019
                      </Typography>
                      <Box
                        sx={{
                          padding: "15px 2px 15px 15px",
                          [theme.breakpoints.down("lg")]: {
                            padding: "10px 2px 10px 10px",
                          },
                        }}
                      >
                        <SVG src={IconMic} />
                        <Typography
                          sx={{
                            fontSize: "18px",
                            lineHeight: "19px",
                            fontWeight: "700",
                            color: "#fff",
                            fontFamily: "Inter, sans-serif",
                            margin: "8px auto 6px",
                            [theme.breakpoints.down("lg")]: {
                              fontSize: "16px",
                              lineHeight: "20px",
                            },
                            [theme.breakpoints.down("md")]: {
                              fontSize: "14px",
                              lineHeight: "20px",
                            },
                          }}
                        >
                          Public Launch
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            lineHeight: "26px",

                            fontWeight: "400",
                            color: "#6F7687",
                            fontFamily: "Inter, sans-serif",
                            [theme.breakpoints.down("lg")]: {
                              fontSize: "12px",
                              lineHeight: "18px",
                            },
                          }}
                        >
                          We announced the public launch of Kodezi and said
                          “Hello World” to the internet.
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      className="year-block-main"
                      sx={{
                        borderLeft: "1px solid #1D2539",
                        width: "18%",
                        cursor: "pointer",
                        transition: "0.3s",
                        margin: "9px",
                        height: "auto",
                        [theme.breakpoints.down("lg")]: {
                          margin: "5px",
                        },
                        [theme.breakpoints.down("md")]: {
                          width: "100%",
                          padding: "0px",
                        },
                        "&:hover": {
                          background:
                            "linear-gradient(90deg, rgba(144, 123, 255, 0) 0%, rgba(144, 123, 255, 0.1) 99.15%)",
                          color: "#fff",
                          borderLeft: "1px solid #F5B3A3",
                          "& $yearTitle": {
                            background:
                              "linear-gradient(108.43deg, #4460FA -85.13%, #907BFF -28.86%, #EC9AB6 22.64%, #FEBC6D 101.12%)",
                          },
                        },
                      }}
                    >
                      <Typography
                        component="span"
                        className="yearTitle"
                        sx={{
                          fontSize: "1rem",
                          fontWeight: "400",
                          color: "#fff",
                          maxWidth: "650px",
                          fontFamily: "Inter, sans-serif",
                          padding: "4px 14px",
                          width: "106px",
                          bgcolor: "#1D2539",
                          transition: "0.3s",
                          borderRadius: "0px 4px 4px 0px",
                          transition: "0.5s",
                          [theme.breakpoints.down("md")]: {
                            fontSize: "12px",
                          },
                        }}
                      >
                        2020
                      </Typography>
                      <Box
                        sx={{
                          padding: "15px 2px 15px 15px",
                          [theme.breakpoints.down("lg")]: {
                            padding: "10px 2px 10px 10px",
                          },
                        }}
                      >
                        <SVG src={IconSeed} />
                        <Typography
                          sx={{
                            fontSize: "18px",
                            lineHeight: "19px",
                            fontWeight: "700",
                            color: "#fff",
                            fontFamily: "Inter, sans-serif",
                            margin: "8px auto 6px",
                            [theme.breakpoints.down("lg")]: {
                              fontSize: "16px",
                              lineHeight: "20px",
                            },
                            [theme.breakpoints.down("md")]: {
                              fontSize: "14px",
                              lineHeight: "20px",
                            },
                          }}
                        >
                          Seed Round
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            lineHeight: "26px",

                            fontWeight: "400",
                            color: "#6F7687",
                            fontFamily: "Inter, sans-serif",
                            [theme.breakpoints.down("lg")]: {
                              fontSize: "12px",
                              lineHeight: "18px",
                            },
                          }}
                        >
                          We raised $30k from Accel, and announced the public
                          beta app
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      className="year-block-main"
                      sx={{
                        borderLeft: "1px solid #1D2539",
                        width: "18%",
                        cursor: "pointer",
                        transition: "0.3s",
                        margin: "9px",
                        height: "auto",
                        [theme.breakpoints.down("lg")]: {
                          margin: "5px",
                        },
                        [theme.breakpoints.down("md")]: {
                          width: "100%",
                          padding: "0px",
                        },
                        "&:hover": {
                          background:
                            "linear-gradient(90deg, rgba(144, 123, 255, 0) 0%, rgba(144, 123, 255, 0.1) 99.15%)",
                          color: "#fff",
                          borderLeft: "1px solid #F5B3A3",
                          "& $yearTitle": {
                            background:
                              "linear-gradient(108.43deg, #4460FA -85.13%, #907BFF -28.86%, #EC9AB6 22.64%, #FEBC6D 101.12%)",
                          },
                        },
                      }}
                    >
                      <Typography
                        component="span"
                        className="yearTitle"
                        sx={{
                          fontSize: "1rem",
                          fontWeight: "400",
                          color: "#fff",
                          maxWidth: "650px",
                          fontFamily: "Inter, sans-serif",
                          padding: "4px 14px",
                          width: "106px",
                          bgcolor: "#1D2539",
                          transition: "0.3s",
                          borderRadius: "0px 4px 4px 0px",
                          transition: "0.5s",
                          [theme.breakpoints.down("md")]: {
                            fontSize: "12px",
                          },
                        }}
                      >
                        2021
                      </Typography>
                      <Box
                        sx={{
                          padding: "15px 2px 15px 15px",
                          [theme.breakpoints.down("lg")]: {
                            padding: "10px 2px 10px 10px",
                          },
                        }}
                      >
                        <SVG src={IconInstant} />
                        <Typography
                          sx={{
                            fontSize: "18px",
                            lineHeight: "19px",
                            fontWeight: "700",
                            color: "#fff",
                            fontFamily: "Inter, sans-serif",
                            margin: "8px auto 6px",
                            [theme.breakpoints.down("lg")]: {
                              fontSize: "16px",
                              lineHeight: "20px",
                            },
                            [theme.breakpoints.down("md")]: {
                              fontSize: "14px",
                              lineHeight: "20px",
                            },
                          }}
                        >
                          Kodezi Live Assistance
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            lineHeight: "26px",

                            fontWeight: "400",
                            color: "#6F7687",
                            fontFamily: "Inter, sans-serif",
                            [theme.breakpoints.down("lg")]: {
                              fontSize: "12px",
                              lineHeight: "18px",
                            },
                          }}
                        >
                          We launched kodezi live assistance for pogrammer find
                          mistake instant.
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      className="year-block-main"
                      sx={{
                        borderLeft: "1px solid #1D2539",
                        width: "18%",
                        cursor: "pointer",
                        transition: "0.3s",
                        margin: "9px",
                        height: "auto",
                        [theme.breakpoints.down("lg")]: {
                          margin: "5px",
                        },
                        [theme.breakpoints.down("md")]: {
                          width: "100%",
                          padding: "0px",
                        },
                        "&:hover": {
                          background:
                            "linear-gradient(90deg, rgba(144, 123, 255, 0) 0%, rgba(144, 123, 255, 0.1) 99.15%)",
                          color: "#fff",
                          borderLeft: "1px solid #F5B3A3",
                          "& $yearTitle": {
                            background:
                              "linear-gradient(108.43deg, #4460FA -85.13%, #907BFF -28.86%, #EC9AB6 22.64%, #FEBC6D 101.12%)",
                          },
                        },
                      }}
                    >
                      <Typography
                        component="span"
                        className="yearTitle"
                        sx={{
                          fontSize: "1rem",
                          fontWeight: "400",
                          color: "#fff",
                          maxWidth: "650px",
                          fontFamily: "Inter, sans-serif",
                          padding: "4px 14px",
                          width: "106px",
                          bgcolor: "#1D2539",
                          transition: "0.3s",
                          borderRadius: "0px 4px 4px 0px",
                          transition: "0.5s",
                          [theme.breakpoints.down("md")]: {
                            fontSize: "12px",
                          },
                        }}
                      >
                        2022
                      </Typography>
                      <Box
                        sx={{
                          padding: "15px 2px 15px 15px",
                          [theme.breakpoints.down("lg")]: {
                            padding: "10px 2px 10px 10px",
                          },
                        }}
                      >
                        <SVG src={IconCommunity} />
                        <Typography
                          sx={{
                            fontSize: "18px",
                            lineHeight: "19px",
                            fontWeight: "700",
                            color: "#fff",
                            fontFamily: "Inter, sans-serif",
                            margin: "8px auto 6px",
                            [theme.breakpoints.down("lg")]: {
                              fontSize: "16px",
                              lineHeight: "20px",
                            },
                            [theme.breakpoints.down("md")]: {
                              fontSize: "14px",
                              lineHeight: "20px",
                            },
                          }}
                        >
                          And today...
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            lineHeight: "26px",

                            fontWeight: "400",
                            color: "#6F7687",
                            fontFamily: "Inter, sans-serif",
                            [theme.breakpoints.down("lg")]: {
                              fontSize: "12px",
                              lineHeight: "18px",
                            },
                          }}
                        >
                          We are a team of 16 folks, and excited at the prospect
                          of you joining our team!
                        </Typography>
                      </Box>
                    </Box>
                  </Carousel>
                </Box>
              </Box>
            </Container>
          </Box>
        </s.BannerBlock>
      </s.HeaderBanner>
      <s.CareerBlock>
        <Box
          sx={{
            display: "flex",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "0px",
              top: "300px",
              [theme.breakpoints.down("lg")]: {
                display: "none",
              },
              img: {
                [theme.breakpoints.down("xl")]: {
                  width: "170px",
                },
              },
            }}
          >
            <img src="../../images/assets/ellipse-career.png"></img>
          </Box>
          <Box
            sx={{
              position: "absolute",
              right: "0px",
              bottom: "20px",
              [theme.breakpoints.down("lg")]: {
                display: "none",
              },
              img: {
                [theme.breakpoints.down("xl")]: {
                  width: "170px",
                },
              },
            }}
          >
            <img src="../../images/assets/shape-round-1.png"></img>
          </Box>
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
                textAlign: "center",
                position: "relative",
                zIndex: "9",
              }}
            >
              <Typography
                sx={{
                  fontSize: "48px",
                  lineHeight: "56px",
                  fontWeight: "800",
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                  margin: "0px auto 12px",
                  [theme.breakpoints.down("lg")]: {
                    fontSize: "38px",
                    lineHeight: "48px",
                    margin: "8px 0px",
                  },
                  [theme.breakpoints.down("md")]: {
                    fontSize: "30px",
                    lineHeight: "40px",
                  },
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "28px",
                    lineHeight: "40px",
                  },
                }}
              >
                Kodezi is where the <br></br>future works
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  lineHeight: "32px",
                  fontWeight: "400",
                  color: "#A1ACC5",
                  fontFamily: "Inter, sans-serif",
                  margin: "0px auto 60px",
                  [theme.breakpoints.down("lg")]: {
                    fontSize: "18px",
                    lineHeight: "30px",
                    margin: "0px auto 30px",
                  },
                  [theme.breakpoints.down("md")]: {
                    fontSize: "16px",
                    lineHeight: "22px",
                  },
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "14px",
                    lineHeight: "22px",
                    maxWidth: "100%",
                  },
                }}
              >
                Join us in creating a better future of work that’s <br></br>
                more connected, inclusive and flexible:
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                zIndex: "9",
              }}
            >
              <Grid container spacing={2}>
                {careerPageFutureCardData?.map((item, key) => {
                  return (
                    <Grid item key={key} xs={12} lg="4" md={6}>
                      <Item
                        sx={{
                          height: "314px",
                          svg: {
                            [theme.breakpoints.down("lg")]: {
                              height: "52px",
                              width: "52px",
                            },
                          },
                          [theme.breakpoints.down("lg")]: {
                            height: "auto",
                            padding: "24px",
                            borderRadius: "8px",
                          },
                        }}
                        key={key}
                      >
                        <Box>
                          <SVG src={item?.icon} />
                          <Typography
                            className="main-banner-title"
                            sx={{
                              fontSize: "24px",
                              lineHeight: "30px",
                              fontWeight: "700",
                              fontFamily: "Inter, sans-serif",
                              color: "#fff",
                              margin: "20px 0px 10px",
                              [theme.breakpoints.down("lg")]: {
                                fontSize: "22px",
                                lineHeight: "28px",
                                margin: "15px 0px 8px",
                              },
                              [theme.breakpoints.down("md")]: {
                                fontSize: "18px",
                                lineHeight: "22px",
                              },
                            }}
                          >
                            {item?.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "18px",
                              lineHeight: "28px",

                              fontWeight: "400",
                              color: "#A1ACC5",
                              fontFamily: "Inter, sans-serif",
                              margin: "0px",
                              [theme.breakpoints.down("lg")]: {
                                fontSize: "16px",
                                lineHeight: "22px",
                              },
                              [theme.breakpoints.down("md")]: {
                                fontSize: "14px",
                                lineHeight: "22px",
                              },
                            }}
                          >
                            {item?.description}
                          </Typography>
                        </Box>
                      </Item>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
            <Box
              sx={{
                paddingTop: "100px",
                paddingBottom: "100px",
                [theme.breakpoints.down("lg")]: {
                  paddingTop: "50px",
                  paddingBottom: "0px",
                },
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={6} xl={6}>
                  <Item
                    sx={{
                      background: "transparent",
                      padding: "0px",
                      paddingLeft: "0px",
                      paddingTop: "0px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "48px",
                        lineHeight: "56px",
                        fontWeight: "800",
                        color: "#fff",
                        fontFamily: "Inter, sans-serif",
                        margin: "0px 0px 20px",
                        [theme.breakpoints.down("lg")]: {
                          fontSize: "38px",
                          lineHeight: "48px",
                          margin: "0px 0px 12px",
                        },
                        [theme.breakpoints.down("md")]: {
                          fontSize: "30px",
                          lineHeight: "40px",
                        },
                        [theme.breakpoints.down("sm")]: {
                          fontSize: "28px",
                          lineHeight: "40px",
                        },
                      }}
                    >
                      Kodezi team
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        lineHeight: "26px",
                        fontWeight: "400",
                        color: "#fff",
                        fontFamily: "Inter, sans-serif",
                        margin: "0px 0px 35px",
                        [theme.breakpoints.down("lg")]: {
                          fontSize: "14px",
                          lineHeight: "22px",
                          margin: "0px 0px 20px",
                        },
                      }}
                    >
                      Kodezi’s Code AI’s New Distinctive Feature Allows It To
                      Evaluate the Large Quantities Of Code And Quickly Discover
                      Errors Or Patterns In The Code. The Engine Then Uses Logic
                      Programming Principles To Surface Software Bugs That Have
                      Been Supplemented With Meta growing Data Explanation.
                      Essentially A Grammarly For Programming!
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        lineHeight: "26px",
                        fontWeight: "400",
                        color: "#fff",
                        fontFamily: "Inter, sans-serif",
                        margin: "0px",
                        [theme.breakpoints.down("lg")]: {
                          fontSize: "14px",
                          lineHeight: "22px",
                        },
                      }}
                    >
                      Learn Any Course Taught By Peers Your Own Age. Explore
                      Hundreds Of Hours Of Video On Various Programme Languages,
                      Cyber Security, Data Science, And Even Web Development
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={12} md={12} lg={6} xl={6}>
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
                        paddingLeft: "60px",
                        [theme.breakpoints.down("lg")]: {
                          paddingLeft: "15px",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          paddingBottom: "65px",
                          [theme.breakpoints.down("lg")]: {
                            paddingBottom: "55px",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            border: "none",
                            borderLeftWidth: "2px",
                            borderTopWidth: "0px",
                            borderBottomWidth: "0px",
                            borderRightWidth: "0px",
                            borderStyle: "solid",
                            borderImage:
                              "linear-gradient(135deg, rgba(68,96,250,1) 0%, rgba(236,154,182,1) 58%)",
                            borderImageSlice: 1,
                            padding: "10px 10px 10px 25px",
                            width: "62%",
                            [theme.breakpoints.down("lg")]: {
                              width: "55%",
                            },
                            [theme.breakpoints.down("sm")]: {
                              padding: "10px 10px 10px 14px",
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "68px",
                              lineHeight: "82px",
                              fontWeight: "800",
                              color: "#fff",
                              fontFamily: "Inter, sans-serif",
                              [theme.breakpoints.down("lg")]: {
                                fontSize: "50px",
                                lineHeight: "62px",
                              },
                              [theme.breakpoints.down("md")]: {
                                fontSize: "40px",
                                lineHeight: "52px",
                              },
                              [theme.breakpoints.down("sm")]: {
                                fontSize: "32px",
                                lineHeight: "40px",
                              },
                            }}
                          >
                            2019
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "18px",
                              lineHeight: "28px",
                              fontWeight: "600",
                              color: "#6F7687",
                              fontFamily: "Inter, sans-serif",
                              margin: "0px",
                              [theme.breakpoints.down("md")]: {
                                fontSize: "16px",
                                lineHeight: "26px",
                              },
                              [theme.breakpoints.down("sm")]: {
                                fontSize: "13px",
                                lineHeight: "22px",
                              },
                            }}
                          >
                            Kodezi founded
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            border: "none",
                            borderLeftWidth: "2px",
                            borderTopWidth: "0px",
                            borderBottomWidth: "0px",
                            borderRightWidth: "0px",
                            borderStyle: "solid",
                            borderImage:
                              "linear-gradient(135deg, rgba(68,96,250,1) 0%, rgba(236,154,182,1) 58%)",
                            borderImageSlice: 1,
                            padding: "10px 10px 10px 25px",
                            width: "38%",
                            [theme.breakpoints.down("lg")]: {
                              width: "45%",
                            },
                            [theme.breakpoints.down("sm")]: {
                              padding: "10px 10px 10px 14px",
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "68px",
                              lineHeight: "82px",
                              fontWeight: "800",
                              color: "#fff",
                              fontFamily: "Inter, sans-serif",
                              [theme.breakpoints.down("lg")]: {
                                fontSize: "50px",
                                lineHeight: "62px",
                              },
                              [theme.breakpoints.down("md")]: {
                                fontSize: "40px",
                                lineHeight: "52px",
                              },
                              [theme.breakpoints.down("sm")]: {
                                fontSize: "32px",
                                lineHeight: "40px",
                              },
                            }}
                          >
                            5+
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "18px",
                              lineHeight: "28px",
                              fontWeight: "600",
                              color: "#6F7687",
                              fontFamily: "Inter, sans-serif",
                              margin: "0px",
                              [theme.breakpoints.down("md")]: {
                                fontSize: "16px",
                                lineHeight: "26px",
                              },
                              [theme.breakpoints.down("sm")]: {
                                fontSize: "13px",
                                lineHeight: "22px",
                              },
                            }}
                          >
                            Our employees
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          paddingBottom: "65px",
                        }}
                      >
                        <Box
                          sx={{
                            border: "none",
                            borderLeftWidth: "2px",
                            borderTopWidth: "0px",
                            borderBottomWidth: "0px",
                            borderRightWidth: "0px",
                            borderStyle: "solid",
                            borderImage:
                              "linear-gradient(135deg, rgba(68,96,250,1) 0%, rgba(236,154,182,1) 58%)",
                            borderImageSlice: 1,
                            padding: "10px 10px 10px 25px",
                            width: "62%",
                            [theme.breakpoints.down("lg")]: {
                              width: "55%",
                            },
                            [theme.breakpoints.down("sm")]: {
                              padding: "10px 10px 10px 14px",
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "68px",
                              lineHeight: "82px",
                              fontWeight: "800",
                              color: "#fff",
                              fontFamily: "Inter, sans-serif",
                              [theme.breakpoints.down("lg")]: {
                                fontSize: "50px",
                                lineHeight: "62px",
                              },
                              [theme.breakpoints.down("md")]: {
                                fontSize: "40px",
                                lineHeight: "52px",
                              },
                              [theme.breakpoints.down("sm")]: {
                                fontSize: "32px",
                                lineHeight: "40px",
                              },
                            }}
                          >
                            100%
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "18px",
                              lineHeight: "28px",
                              fontWeight: "600",
                              color: "#6F7687",
                              fontFamily: "Inter, sans-serif",
                              margin: "0px",
                              [theme.breakpoints.down("md")]: {
                                fontSize: "16px",
                                lineHeight: "26px",
                              },
                              [theme.breakpoints.down("sm")]: {
                                fontSize: "13px",
                                lineHeight: "22px",
                              },
                            }}
                          >
                            Remote
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            border: "none",
                            borderLeftWidth: "2px",
                            borderTopWidth: "0px",
                            borderBottomWidth: "0px",
                            borderRightWidth: "0px",
                            borderStyle: "solid",
                            borderImage:
                              "linear-gradient(135deg, rgba(68,96,250,1) 0%, rgba(236,154,182,1) 58%)",
                            borderImageSlice: 1,
                            padding: "10px 10px 10px 25px",
                            width: "38%",
                            [theme.breakpoints.down("lg")]: {
                              width: "45%",
                            },
                            [theme.breakpoints.down("sm")]: {
                              padding: "10px 10px 10px 14px",
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "68px",
                              lineHeight: "82px",
                              fontWeight: "800",
                              color: "#fff",
                              fontFamily: "Inter, sans-serif",
                              [theme.breakpoints.down("lg")]: {
                                fontSize: "50px",
                                lineHeight: "62px",
                              },
                              [theme.breakpoints.down("md")]: {
                                fontSize: "40px",
                                lineHeight: "52px",
                              },
                              [theme.breakpoints.down("sm")]: {
                                fontSize: "32px",
                                lineHeight: "40px",
                              },
                            }}
                          >
                            4+
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "18px",
                              lineHeight: "28px",
                              fontWeight: "600",
                              color: "#6F7687",
                              fontFamily: "Inter, sans-serif",
                              margin: "0px",
                              [theme.breakpoints.down("md")]: {
                                fontSize: "16px",
                                lineHeight: "26px",
                              },
                              [theme.breakpoints.down("sm")]: {
                                fontSize: "13px",
                                lineHeight: "22px",
                              },
                            }}
                          >
                            Countries
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Item>
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                paddingBottom: "150px",
                [theme.breakpoints.down("lg")]: {
                  paddingBottom: "100px",
                },
                [theme.breakpoints.down("md")]: {
                  paddingBottom: "70px",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  lineHeight: "26px",
                  fontWeight: "600",
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                  margin: "0px auto 40px",
                  textTransform: "uppercase",
                  [theme.breakpoints.down("lg")]: {
                    fontSize: "18px",
                    margin: "0px auto 20px",
                  },
                  [theme.breakpoints.down("md")]: {
                    fontSize: "16px",
                    margin: "0px auto 15px",
                  },
                  [theme.breakpoints.down("md")]: {
                    fontSize: "12px",
                    margin: "0px auto 15px",
                  },
                }}
              >
                Trusted by
              </Typography>
              <Grid
                container
                spacing={2}
                sx={{
                  alignItems: "center",
                  [theme.breakpoints.down("md")]: {
                    marginLeft: "-5px",
                  },
                }}
              >
                {trustecPartyIcons.map((e) => {
                  return (
                    <Grid
                      item
                      xs={2}
                      sx={{
                        [theme.breakpoints.down("md")]: {
                          paddingLeft: "5px !important",
                        },
                      }}
                    >
                      <Item
                        sx={{
                          background: "transparent",
                          padding: "0px",
                          paddingLeft: "0px",
                          paddingTop: "0px",
                          [theme.breakpoints.down("md")]: {
                            margin: "0px",
                          },
                          img: {
                            width: "100%",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            padding: "0px 10px 0px 0px",
                            [theme.breakpoints.down("md")]: {
                              padding: "0px 5px 0px 0px",
                            },
                          }}
                        >
                          <img src={e?.icon}></img>
                        </Box>
                      </Item>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Container>
        </Box>
      </s.CareerBlock>
      <s.CareerBlockBottom>
        <Box
          sx={{
            position: "absolute",
            left: "0",
            bottom: "25px",
            [theme.breakpoints.down("lg")]: {
              display: "none",
            },
            img: {
              [theme.breakpoints.down("xl")]: {
                width: "170px",
              },
            },
          }}
        >
          <img src="../../images/assets/shape-round.png"></img>
        </Box>
        <Box
          sx={{
            padding: "150px 0px",
            bgcolor: "#121929",
            [theme.breakpoints.down("lg")]: {
              padding: "100px 0px",
            },
            [theme.breakpoints.down("md")]: {
              padding: "52px 0px 70px",
            },
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
            <Box>
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "48px",
                    lineHeight: "56px",
                    fontWeight: "800",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    margin: "0px auto 12px",
                    [theme.breakpoints.down("lg")]: {
                      fontSize: "38px",
                      lineHeight: "48px",
                      margin: "8px 0px",
                      margin: "0px auto 8px",
                    },
                    [theme.breakpoints.down("md")]: {
                      fontSize: "30px",
                      lineHeight: "40px",
                    },
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "28px",
                      lineHeight: "40px",
                    },
                  }}
                >
                  How we work
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    lineHeight: "32px",
                    fontWeight: "400",
                    color: "#A1ACC5",
                    fontFamily: "Inter, sans-serif",
                    margin: "0px auto 60px",
                    [theme.breakpoints.down("lg")]: {
                      fontSize: "18px",
                      lineHeight: "30px",
                      margin: "0px auto 30px",
                    },
                    [theme.breakpoints.down("md")]: {
                      fontSize: "16px",
                      lineHeight: "22px",
                    },
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "14px",
                      lineHeight: "22px",
                      maxWidth: "100%",
                    },
                  }}
                >
                  It’s important that you enjoy your job, and love<br></br> your
                  life outside of work.
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "0px 0px 150px",
                  [theme.breakpoints.down("lg")]: {
                    padding: "0px 0px 100px",
                  },
                  [theme.breakpoints.down("md")]: {
                    padding: "0px 0px 70px",
                  },
                }}
              >
                <Grid container spacing={2}>
                  {howWeWorkCardsGridContent.map((e) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={4}
                        xl={4}
                        sx={{
                          [theme.breakpoints.down("md")]: {
                            paddingTop: "5px !important",
                          },
                        }}
                      >
                        <Item
                          sx={{
                            bgcolor: "transparent",
                            padding: "0px",
                            paddingLeft: "0px",
                            paddingTop: "0px",
                          }}
                        >
                          <Box
                            sx={{
                              bgcolor: "#1D2539",
                              padding: "30px",
                              borderRadius: "12px",
                              height: "295px",
                              [theme.breakpoints.down("lg")]: {
                                height: "auto",
                                padding: "24px",
                                borderRadius: "8px",
                              },
                            }}
                          >
                            <Typography
                              className="main-banner-title"
                              sx={{
                                fontSize: "24px",
                                lineHeight: "30px",
                                fontWeight: "700",
                                fontFamily: "Inter, sans-serif",
                                color: "#fff",
                                margin: "0px 0px 10px",
                                [theme.breakpoints.down("lg")]: {
                                  fontSize: "22px",
                                  lineHeight: "28px",
                                  margin: "15px 0px 8px",
                                },
                                [theme.breakpoints.down("md")]: {
                                  fontSize: "18px",
                                  lineHeight: "22px",
                                },
                              }}
                            >
                              {e?.title}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "18px",
                                lineHeight: "28px",
                                fontWeight: "400",
                                color: "#A1ACC5",
                                fontFamily: "Inter, sans-serif",
                                margin: "0px",
                                [theme.breakpoints.down("lg")]: {
                                  fontSize: "16px",
                                  lineHeight: "22px",
                                },
                                [theme.breakpoints.down("md")]: {
                                  fontSize: "14px",
                                  lineHeight: "22px",
                                },
                              }}
                            >
                              {e?.description}
                            </Typography>
                          </Box>
                        </Item>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "48px",
                    lineHeight: "56px",
                    fontWeight: "800",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    margin: "0px auto 12px",
                    [theme.breakpoints.down("lg")]: {
                      fontSize: "38px",
                      lineHeight: "48px",
                      margin: "8px 0px",
                      margin: "0px auto 8px",
                    },
                    [theme.breakpoints.down("md")]: {
                      fontSize: "30px",
                      lineHeight: "40px",
                    },
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "28px",
                      lineHeight: "40px",
                    },
                  }}
                >
                  More than just a job
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    lineHeight: "32px",
                    fontWeight: "400",
                    color: "#A1ACC5",
                    fontFamily: "Inter, sans-serif",
                    margin: "0px auto 60px",
                    [theme.breakpoints.down("lg")]: {
                      fontSize: "18px",
                      lineHeight: "30px",
                      margin: "0px auto 30px",
                    },
                    [theme.breakpoints.down("md")]: {
                      fontSize: "16px",
                      lineHeight: "22px",
                    },
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "14px",
                      lineHeight: "22px",
                      maxWidth: "100%",
                    },
                  }}
                >
                  We value partnership and flexibility. That’s why, in <br></br>{" "}
                  addition to the perks listed below
                </Typography>
              </Box>
              <Box>
                <Grid container spacing={2}>
                  {moreThanJustJobContent.map((item) => {
                    return (
                      <Grid
                        item
                        lg={6}
                        md={6}
                        xl={6}
                        sm={6}
                        xs={12}
                        sx={{
                          [theme.breakpoints.down("md")]: {
                            paddingTop: "5px !important",
                          },
                        }}
                      >
                        <Item
                          sx={{
                            bgcolor: "transparent",
                            padding: "0px",
                            paddingLeft: "0px",
                            paddingTop: "0px",
                          }}
                        >
                          <Box
                            sx={{
                              bgcolor: "#1D2539",
                              padding: "30px",
                              borderRadius: "12px",
                              display: "flex",
                              alignItems: "center",
                              img: {
                                [theme.breakpoints.down("lg")]: {
                                  width: "44px",
                                  height: "44px",
                                },
                              },
                              [theme.breakpoints.down("lg")]: {
                                padding: "20px",
                                borderRadius: "8px",
                              },
                              [theme.breakpoints.down("sm")]: {
                                padding: "10px",
                                borderRadius: "8px",
                              },
                            }}
                          >
                            <img src={item?.icon}></img>
                            <Box
                              sx={{
                                paddingLeft: "20px",
                                [theme.breakpoints.down("lg")]: {
                                  paddingLeft: "10px",
                                },
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "20px",
                                  lineHeight: "28px",
                                  fontWeight: "700",
                                  color: "#fff",
                                  fontFamily: "Inter, sans-serif",
                                  margin: "0px 0px 2px",
                                  [theme.breakpoints.down("lg")]: {
                                    fontSize: "16px",
                                    lineHeight: "22px",
                                  },
                                  [theme.breakpoints.down("md")]: {
                                    fontSize: "14px",
                                    lineHeight: "22px",
                                  },
                                }}
                              >
                                {item?.title}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  lineHeight: "26px",
                                  fontWeight: "400",
                                  color: "#A1ACC5",
                                  fontFamily: "Inter, sans-serif",
                                  margin: "0px",
                                  [theme.breakpoints.down("md")]: {
                                    fontSize: "12px",
                                    lineHeight: "20px",
                                  },
                                }}
                              >
                                {item?.description}
                              </Typography>
                            </Box>
                          </Box>
                        </Item>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Box>
          </Container>
        </Box>
      </s.CareerBlockBottom>
      <s.CareerBlockTimeline>
        <Box
          sx={{
            padding: "150px 0px",
            position: "relative",
            [theme.breakpoints.down("lg")]: {
              padding: "100px 0px",
            },
            [theme.breakpoints.down("md")]: {
              padding: "50px 0px",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: "160px",
              left: "0",
              [theme.breakpoints.down("lg")]: {
                display: "none",
              },
              img: {
                [theme.breakpoints.down("xl")]: {
                  width: "170px",
                },
              },
            }}
          >
            <img src="../../images/assets/shape-left.png"></img>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "250px",
              right: "0",
              [theme.breakpoints.down("lg")]: {
                display: "none",
              },
              img: {
                [theme.breakpoints.down("xl")]: {
                  width: "170px",
                },
              },
            }}
          >
            <img src="../../images/assets/ellipse-right.png"></img>
          </Box>
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
            <Box>
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "48px",
                    lineHeight: "56px",
                    fontWeight: "800",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    margin: "0px auto 12px",
                    [theme.breakpoints.down("lg")]: {
                      fontSize: "38px",
                      lineHeight: "48px",
                      margin: "0px auto 8px",
                    },
                    [theme.breakpoints.down("md")]: {
                      fontSize: "30px",
                      lineHeight: "40px",
                    },
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "28px",
                      lineHeight: "40px",
                    },
                  }}
                >
                  Join our amazing team
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    lineHeight: "32px",
                    fontWeight: "400",
                    color: "#A1ACC5",
                    fontFamily: "Inter, sans-serif",
                    margin: "0px auto 60px",
                    [theme.breakpoints.down("lg")]: {
                      fontSize: "18px",
                      lineHeight: "30px",
                      margin: "0px auto 30px",
                    },
                    [theme.breakpoints.down("md")]: {
                      fontSize: "16px",
                      lineHeight: "22px",
                    },
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "14px",
                      lineHeight: "22px",
                    },
                  }}
                >
                  Please send your resume to jobs@kodezi.com or apply below.
                </Typography>
              </Box>
              <Box>
                {joinOurTeamContent.map((item) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "32px",
                        alignItems: "center",
                        bgcolor: "#121929",
                        borderRadius: "12px",
                        marginBottom: "20px",
                        [theme.breakpoints.down("lg")]: {
                          padding: "20px",
                          borderRadius: "8px",
                        },
                        [theme.breakpoints.down("md")]: {
                          padding: "10px",
                        },
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "24px",
                            lineHeight: "30px",
                            fontWeight: "700",
                            fontFamily: "Inter, sans-serif",
                            color: "#fff",
                            margin: "0px 0px 4px",
                            [theme.breakpoints.down("lg")]: {
                              fontSize: "20px",
                              lineHeight: "28px",
                              margin: "0px 0px 0px",
                            },
                            [theme.breakpoints.down("md")]: {
                              fontSize: "18px",
                              lineHeight: "26px",
                            },
                            [theme.breakpoints.down("sm")]: {
                              fontSize: "14px",
                              lineHeight: "28px",
                            },
                          }}
                        >
                          {item?.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "18px",
                            lineHeight: "28px",
                            fontWeight: "400",
                            color: "#fff",
                            fontFamily: "Inter, sans-serif",
                            margin: "0px",
                            [theme.breakpoints.down("lg")]: {
                              fontSize: "16px",
                              lineHeight: "24px",
                            },
                            [theme.breakpoints.down("md")]: {
                              fontSize: "14px",
                              lineHeight: "20px",
                            },
                            [theme.breakpoints.down("sm")]: {
                              fontSize: "12px",
                              lineHeight: "18px",
                            },
                          }}
                        >
                          {item?.description}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          svg: {
                            [theme.breakpoints.down("lg")]: {
                              width: "15px",
                            },
                          },
                        }}
                        className="hover-apply"
                      >
                        <a href="">
                          <Typography
                            sx={{
                              fontSize: "20px",
                              lineHeight: "20px",
                              fontWeight: "600",
                              color: "#907BFF",
                              fontFamily: "Inter, sans-serif",
                              paddingRight: "15px",
                              [theme.breakpoints.down("lg")]: {
                                fontSize: "16px",
                                lineHeight: "16px",
                                paddingRight: "8px",
                              },
                              [theme.breakpoints.down("md")]: {
                                fontSize: "14px",
                                lineHeight: "14px",
                              },
                              [theme.breakpoints.down("sm")]: {
                                fontSize: "12px",
                                lineHeight: "12px",
                                whiteSpace: "nowrap",
                              },
                            }}
                          >
                            Apply now
                          </Typography>
                          <SVG src={ApplyArrow} />
                        </a>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box
              sx={{
                padding: "150px 0px",
                [theme.breakpoints.down("lg")]: {
                  padding: "100px 0px",
                },
                [theme.breakpoints.down("md")]: {
                  padding: "50px 0px",
                },
              }}
            >
              {" "}
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "48px",
                    lineHeight: "56px",
                    fontWeight: "800",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    margin: "0px auto 12px",
                    [theme.breakpoints.down("lg")]: {
                      fontSize: "38px",
                      lineHeight: "48px",
                      margin: "0px auto 8px",
                    },
                    [theme.breakpoints.down("md")]: {
                      fontSize: "30px",
                      lineHeight: "40px",
                    },
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "28px",
                      lineHeight: "40px",
                    },
                  }}
                >
                  Our Investors
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    lineHeight: "32px",
                    fontWeight: "400",
                    color: "#A1ACC5",
                    fontFamily: "Inter, sans-serif",
                    margin: "0px auto 90px",
                    [theme.breakpoints.down("lg")]: {
                      fontSize: "18px",
                      lineHeight: "30px",
                      margin: "0px auto 30px",
                    },
                    [theme.breakpoints.down("md")]: {
                      fontSize: "16px",
                      lineHeight: "22px",
                    },
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "14px",
                      lineHeight: "22px",
                      maxWidth: "100%",
                    },
                  }}
                >
                  Meet the great investors and people helping to<br></br> make
                  Kodezi grow.
                </Typography>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  img: {
                    [theme.breakpoints.down("md")]: {
                      width: "100%",
                    },
                  },
                }}
              >
                <img src="../../images/assets/water-rtp-logo.png"></img>
              </Box>
            </Box>
          </Container>
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "-100px -140px",
                backgroundImage:
                  'url("../../../images/assets/light-timelne.png")',
                backgroundSize: "900px",
                height: "760px",
                width: "800px",
                top: "30px",
                left: "230px",
                [theme.breakpoints.down("xl")]: {
                  backgroundPosition: "-100px -30px",
                  backgroundSize: "cover",
                  height: "690px",
                },
                [theme.breakpoints.down("lg")]: {
                  backgroundPosition: "-100px",
                  backgroundSize: "cover",
                  height: "500px",
                },
                [theme.breakpoints.down("md")]: {
                  backgroundImage: "none",
                  height: "auto",
                },
              }}
            ></Box>

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
              <Box>
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "48px",
                      lineHeight: "56px",
                      fontWeight: "800",
                      color: "#fff",
                      fontFamily: "Inter, sans-serif",
                      margin: "0px auto 12px",
                      [theme.breakpoints.down("lg")]: {
                        fontSize: "38px",
                        lineHeight: "48px",
                        margin: "0px auto 8px",
                      },
                      [theme.breakpoints.down("md")]: {
                        fontSize: "30px",
                        lineHeight: "40px",
                      },
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "28px",
                        lineHeight: "40px",
                      },
                    }}
                  >
                    Hiring process
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      lineHeight: "32px",
                      fontWeight: "400",
                      color: "#A1ACC5",
                      fontFamily: "Inter, sans-serif",
                      margin: "0px auto 90px",
                      [theme.breakpoints.down("lg")]: {
                        fontSize: "18px",
                        lineHeight: "30px",
                        margin: "0px auto 30px",
                      },
                      [theme.breakpoints.down("md")]: {
                        fontSize: "16px",
                        lineHeight: "22px",
                      },
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "14px",
                        lineHeight: "22px",
                        maxWidth: "100%",
                      },
                    }}
                  >
                    Take a look at our interview steps, and a few tips to{" "}
                    <br></br>make your hiring experience great.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    [theme.breakpoints.down("md")]: {
                      display: "block",
                    },
                  }}
                >
                  {/* <Box
                  sx={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1300px 1000px",
                    height: "100%",
                    backgroundPosition: "top",
                    padding: "20px 0px 45px",
                    backgroundImage:
                      'url("../../../images/assets/header-shade.png")',
                    position: "relative",
                  }}
                ></Box> */}
                  <Box
                    sx={{
                      width: "40%",
                      position: "relative",
                      [theme.breakpoints.down("md")]: {
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        height: "530px",
                        width: "2px",
                        bgcolor: "#242B3C",
                        right: "85px",
                        top: "100px",
                        [theme.breakpoints.down("lg")]: {
                          height: "370px",
                          top: "50px",
                          right: "55px",
                        },
                        [theme.breakpoints.down("md")]: {
                          display: "none",
                        },
                      }}
                    ></Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        margin: "75px 0px",
                        alignItems: "center",
                        [theme.breakpoints.down("lg")]: {
                          margin: "40px 0px",
                        },
                        [theme.breakpoints.down("md")]: {
                          margin: "25px 0px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "20px",
                          lineHeight: "28px",
                          fontWeight: "700",
                          color: "#fff",
                          fontFamily: "Inter, sans-serif",
                          margin: "0px",
                          textAlign: "right",
                          width: "237px",
                          [theme.breakpoints.down("lg")]: {
                            fontSize: "16px",
                            lineHeight: "24px",
                            width: "200px",
                          },
                          [theme.breakpoints.down("md")]: {
                            display: "none",
                          },
                        }}
                      >
                        Send an engaging email
                      </Typography>
                      <Button
                        sx={{
                          fontSize: "24px",
                          lineHeight: "28px",
                          fontWeight: "700",
                          color: "#fff",
                          fontFamily: "Inter, sans-serif",
                          padding: "12px 15px",
                          transition: "0.3s",
                          background:
                            "linear-gradient(108.43deg, #4460FA -85.13%, #907BFF -28.86%, #EC9AB6 22.64%, #FEBC6D 101.12%)",
                          borderRadius: "30px",
                          [theme.breakpoints.down("lg")]: {
                            fontSize: "18px",
                            lineHeight: "20px",
                            minWidth: "50px",
                          },
                          [theme.breakpoints.down("md")]: {
                            fontSize: "16px",
                            lineHeight: "16px",
                            borderRadius: "50px",
                            minWidth: "auto",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "0px",
                            width: "38px",
                            height: "38px",
                          },
                          "&:hover": {
                            background:
                              "linear-gradient( 108.43deg, #4460fa -85.13%, #907bff -28.86%, #ec9ab6 22.64%, #febc6d 101.12% )",
                          },
                        }}
                      >
                        1
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        margin: "75px 0px",
                        alignItems: "center",
                        [theme.breakpoints.down("lg")]: {
                          margin: "40px 0px",
                        },
                        [theme.breakpoints.down("md")]: {
                          margin: "25px 0px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "20px",
                          lineHeight: "28px",
                          fontWeight: "700",
                          color: "#6F7687",
                          fontFamily: "Inter, sans-serif",
                          margin: "0px",
                          textAlign: "right",
                          width: "237px",
                          [theme.breakpoints.down("lg")]: {
                            fontSize: "16px",
                            lineHeight: "24px",
                            width: "200px",
                          },
                          [theme.breakpoints.down("md")]: {
                            display: "none",
                          },
                        }}
                      >
                        Founders intro
                      </Typography>
                      <Button
                        sx={{
                          fontSize: "24px",
                          lineHeight: "28px",
                          fontWeight: "700",
                          color: "#fff",
                          fontFamily: "Inter, sans-serif",
                          padding: "12px 15px",
                          transition: "0.3s",
                          borderRadius: "30px",
                          bgcolor: "#242B3C",
                          textTransform: "capitalize",
                          [theme.breakpoints.down("lg")]: {
                            fontSize: "18px",
                            lineHeight: "20px",
                            minWidth: "50px",
                          },
                          [theme.breakpoints.down("md")]: {
                            fontSize: "16px",
                            lineHeight: "16px",
                            borderRadius: "50px",
                            minWidth: "auto",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "0px",
                            width: "38px",
                            height: "38px",
                          },
                          "&:hover": {
                            background:
                              "linear-gradient( 108.43deg, #4460fa -85.13%, #907bff -28.86%, #ec9ab6 22.64%, #febc6d 101.12% )",
                          },
                        }}
                      >
                        2
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        margin: "75px 0px",
                        alignItems: "center",
                        [theme.breakpoints.down("lg")]: {
                          margin: "40px 0px",
                        },
                        [theme.breakpoints.down("md")]: {
                          margin: "25px 0px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "20px",
                          lineHeight: "28px",
                          fontWeight: "700",
                          color: "#6F7687",
                          fontFamily: "Inter, sans-serif",
                          margin: "0px",
                          textAlign: "right",
                          width: "237px",
                          [theme.breakpoints.down("lg")]: {
                            fontSize: "16px",
                            lineHeight: "24px",
                            width: "200px",
                          },
                          [theme.breakpoints.down("md")]: {
                            display: "none",
                          },
                        }}
                      >
                        Take-home task
                      </Typography>
                      <Button
                        sx={{
                          fontSize: "24px",
                          lineHeight: "28px",
                          fontWeight: "700",
                          color: "#fff",
                          fontFamily: "Inter, sans-serif",
                          padding: "12px 15px",
                          transition: "0.3s",
                          borderRadius: "30px",
                          bgcolor: "#242B3C",
                          textTransform: "capitalize",
                          [theme.breakpoints.down("lg")]: {
                            fontSize: "18px",
                            lineHeight: "20px",
                            minWidth: "50px",
                          },
                          [theme.breakpoints.down("md")]: {
                            fontSize: "16px",
                            lineHeight: "16px",
                            borderRadius: "50px",
                            minWidth: "auto",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "0px",
                            width: "38px",
                            height: "38px",
                          },
                          "&:hover": {
                            background:
                              "linear-gradient( 108.43deg, #4460fa -85.13%, #907bff -28.86%, #ec9ab6 22.64%, #febc6d 101.12% )",
                          },
                        }}
                      >
                        3
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        margin: "75px 0px",
                        alignItems: "center",
                        [theme.breakpoints.down("lg")]: {
                          margin: "40px 0px",
                        },
                        [theme.breakpoints.down("md")]: {
                          margin: "25px 0px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "20px",
                          lineHeight: "28px",
                          fontWeight: "700",
                          color: "#6F7687",
                          fontFamily: "Inter, sans-serif",
                          margin: "0px",
                          textAlign: "right",
                          width: "237px",
                          [theme.breakpoints.down("lg")]: {
                            fontSize: "16px",
                            lineHeight: "24px",
                            width: "200px",
                          },
                          [theme.breakpoints.down("md")]: {
                            display: "none",
                          },
                        }}
                      >
                        Task presentation
                      </Typography>
                      <Button
                        sx={{
                          fontSize: "24px",
                          lineHeight: "28px",
                          fontWeight: "700",
                          color: "#fff",
                          fontFamily: "Inter, sans-serif",
                          padding: "12px 15px",
                          transition: "0.3s",
                          borderRadius: "30px",
                          bgcolor: "#242B3C",
                          textTransform: "capitalize",
                          [theme.breakpoints.down("lg")]: {
                            fontSize: "18px",
                            lineHeight: "20px",
                            minWidth: "50px",
                          },
                          [theme.breakpoints.down("md")]: {
                            fontSize: "16px",
                            lineHeight: "16px",
                            borderRadius: "50px",
                            minWidth: "auto",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "0px",
                            width: "38px",
                            height: "38px",
                          },
                          "&:hover": {
                            background:
                              "linear-gradient( 108.43deg, #4460fa -85.13%, #907bff -28.86%, #ec9ab6 22.64%, #febc6d 101.12% )",
                          },
                        }}
                      >
                        4
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        margin: "75px 0px",
                        alignItems: "center",
                        [theme.breakpoints.down("lg")]: {
                          margin: "40px 0px",
                        },
                        [theme.breakpoints.down("md")]: {
                          margin: "25px 0px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "20px",
                          lineHeight: "28px",
                          fontWeight: "700",
                          color: "#6F7687",
                          fontFamily: "Inter, sans-serif",
                          margin: "0px",
                          textAlign: "right",
                          width: "237px",
                          [theme.breakpoints.down("lg")]: {
                            fontSize: "16px",
                            lineHeight: "24px",
                            width: "200px",
                          },
                          [theme.breakpoints.down("md")]: {
                            display: "none",
                          },
                        }}
                      >
                        Offer Stage
                      </Typography>
                      <Button
                        sx={{
                          fontSize: "24px",
                          lineHeight: "28px",
                          fontWeight: "700",
                          color: "#fff",
                          fontFamily: "Inter, sans-serif",
                          padding: "12px 15px",
                          transition: "0.3s",
                          borderRadius: "30px",
                          bgcolor: "#242B3C",
                          textTransform: "capitalize",
                          [theme.breakpoints.down("lg")]: {
                            fontSize: "18px",
                            lineHeight: "20px",
                            minWidth: "50px",
                          },
                          [theme.breakpoints.down("md")]: {
                            fontSize: "16px",
                            lineHeight: "16px",
                            borderRadius: "50px",
                            minWidth: "auto",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "0px",
                            width: "38px",
                            height: "38px",
                          },
                          "&:hover": {
                            background:
                              "linear-gradient( 108.43deg, #4460fa -85.13%, #907bff -28.86%, #ec9ab6 22.64%, #febc6d 101.12% )",
                          },
                        }}
                      >
                        5
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "40%",
                      position: "relative",
                      [theme.breakpoints.down("md")]: {
                        width: "100%",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "#1D2539",
                        padding: "32px",
                        borderRadius: "12px",
                        position: "relative",
                        [theme.breakpoints.down("lg")]: {
                          padding: "24px",
                          borderRadius: "8px",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: "-16px",
                          left: "-1px",
                          [theme.breakpoints.up("lg")]: {
                            display: "none",
                          },
                        }}
                      >
                        <img src="../../images/assets/arrow-top-img.png"></img>
                      </Box>
                      <Typography
                        className="main-banner-title"
                        sx={{
                          fontSize: "20px",
                          lineHeight: "28px",
                          fontWeight: "700",
                          fontFamily: "Inter, sans-serif",
                          color: "#fff",
                          margin: "0px 0px 10px",
                          [theme.breakpoints.down("lg")]: {
                            fontSize: "18px",
                            lineHeight: "22px",
                          },
                        }}
                      >
                        Send an engaging email
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          lineHeight: "28px",
                          fontWeight: "400",
                          color: "#A1ACC5",
                          fontFamily: "Inter, sans-serif",
                          margin: "0px 0px 25px",
                          [theme.breakpoints.down("lg")]: {
                            fontSize: "14px",
                            lineHeight: "22px",
                            color: "#fff",
                          },
                        }}
                      >
                        Tell us why you want to join Raycast and why you
                        generally care about the problem we're solving.
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          lineHeight: "28px",
                          fontWeight: "400",
                          color: "#A1ACC5",
                          fontFamily: "Inter, sans-serif",
                          margin: "0px",
                          [theme.breakpoints.down("lg")]: {
                            fontSize: "14px",
                            lineHeight: "22px",
                            color: "#fff",
                          },
                        }}
                      >
                        Make your first impression count. Share with us what
                        excites you and how you envision your role at Raycast,
                        what we’re missing, and pack your intro with the amazing
                        work you’ve done.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </s.CareerBlockTimeline>

      <Footer />
    </>
  );
};

export default CareerPage;
