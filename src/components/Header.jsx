const Header = () => {
  return (
    <nav className='blue darken-1'>
      <div className='nav-wrapper'>
        <a href='.' className='brand-logo'>
          React Fortnite Shop
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='https://github.com/EvgeniiKolesnikov/react-fortnite-shop' target='_blank' rel='noreferrer'>
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
