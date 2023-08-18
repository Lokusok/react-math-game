import {useSelector, useDispatch} from 'react-redux';
import doToggleMobileMenu from "../../../store/actions/toggle-mobile-menu";
import Nav from './Nav';


function NavContainer() {
  const dispatch = useDispatch();
  const isNowActive = useSelector((state) => state.options.showMobileMenu);
  const hideMobileMenu = () => {
    dispatch(doToggleMobileMenu(false));
  };

  return (
    <Nav
      isNowActive={isNowActive}
      hideMobileMenu={hideMobileMenu}
    />
  );
}

export default NavContainer;
