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
import * as s from "./styles/careers.style";
import {
  IconTimeline,
  FetureIcon,
  ApplyArrow,
} from "../../assets/svgs/pageSvgs";
import Item from "../../Components/Item";

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
            }}
          >
            <Container>
              <Box>
                <Typography
                  className="main-banner-title"
                  sx={{
                    fontSize: "3.5rem",
                    fontWeight: "800",
                    fontFamily: "Inter, sans-serif",

                    color: "#fff",
                  }}
                >
                  Work with us
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "300",
                    color: "#fff",
                    maxWidth: "650px",
                    fontFamily: "Inter, sans-serif",
                    margin: "10px auto 30px",
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
                        }}
                      >
                        {item?.text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
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
            }}
          >
            <img src="../../images/assets/ellipse-career.png"></img>
          </Box>
          <Box
            sx={{
              position: "absolute",
              right: "0px",
              bottom: "20px",
            }}
          >
            <img src="../../images/assets/shape-round-1.png"></img>
          </Box>
          <Container>
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
                }}
              >
                Kodezi is where the <br></br>future works
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  lineHeight: "32px",
                  fontWeight: "300",
                  color: "#A1ACC5",
                  fontFamily: "Inter, sans-serif",
                  margin: "0px auto 60px",
                }}
              >
                Join us in creating a better future of work that’s <br></br>
                more connected, inclusive and flexible:
              </Typography>
            </Box>
            <Box>
              <Grid container spacing={2}>
                {careerPageFutureCardData?.map((item, key) => {
                  return (
                    <Grid item key={key} xs={4}>
                      <Item
                        sx={{
                          height: "314px",
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
                            }}
                          >
                            {item?.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "18px",
                              lineHeight: "28px",

                              fontWeight: "300",
                              color: "#A1ACC5",
                              fontFamily: "Inter, sans-serif",
                              margin: "0px",
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
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
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
                      }}
                    >
                      Kodezi team
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        lineHeight: "26px",
                        fontWeight: "300",
                        color: "#fff",
                        fontFamily: "Inter, sans-serif",
                        margin: "0px 0px 35px",
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
                        fontWeight: "300",
                        color: "#fff",
                        fontFamily: "Inter, sans-serif",
                        margin: "0px",
                      }}
                    >
                      Learn Any Course Taught By Peers Your Own Age. Explore
                      Hundreds Of Hours Of Video On Various Programme Languages,
                      Cyber Security, Data Science, And Even Web Development
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={6}>
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
                      }}
                    >
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
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "68px",
                              lineHeight: "82px",
                              fontWeight: "800",
                              color: "#fff",
                              fontFamily: "Inter, sans-serif",
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
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "68px",
                              lineHeight: "82px",
                              fontWeight: "800",
                              color: "#fff",
                              fontFamily: "Inter, sans-serif",
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
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "68px",
                              lineHeight: "82px",
                              fontWeight: "800",
                              color: "#fff",
                              fontFamily: "Inter, sans-serif",
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
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "68px",
                              lineHeight: "82px",
                              fontWeight: "800",
                              color: "#fff",
                              fontFamily: "Inter, sans-serif",
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
                }}
              >
                Trusted by
              </Typography>
              <Grid
                container
                spacing={2}
                sx={{
                  alignItems: "center",
                }}
              >
                {trustecPartyIcons.map((e) => {
                  return (
                    <Grid item xs={2}>
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
                            padding: "0px 10px 0px 0px",
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
          }}
        >
          <img src="../../images/assets/shape-round.png"></img>
        </Box>
        <Box
          sx={{
            padding: "150px 0px",
            bgcolor: "#121929",
          }}
        >
          <Container>
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
                  }}
                >
                  How we work
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    lineHeight: "32px",
                    fontWeight: "300",
                    color: "#A1ACC5",
                    fontFamily: "Inter, sans-serif",
                    margin: "0px auto 60px",
                  }}
                >
                  It’s important that you enjoy your job, and love<br></br> your
                  life outside of work.
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "0px 0px 150px",
                }}
              >
                <Grid container spacing={2}>
                  {howWeWorkCardsGridContent.map((e) => {
                    return (
                      <Grid item xs={4}>
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
                              }}
                            >
                              {e?.title}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "18px",
                                lineHeight: "28px",
                                fontWeight: "300",
                                color: "#A1ACC5",
                                fontFamily: "Inter, sans-serif",
                                margin: "0px",
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
                  }}
                >
                  More than just a job
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    lineHeight: "32px",
                    fontWeight: "300",
                    color: "#A1ACC5",
                    fontFamily: "Inter, sans-serif",
                    margin: "0px auto 60px",
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
                      <Grid item xs={6}>
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
                            }}
                          >
                            <img src={item?.icon}></img>
                            <Box
                              sx={{
                                paddingLeft: "20px",
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
                                }}
                              >
                                {item?.title}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  lineHeight: "26px",
                                  fontWeight: "300",
                                  color: "#A1ACC5",
                                  fontFamily: "Inter, sans-serif",
                                  margin: "0px",
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
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: "160px",
              left: "0",
            }}
          >
            <img src="../../images/assets/shape-left.png"></img>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "250px",
              right: "0",
            }}
          >
            <img src="../../images/assets/ellipse-right.png"></img>
          </Box>
          <Container>
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
                  }}
                >
                  Join our amazing team
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    lineHeight: "32px",
                    fontWeight: "300",
                    color: "#A1ACC5",
                    fontFamily: "Inter, sans-serif",
                    margin: "0px auto 60px",
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
                          }}
                        >
                          {item?.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "18px",
                            lineHeight: "28px",
                            fontWeight: "300",
                            color: "#fff",
                            fontFamily: "Inter, sans-serif",
                            margin: "0px",
                          }}
                        >
                          {item?.description}
                        </Typography>
                      </Box>
                      <Box className="hover-apply">
                        <a href="">
                          <Typography
                            sx={{
                              fontSize: "20px",
                              lineHeight: "20px",
                              fontWeight: "600",
                              color: "#907BFF",
                              fontFamily: "Inter, sans-serif",
                              paddingRight: "15px",
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
                  }}
                >
                  Our Investors
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    lineHeight: "32px",
                    fontWeight: "300",
                    color: "#A1ACC5",
                    fontFamily: "Inter, sans-serif",
                    margin: "0px auto 90px",
                  }}
                >
                  Meet the great investors and people helping to<br></br> make
                  Kodezi grow.
                </Typography>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
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
              }}
            ></Box>

            <Container>
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
                    }}
                  >
                    Hiring process
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      lineHeight: "32px",
                      fontWeight: "300",
                      color: "#A1ACC5",
                      fontFamily: "Inter, sans-serif",
                      margin: "0px auto 90px",
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
                      }}
                    ></Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        margin: "75px 0px",
                        alignItems: "center",
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
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "#1D2539",
                        padding: "32px",
                        borderRadius: "12px",
                      }}
                    >
                      <Typography
                        className="main-banner-title"
                        sx={{
                          fontSize: "20px",
                          lineHeight: "28px",
                          fontWeight: "700",
                          fontFamily: "Inter, sans-serif",
                          color: "#fff",
                          margin: "0px 0px 10px",
                        }}
                      >
                        Send an engaging email
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          lineHeight: "28px",
                          fontWeight: "300",
                          color: "#A1ACC5",
                          fontFamily: "Inter, sans-serif",
                          margin: "0px 0px 25px",
                        }}
                      >
                        Tell us why you want to join Raycast and why you
                        generally care about the problem we're solving.
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          lineHeight: "28px",
                          fontWeight: "300",
                          color: "#A1ACC5",
                          fontFamily: "Inter, sans-serif",
                          margin: "0px",
                        }}
                      >
                        Make your first impression count. Share with us what
                        excites you and how you envision your role at Raycast,
                        what we’re missing, and pack your intro with the amazing
                        work you’ve done.
                      </Typography>
                    </Box>
                    Send an engaging email
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
