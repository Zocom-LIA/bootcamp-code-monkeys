import './style.scss';
import { CartButton } from '../feature/CartButton';

export const Header = () => {

  return (
    <header className="header">
      <figure className="header__logo"></figure>
      <CartButton />
    </header>
  );
};
