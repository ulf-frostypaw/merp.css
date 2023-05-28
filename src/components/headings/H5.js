// H5 COMPONENT
import Link from 'next/link'
function getAnchor(text) {
    return text
      .toLowerCase()
      //.replace(/[^a-z0-9 ]/g, '')
      .replace(/[ ]/g, '-');
  }
  const H5 = ({ children }) => {
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return (
      <>
        <h5 id={anchor}>
            <Link href={link} className="anchor-link">#</Link>{children}
        </h5>
      </>
    );
  };
  export default H5;