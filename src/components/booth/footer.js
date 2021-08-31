import React, { useContext } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import PortfolioContext from "../../context/context";
import Title from "components/booth/title";
import { Typography } from "@material-ui/core";
function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [year, month, day].join(".");
}

function Copyright() {
  const date = new Date();
  return (
    <Typography variant="body2" style={{ color: "white" }}>
      {"Copyright © "}
      <Link
        style={{ color: "white" }}
        href="https://github.com/mj-club/Club_Promotion_Platform"
      >
        총동아리연합회 비상대책위원회
      </Link>{" "}
      {/* {` ${formatDate(date)}`} */}
    </Typography>
  );
}
const Footer = () => {
  // const { footer } = useContext(PortfolioContext);
  // const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <hr />
        <Row className="justify-content-md-center">
          <p>명지대학교 인문캠퍼스 제37대 총동아리연합회 키움</p>
        </Row>
        <Row className="justify-content-md-center">
          <p
            className="footer__text"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* © {new Date().getFullYear()} - Template developed by{" "}
          <a
            href="https://github.com/cobidev"
            target="_blank"
            rel="noopener noreferrer"
          > */}
            Developers: 회장 유도진 | 부회장 김휘준 | 정동준
            <br></br>
            Desinger: 기획국장 이연주 | 홍보국장 노현정 | 홍보국원 신경민<br></br>
            Copyright © 명지대학교 인문캠퍼스 제37대 총동아리연합회 키움
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
