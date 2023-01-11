import React from "react";

interface Props {
  children: React.ReactNode;
}

export const AppLayout = (props: Props) => {
  const { children } = props;
  return <div className="layout-app">{children}</div>;
};
