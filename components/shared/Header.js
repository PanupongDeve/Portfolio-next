import React from "react";
import Link from "next/link";

class Header extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <React.Fragment>
        <h1>{title}</h1>
        {this.props.children}
        <Link href="/"> Home </Link>
        <Link href="/blogs"> Blogs </Link>
        <Link href="/portfolio"> Portfolio </Link>
        <Link href="/about"> About </Link>
        <Link href="/cv"> CV </Link>
      </React.Fragment>
    );
  }
}

export default Header;
