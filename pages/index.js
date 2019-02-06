import React from 'react';
import Link from 'next/link';

class Index extends React.Component {

  render() {
    return (
      <div>
        <h1>I am Page from Class Component</h1>
        <Link href="/"> Home </Link>
        <Link href="/blogs"> Blogs </Link>
        <Link href="/portfolio"> Portfolio </Link>
        <Link href="/about"> About </Link>
        <Link href="/cv"> CV </Link>
      </div>
    );
  }
}

export default Index;