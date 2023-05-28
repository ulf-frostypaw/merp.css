// H4 COMPONENT
import Link from 'next/link'
function getAnchor(text) {
    return text
      .toLowerCase()
      //.replace(/[^a-z0-9 ]/g, '')
      .replace(/[ ]/g, '-');
  }
  const H4 = ({ children }) => {
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return (
      <>
        <h4 id={anchor}>
            <Link href={link} className="anchor-link">#</Link>{children}
        </h4>
      </>
    );
  };
  export default H4;