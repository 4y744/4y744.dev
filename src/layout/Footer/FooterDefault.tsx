//Import components
import { Footer } from ".";

export const FooterDefault = () => {
  return (
    <footer
      className="bg-dark-950 p-8
      flex items-start gap-8
      border-t border-t-dark-700"
    >
      <Footer.Section>
        <Footer.Heading>Resources</Footer.Heading>
        <Footer.Link to="">Link 1</Footer.Link>
        <Footer.Link to="">Link 2</Footer.Link>
        <Footer.Link to="">Link 2</Footer.Link>
      </Footer.Section>
      <Footer.Section>
        <Footer.Heading>Resources</Footer.Heading>
        <Footer.Link to="">Link 1</Footer.Link>
        <Footer.Link to="">Link 2</Footer.Link>
        <Footer.Link to="">Link 2</Footer.Link>
      </Footer.Section>
    </footer>
  );
};
