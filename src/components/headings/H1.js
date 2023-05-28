// H1 COMPONENT
import Link from 'next/link'
function getAnchor(text) {
    return text
      .toLowerCase()
      //.replace(/[^a-z0-9 ]/g, '')
      .replace(/[ ]/g, '-');
  }
  const H1 = ({ children }) => {
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return (
      <>
        <h1 id={anchor}>
            <Link href={link} className="anchor-link">#</Link>{children}
        </h1>
      </>
    );
  };
  export default H1;