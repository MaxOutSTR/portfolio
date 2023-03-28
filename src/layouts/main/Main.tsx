import { FC } from 'react';
import './Main.css'
interface Props {
  children: JSX.Element
}
const Main: FC<Props> = ({ children }) => {
  return (
    <div className="Main">
      {children}
    </div>
  );
}
export default Main;