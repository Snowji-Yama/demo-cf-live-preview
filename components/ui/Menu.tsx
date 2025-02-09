import Link from "next/link";

const Menu = () => {
  return (
    <div className="h-[10%] navbar bg-base-100">
      <div className="navbar-start" />
      <div className="navbar-center">
        <Link href="/" className="text-3xl font-bold">Demo Contentful Live Preview</Link>
      </div>
      <div className="navbar-end" />
    </div>
  );
};

export default Menu;
