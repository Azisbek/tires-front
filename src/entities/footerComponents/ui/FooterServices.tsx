import { Text, Title } from "shared/ui/Text";
import 'shared/styles/global.scss'
export function FooterServices() {
  return (
    <div>
      <Title size="sm-18">Услуги</Title>
      <ul>
        <li>
          <Text size="md-16" type="regular" color="black"> Шиномонтаж</Text>
        </li>
        <li>
          <Text size="md-16" type="regular" color="black"> Всё для шиномонтажа</Text>
        </li>
        <li>
          <Text size="md-16" type="regular" color="black"> Ремонт и правка дисков</Text>
        </li>
      </ul>
    </div>
  )
}
