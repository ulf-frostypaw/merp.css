// H2 COMPONENT
import Link from 'next/link'
function getAnchor(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9áéíóú ]/g, '')
      .replace(/[ ]/g, '-');
  }
  const H2 = ({ children }) => {
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return (
      <>
        <h2 id={anchor}>
            <Link href={link} className="anchor-link">#</Link>{children}
        </h2>
      </>
    );
  };
  export default H2;