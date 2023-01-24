import React from "react";

interface Props {
  children: React.ReactNode;
}

export const AppLayoutCenter = (props: Props) => {
  const { children } = props;
  return <div className="layout-center">{children}</div>;
};
