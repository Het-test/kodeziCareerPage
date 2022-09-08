import styled from "styled-components";

export const Header = styled.div`
  height: 100%;
  padding: 30px 0px 45px;
  font-family: "Inter", sans-serif;
  .header-link {
    button {
      padding: 2px 10px;
      margin-left: 10px;
      margin-right: 10px;
      color: #fff;
      font-weight: 500;
      line-height: 18px;
      font-size: 14px;
      text-transform: capitalize;
      font-family: "Inter", sans-serif;
      border-radius: 24px;
      &:hover {
        background-color: #ff000040 !important;
      }
    }
    a {
      padding: 2px 10px;
      margin-left: 10px;
      margin-right: 10px;
      color: #fff;
      font-weight: 500;
      line-height: 18px;
      font-size: 14px;
      border-radius: 24px;

      &:hover {
        background-color: #ff000040 !important;
      }
    }
  }
  .right-header {
    p {
      background: linear-gradient(
        108.43deg,
        #4460fa -85.13%,
        #907bff -28.86%,
        #ec9ab6 22.64%,
        #febc6d 101.12%
      );
      -webkit-background-clip: text;
      font-family: "Inter", sans-serif;

      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 600;
      font-size: 16px;
      margin-right: 25px;
      line-height: 24px;
    }
  }
  .down-box {
    background: linear-gradient(
      108.2deg,
      #4460fa 0%,
      #907bff 30.21%,
      #ec9ab6 57.86%,
      #febc6d 100%
    );
    border-radius: 30px;
    padding: 2px;
    .download-btn {
      padding: 2px;
      padding: 10px 25px;
      box-shadow: none;
      font-size: 14px;
      line-height: 20px;
      background: rgb(2, 8, 22);
      height: 35px;
      font-weight: 600;
      color: rgb(255, 255, 255);
      text-transform: capitalize;
      border-radius: 100px;
      font-family: "Inter", sans-serif;
      &:hover {
        background-color: #fff;
        color: rgb(0, 0, 0);
      }
    }
  }
`;
