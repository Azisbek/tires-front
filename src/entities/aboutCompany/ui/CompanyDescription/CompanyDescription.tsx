import { Text, Title } from 'shared/ui/Text';
import s from './CompanyDescription.module.scss';
import img from '../../../../shared/assets/imgs/noneImage.png';

export function CompanyDescription() {

  
  return (
    <div className={s.companyDescriotion}>
      <div className={s.content}>
        <Title size='xl-40' className={s.description}>О Компании</Title>
        <img className={s.img} src={img} alt="" />

        <div id='history' className={s.section}>
          <Title className={s.title} size='md-24'>Работаем с 2018 года</Title>
          <Text className={s.text} size='md-16'>
            Чувствительность к командам водителя, а также устойчивость автомобиля гарантируют установленные под специальным уклоном к центру тяжести автомобиля грани средних ребер и элементов грунтозацепов. Широкие борозды в форме трапеции, которые покрывают внешний слой модели, помогают шине самоочищаться. Они сгоняют воду и грязь под шину, что также помогает не впитывать лишнюю влагу.
          </Text>
        </div>

        <div id='values' className={s.section}>
          <Title className={s.title} size='md-24'>Основные ценности компании</Title>
          <Text className={s.text} size='md-16'>
            При создании шин были применены следующие технологии:                                   
            «3D Mode» — рисунок протектора создавался при помощи ручного 3D моделирования. Таким образом, разработчики заранее смогли увидеть все недочеты и устранить их;
            «Contact with road» — широкая площадь контакта с поверхностью достигается за счет скошенным форма и рисунка протектора;
            «Dissymmetric drawing» — отвод воды и грязи шины достигается при помощи асимметричного рисунка протектора, что дает хорошую управляемость при маневрировании.
          </Text>
        </div>

        <div id='clients' className={s.section}>
          <Title className={s.title} size='md-24'>Мы работаем для наших клиентов</Title>
          <Text className={s.text} size='md-16'>
            При создании шин были применены следующие технологии:
            «3D Mode» — рисунок протектора создавался при помощи ручного 3D моделирования. Таким образом, разработчики заранее смогли увидеть все недочеты и устранить их;
            «Contact with road» — широкая площадь контакта с поверхностью достигается за счет скошенным форма и рисунка протектора;
            «Dissymmetric drawing» — отвод воды и грязи шины достигается при помощи асимметричного рисунка протектора, что дает хорошую управляемость при маневрировании.
          </Text>
        </div>
      </div>
      
      
    </div>
  );
}
