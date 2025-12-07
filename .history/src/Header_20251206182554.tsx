// ===== Botão Hamburguer Animado =====
const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const AnimatedHamburgerButton: React.FC<{ onClick: () => void; active: boolean }> = ({ onClick, active }) => {
  const VARIANTS = {
    top: { open: { rotate: 45, y: 8 }, closed: { rotate: 0, y: 0 } },
    middle: { open: { opacity: 0 }, closed: { opacity: 1 } },
    bottom: { open: { rotate: -45, y: -8 }, closed: { rotate: 0, y: 0 } },
  };

  return (
    <MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={onClick}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: 40,
          height: 40,
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <motion.span
          variants={VARIANTS.top}
          style={{ display: "block", width: 30, height: 3, background: "#fff", marginBottom: 5 }}
        />
        <motion.span
          variants={VARIANTS.middle}
          style={{ display: "block", width: 30, height: 3, background: "#fff", marginBottom: 5 }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          style={{ display: "block", width: 30, height: 3, background: "#fff" }}
        />
      </motion.button>
    </MotionConfig>
  );
};

// ===== Header Component =====
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo src={LogoImg} alt="Logo" />

      <HamburgerWrapper>
        <AnimatedHamburgerButton onClick={() => setMenuOpen(!menuOpen)} active={menuOpen} />
      </HamburgerWrapper>

      <NavLinks open={menuOpen}>
        <NavItem>
          <a href="#section-01">Home</a>
        </NavItem>
        <NavItem>
          <a href="#section-02">Sobre</a>
        </NavItem>
        <NavItem>
          <a href="#section-03">Projetos</a>
        </NavItem>
        <NavItem>
          <a href="#section-04">Contato</a>
        </NavItem>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
