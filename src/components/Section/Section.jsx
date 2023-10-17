import { DivSectionTitle, HTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <DivSectionTitle>
      <HTitle>{title}</HTitle>
      {children}
    </DivSectionTitle>
  );
};

export { Section };
