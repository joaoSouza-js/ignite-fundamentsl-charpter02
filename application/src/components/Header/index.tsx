import { HeaderContainer } from "./style";
import { Timer, Scroll } from 'phosphor-react'
import IgniteLogo from '../../assets/svgs/Logo.svg'
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={IgniteLogo} title='ignite logo' alt="dois triângulo verdes um em cima do outro" />
      <nav>
        <NavLink to="/" title="Timer"> <Timer size={'1.5rem'}/> </NavLink>
        <NavLink to="/history" title="Histórico"> <Scroll size={'1.5rem'}/> </NavLink>
      </nav>
    </HeaderContainer>
  )
}
