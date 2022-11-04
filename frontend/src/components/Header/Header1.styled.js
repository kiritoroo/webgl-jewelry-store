import styled from 'styled-components'

const handleType = $type => {
  switch ($type) {
    case "bottom":
      return "position: absolute;"
    case "sticky":
      return "position: fixed; top: 0;"
    default:
      return ""
  }
}

const StyledHeader = styled.div`
  background: #FFFFFF;
  width: 100%;
  height: 50px;
  padding: 10px 10px;
  overflow: hidden;
  text-align: center;
  ${({ $type }) => handleType($type)};
  bottom: 0;
  z-index: 9999999999;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > div {
    padding: 10px 5%;
    transform: translateY(-10%);
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 100%;
    letter-spacing: 0.05em;
    font-family: Cormorant Garamond;
    pointer-events: none;
    user-select: none;

    @media screen and (max-width: 1200px) {
      transform: translateY(-5%);
      font-size: 1rem;
      font-weight: 600;
      line-height: 100%;
      letter-spacing: 0.05em;
    }
  }

  > a {
    font-family: Cormorant Garamond;
    letter-spacing: 3px;
    font-size: 1.0em;
    font-weight: 500;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 10px;
    text-transform: uppercase;
    text-decoration: none;
    color: #000000;
    transition: color 0.2s ease;

    :hover {
      color: #FFB4BF;
      font-weight: 500;
    }

    @media screen and (max-width: 1200px) {
      letter-spacing: 2px;
      font-size: 0.8em;
      font-weight: 500;
      padding-left: 5%;
      padding-right: 5%;
    }
  }
`;

export { StyledHeader }