// H6 COMPONENT
import Link from 'next/link'
function getAnchor(text) {
    return text
      .toLowerCase()
      //.replace(/[^a-z0-9 ]/g, '')
      .replace(/[ ]/g, '-');
  }
  const H6 = ({ children }) => {
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return (
      <>
        <h6 id={anchor}>
            <Link href={link} className="anchor-link">#</Link>{children}
        </h6>
      </>
    );
  };
  export default H6;