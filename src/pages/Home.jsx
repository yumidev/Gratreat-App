import React from "react";
import styled from "styled-components";
import Logo from "../images/gratreat_logo.png";

export default function Home() {
  const Section = styled.section`
    img {
      padding-top: 200px;
      background-color: white;
    }
  `;

  return (
    <Section className="container">
      <img src={Logo} alt="Home" />
    </Section>
  );
}
