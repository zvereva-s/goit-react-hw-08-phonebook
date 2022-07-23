import useAuth from '../../shared/hooks/useAuth';

import HeaderMenu from './HeaderMenu';
import LoginRegister from 'modules/LoginRegister';
import UserMenu from 'modules/UserMenu';
import styles from './header.module.css';

function Header() {
  const isLogin = useAuth();
  
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <nav className={styles.nav}>
         {isLogin && <HeaderMenu />}
        </nav>
        {isLogin ? <UserMenu /> : <LoginRegister />}
      </div>
    </header>
  );
}

export default Header;
