import s from './Anchor.module.scss';

type Section = {
  id: string;
  title: string;
};

type Props = {
  sections: Section[];
  
};

export function Anchor({ sections }: Props) {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={s.anchor}>
      <ul>
        {sections.map((section) => (
          <li key={section.id} onClick={() => handleScroll(section.id)}>
            {section.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}
