import styled from "styled-components";
import { styled as Styled } from "@mui/system";
import { theme } from "../../../utils/theme";

export const HeaderBanner = Styled("div")(({ theme }) => ({
  // [theme.breakpoints.down("xl")]: {
  //   display: "none",
  // },
  backgroundRepeat: "no-repeat",
  backgroundSize: "1300px 1000px",
  height: "100%",
  backgroundPosition: "top",
  padding: "20px 0px 45px",
  backgroundImage: 'url("../../../images/assets/header-shade.png")',
  position: "relative",
  [theme.breakpoints.down("md")]: {
    backgroundSize: "650px 400px",
  },
  [theme.breakpoints.down("sm")]: {
    backgroundSize: "550px 380px",
  },
}));
export const CareerBlock = Styled("div")({
  br: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
});
export const CareerBlockBottom = Styled("div")({
  position: "relative",
  br: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
});
export const CareerBlockTimeline = Styled("div")({
  position: "relative",
  ".hover-apply": {
    display: "flex",
    alignItem: "center",
    a: {
      display: "flex",
      alignItems: "center",
      "&:hover": {
        svg: {
          path: {
            stroke: "#fbb679",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          },
        },
        p: {
          background: "linear-gradient(136deg, #ed9cb1, #f1a3a2, #fbb679)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        },
      },
    },
  },
  br: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
});
export const FixEllipsImg = Styled("div")(({ theme }) => ({
  position: "absolute",
  right: 0,
  top: "0px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  img: {
    width: "auto",
    height: "27vw",
  },
}));
export const BannerBlock = Styled("div")(({ theme }) => ({
  ".year-block-main": {
    "&:hover": {
      ".yearTitle": {
        background:
          "linear-gradient(108.43deg, #4460FA -85.13%, #907BFF -28.86%, #EC9AB6 22.64%, #FEBC6D 101.12%)",
      },
    },
  },
}));
// export const BannerBlock = styled.div`
//   .main-banner-title {
//     font-family: "Inter", sans-serif;
//     span {
//       background: linear-gradient(136deg, #ed9cb1, #f1a3a2, #fbb679);
//       -webkit-background-clip: text;
//       -webkit-text-fill-color: transparent;
//       -webkit-background-clip: text;
//       background-clip: text;
//       -webkit-text-fill-color: transparent;
//     }
//   }
//   .visual-code-btn {
//     background: #fff;
//     color: #020816;
//     padding: 16px 32px;
//     font-weight: 700;
//     font-size: 16px;
//     line-height: 20px;
//     border-radius: 30px;
//     text-transform: none;
//     font-family: "Inter", sans-serif;
//     letter-spacing: -0.1px;
//     svg {
//       margin-right: 8px;
//     }
//     &:hover {
//       background: linear-gradient(
//         108.43deg,
//         #4460fa -85.13%,
//         #907bff -28.86%,
//         #ec9ab6 22.64%,
//         #febc6d 101.12%
//       );
//       box-shadow: none !important;
//       color: #fff;
//     }
//   }
//   .link-block-read {
//     a {
//       text-decoration: underline;
//       font-family: "Inter", sans-serif;
//       font-weight: 500;
//     }
//   }
// `;
export const TopBottomSection = styled.div`
  position: relative;
  .main-code-box {
    img {
      width: 90%;
    }
  }
  .main-sub-box {
    position: absolute;
    height: 26%;
    width: 26%;
    right: 0;
    top: 21%;
    img {
    }
  }
`;
export const TopBottomSectionInner = styled.div`
  position: relative;
  margin-top: -240px;
  padding-bottom: 15px;
`;

export const MiddlesSection = styled.div`
  position: relative;
  .more-box {
    .text-title-banner {
      font-family: "Inter", sans-serif;
      text-transform: uppercase;
    }
  }
  .box-item-block {
    p {
      font-family: "Inter", sans-serif !important;
    }
  }
`;
export const RoundshapeCommonImg = styled.div`
  position: absolute;
  left: 0;
  top: 0px;
`;
export const MiddleBottomSection = styled.div`
  position: relative;
  .middle-section-title {
    .title-block-middle {
      span {
        background: linear-gradient(130deg, #957dfa, #b487e3, #c286be);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
  }
  .item-block-middle {
    img {
      width: 100%;
    }
  }
  .middle-section-bottom {
    img {
      width: 100%;
    }
  }
`;

export const ShapeRoundTop = styled.div`
  position: absolute;
  right: 0;
  height: 28%;
  top: 130px;
`;
export const ShapeRoundBottom = styled.div`
  position: absolute;
  left: 0;
  bottom: 190px;
  height: 28%;
`;
export const BottomTopSection = styled.div`
  position: relative;
  margin-top: -220px;
  .btn-about {
    padding: 16px 32px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-transform: none;
    margin-top: 10px;
    background-color: #fff;
    color: #020816;
    border-radius: 30px;
    &:hover {
      background: linear-gradient(
        108.43deg,
        #4460fa -85.13%,
        #907bff -28.86%,
        #ec9ab6 22.64%,
        #febc6d 101.12%
      );
      box-shadow: none !important;
      color: #fff;
    }
  }
  .box-details {
    .title-box-details {
      background: linear-gradient(
        108.43deg,
        #4460fa -85.13%,
        #907bff -28.86%,
        #ec9ab6 22.64%,
        #febc6d 101.12%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
`;
export const ThreeBlockText = styled.div`
  .title-block-gr {
    span {
      background: linear-gradient(136deg, #ed9cb1, #f1a3a2, #fbb679);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export const ThirdLandingGetStarted = styled.div`
  font-family: "Inter Display";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 64px;
  color: #fff;
  text-align: center;
`;
export const LastBlockColoredText = styled.span`
  background: linear-gradient(130deg, #957dfa, #b487e3, #c286be);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
