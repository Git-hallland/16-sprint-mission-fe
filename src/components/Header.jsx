function Header() {
  return (
    <header>
      <div className="header-inner">
        <a href="/landing.html" className="logo">
          <img src="/images/logo.png" alt="판다마켓" />
        </a>

        <a href="/login/" className="login">
          로그인
        </a>
      </div>
    </header>
  );
}

export default Header;