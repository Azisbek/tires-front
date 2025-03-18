import { Text, Title } from "shared/ui/Text";
import { footerLinksData } from "../api/footerLinksData";
import s from "./FooterLinks.module.scss";

type FooterLinksProps = {
  type: "left" | "right";
};

export const FooterLinks = ({ type }: FooterLinksProps) => {
  const links = footerLinksData[type];

  return (
    <div className={s.footerLinks}>
      {links.map((block, index) => (
        <div key={index} className={s.footerColumn}>
          <Title size="sm-18" className={s.columnTitle}>{block.title}</Title>
          <ul className={s.footerFlex}>
            {block.items.map((item, i) => (
              <li key={i}>
                <Text size="md-16" type="regular" color="black" className={s.footerItem}>
                  {item}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};