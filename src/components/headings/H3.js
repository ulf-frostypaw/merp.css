// H3 COMPONENT
import Link from 'next/link'
function getAnchor(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9áéíóú ]/g, '')
      .replace(/[ ]/g, '-');
  }
  const H3 = ({ children }) => {
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return (
      <>
        <h3 id={anchor}>
            <Link href={link} className="anchor-link">#</Link>{children}
        </h3>
      </>
    );
  };
  export default H3;