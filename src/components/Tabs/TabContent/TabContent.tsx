import { Gallery } from "components/Gallery";
import { Content } from "types";
import { Section } from "./styled";

export type TabContentProps = {
  content: Content[];
};

const TabContent = ({ content }: TabContentProps) => {
  return (
    <Section>
      <Gallery content={content as Content[]} />
    </Section>
  );
};

export { TabContent };
