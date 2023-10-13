import React from "react";
import styled, { useTheme } from "styled-components";
import { Link, Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";
//tailwind css

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-item: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    // display: none;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 20px;
  max-width: 1200px;
  // align-self: center;
  // align-items: center;
  @media screen and (max-width: 640px) {
    // padding: 0 0px;
    align-item: flex-start;
}
`;

const NavLogo = styled(LinkR)`
width: 80%;
padding: 0 6px;
display: flex;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
align-item: center;
@media screen and (max-width: 640px) {
    padding: 0 0px;
    // flex-start
}
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 640px) {
    display: block;
    position: absolute;
    top: 0;
    // align-self: start !important;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  // align-item: center;
  align-items: center;
  list-style: none;
  gap: 32px;
  height: 100%;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all .2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-item: center;
  justify-content: end;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  align-items: center;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const GitHubButton = styled.button`
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0 20px;
  font-size: 1rem;
  font-weight: 500;
  height: 70%;
  :hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }

  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

export const span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  al
  gap: 16px;
  // position: absoulte;
  position: absolute;
  top: 80;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background-color: ${({ theme }) => theme.card_light + 99};
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  border-radius: 0 0 20 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? "100%" : "0")};
  z-index: ${({ open }) => (open ? "1000" : " -1000")};
`;

const MobileMenuLinks = styled(LinkR)`
color: ${({ theme }) => theme.text_primary};
font-weight: 500;
cursor: pointer;
text-decoration: none;
transition: all 0.2s ease-in-out;
&:hover{
color: ${({ theme }) => theme.primary}
}
`;

const Header = () => {

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">
            <a
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                marginBottom: "20;",
                cursor: "pointer"
              }}
            >
              {/* <DiCssdeck size="3rem" /> */}
              <img src="https://drive.google.com/uc?export=view&id=1qmZoQU65vaTOO8UMyzpEP55Fwi2cxBge" style={{
                width: "3rem",
                borderRadius: "30px",
                marginRight: "10px"
              }} />
              <span>Portfolio</span>
            </a>
          </NavLogo>
          <MobileIcon>
            <FaBars
              onClick={() => {
                setOpen(!open);
              }}
            />
          </MobileIcon>
          <NavItems>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Project</NavLink>
            <NavLink href="#Contact">Contact</NavLink>
            <a href="/Blog" rel="noopener noreferrer">Blog</a>

          </NavItems>
          <ButtonContainer>

            <GitHubButton >
              <a href="https://github.com/SurajShekhawat" target="_blank"
                style={{
                  color: `${theme.primary}`,
                  cursor: "pointer",
                  textDecoration: "none"
                }}>GitHub Profile</a>
            </GitHubButton>
          </ButtonContainer>
        </NavContainer>
        {
          open &&
          <MobileMenu open={open}>
            <MobileMenuLinks
              href="#about"
              onClick={() => {
                setOpen(open);
              }}
            >
              About
            </MobileMenuLinks>

            <MobileMenuLinks
              href="#skills"
              onClick={() => {
                setOpen(open);
              }}
            >
              Skills
            </MobileMenuLinks>

            <MobileMenuLinks
              href="#experience"
              onClick={() => {
                setOpen(open);
              }}
            >
              Experience
            </MobileMenuLinks>

            <MobileMenuLinks
              href="#projects"
              onClick={() => {
                setOpen(open);
              }}
            >
              Project
            </MobileMenuLinks>

            <MobileMenuLinks
              href="#Contact"
              onClick={() => {
                setOpen(open);
              }}
            >
              Contact
            </MobileMenuLinks>

            <GitHubButton
              style={{
                padding: "10px 10px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href="https://github.com/SurajShekhawat"
              target="_blank"
            >
              GitHub Profile
            </GitHubButton>
          </MobileMenu>
        }
      </Nav >
    </>
  );
};

export default Header;
