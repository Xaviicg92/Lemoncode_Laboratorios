import React from "react";
import { MembersEntity } from "./model";

interface Props {
  member: MembersEntity;
}

export const MemberTableRow: React.FC<Props> = (props) => {
  const { member } = props;
  console.log(member.id);
  return (
    <React.Fragment key={member.id}>
      <img src={member.avatar_url} />
      <span>{member.id}</span>
      <span>{member.login}</span>
      <a href={member.html_url} target="_blank">
        {member.html_url}
      </a>
    </React.Fragment>
  );
};
