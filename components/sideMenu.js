import Link from "next/link";
import React, { useState } from "react";

function SideMenu({ categories }) {
  return (
    <>
      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
        {categories.map((cate) => (
          <Link key={cate.id} href={`/category/${cate.id}`}>
            <a className="list-group-item text-capitalize">{cate.name}</a>
          </Link>
        ))}
      </div>
    </>
  );
}

export default SideMenu;
