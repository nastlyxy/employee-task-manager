import Logo from "./Logo/Logo";
import LogoImg from "../img/logo.png";
export default function Header() {
  return (
    <div>
      <Logo name={"Logo"} url={LogoImg} />
    </div>
  );
}
