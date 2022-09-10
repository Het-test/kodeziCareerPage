// import styled from "styled-components";
import { styled as Styled } from "@mui/system";

// export const Header = styled.div`
//   height: 100%;
//   padding: 30px 0px 45px;
//   font-family: "Inter", sans-serif;
//   .header-link {
//     button {
//       padding: 2px 10px;
//       margin-left: 10px;
//       margin-right: 10px;
//       color: #fff;
//       font-weight: 500;
//       line-height: 18px;
//       font-size: 14px;
//       text-transform: capitalize;
//       font-family: "Inter", sans-serif;
//       border-radius: 24px;
//       &:hover {
//         background-color: #ff000040 !important;
//       }
//     }
//     a {
//       padding: 2px 10px;
//       margin-left: 10px;
//       margin-right: 10px;
//       color: #fff;
//       font-weight: 500;
//       line-height: 18px;
//       font-size: 14px;
//       border-radius: 24px;

//       &:hover {
//         background-color: #ff000040 !important;
//       }
//     }
//   }
//   .right-header {
//     p {
//       background: linear-gradient(
//         108.43deg,
//         #4460fa -85.13%,
//         #907bff -28.86%,
//         #ec9ab6 22.64%,
//         #febc6d 101.12%
//       );
//       -webkit-background-clip: text;
//       font-family: "Inter", sans-serif;

//       -webkit-text-fill-color: transparent;
//       background-clip: text;
//       font-weight: 600;
//       font-size: 16px;
//       margin-right: 25px;
//       line-height: 24px;
//     }
//   }
//   .down-box {
//     background: linear-gradient(
//       108.2deg,
//       #4460fa 0%,
//       #907bff 30.21%,
//       #ec9ab6 57.86%,
//       #febc6d 100%
//     );
//     border-radius: 30px;
//     padding: 2px;
//     .download-btn {
//       padding: 2px;
//       padding: 10px 25px;
//       box-shadow: none;
//       font-size: 14px;
//       line-height: 20px;
//       background: rgb(2, 8, 22);
//       height: 35px;
//       font-weight: 600;
//       color: rgb(255, 255, 255);
//       text-transform: capitalize;
//       border-radius: 100px;
//       font-family: "Inter", sans-serif;
//       &:hover {
//         background-color: #fff;
//         color: rgb(0, 0, 0);
//       }
//     }
//   }
// `;

export const Header = Styled("div")(({ theme }) => ({
  height: "100%",
  padding: "30px 0px 45px",
  fontFamily: "Inter",
  [theme.breakpoints.down("lg")]: {
    padding: "10px 0px 10px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "5px 0px 10px",
  },
  ".header-link": {
    fontFamily: "Inter, sans-serif",
    button: {
      padding: "2px 10px",
      marginLeft: "10px",
      marginRight: "10px",
      color: "#fff",
      fontWeight: "500",
      lineHeight: "18px",
      fontSize: "14px",
      textTransform: "capitalize",
      fontFamily: "Inter",
      borderRadius: "24px",
      "&:hover": {
        backgroundColor: "#ff000040",
      },
      [theme.breakpoints.down("lg")]: {
        marginLeft: "2px",
        marginRight: "2px",
        lineHeight: "16px",
        fontSize: "12px",
        whiteSpace: "nowrap",
      },
    },
    a: {
      padding: "2px 10px",
      marginLeft: "10px",
      marginRight: "10px",
      color: "#fff",
      fontWeight: "500",
      lineHeight: "18px",
      fontSize: "14px",
      borderRadius: "24px",
      "&:hover": {
        backgroundColor: "#ff000040",
      },
      [theme.breakpoints.down("lg")]: {
        marginLeft: "2px",
        marginRight: "2px",
        lineHeight: "16px",
        fontSize: "12px",
        whiteSpace: "nowrap",
      },
    },
  },
  ".right-header": {
    p: {
      background:
        "linear-gradient(108.2deg, #4460FA -85.13%, #907BFF -28.86%, #EC9AB6 22.64%, #FEBC6D 101.12%)",

      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      fontFamily: "Inter",
      fontWeight: "600",
      lineHeight: "16px",
      lineHeight: "24px",
      fontSize: "16px",
      marginRight: "25px",
      [theme.breakpoints.down("lg")]: {
        marginRight: "10px",
        lineHeight: "16px",
        fontSize: "13px",
        whiteSpace: "nowrap",
      },
    },
  },
  ".down-box": {
    background:
      "linear-gradient(108.2deg, #4460FA 0%, #907BFF 30.21%, #EC9AB6 57.86%, #FEBC6D 100%)",
    borderRadius: "30px",
    padding: "2px",
    ".download-btn": {
      padding: "10px 25px",
      boxShadow: "none",
      fontSize: "14px",
      lineHeight: "20px",
      background: "rgb(2, 8, 22)",
      height: "35px",
      fontWeight: "600",
      color: "rgb(255, 255, 255)",
      textTransform: "capitalize",
      borderRadius: "100px",
      fontFamily: "Inter",
      "&:hover": {
        backgroundColor: "#fff",
        color: "#000",
      },
      [theme.breakpoints.down("lg")]: {
        padding: "6px 15px",
        lineHeight: "14px",
        fontSize: "12px",
      },
    },
  },
  ".logo-svg": {
    svg: {
      width: "178px",
      [theme.breakpoints.down("md")]: {
        width: "140px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "90px",
      },
    },
  },
}));
