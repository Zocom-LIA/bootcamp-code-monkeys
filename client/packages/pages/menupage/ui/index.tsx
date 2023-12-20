import './style.scss';
import { wontons } from '../../../../../data/menu.json'
import { Card } from '@zocom/card';

export const Menupage = () => {
  return (
    <section>
      {wontons && wontons.map((wonton, index) => (
        <Card props={wonton} key={index} />
      ))}
    </section>
  )
}
