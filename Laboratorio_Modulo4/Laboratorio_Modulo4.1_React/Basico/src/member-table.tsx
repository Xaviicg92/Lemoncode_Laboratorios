import React from "react";
import { MembersEntity } from "./model";
import { MemberTableRow } from "./member-table-row";
import { useDebounce } from "use-debounce";
import { Button, Pagination } from "@mui/material";
import TextField from "@mui/material/TextField";

// PRIMERA FORMA

export const MemberTable = () => {
  const [members, setMembers] = React.useState<MembersEntity[]>([]);
  const [company, setCompany] = React.useState("lemoncode");
  const [filter, setFilter] = React.useState("lemoncode");
  //const [debouncedFilter] = useDebounce(company, 2000);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${company}/members`)
      .then((response) => response.json())
      .then((list) => setMembers(list));
  }, [company]);

  return members.map ? (
    <>
      <div className="navigation-bar">
        <TextField
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        ></TextField>
        <Button color="success" onClick={() => setCompany(filter)}>
          Search
        </Button>
      </div>

      <div className="user-list-container">
        <span className="header">Avatar</span>
        <span className="header">Id</span>
        <span className="header">Name</span>
        <span className="header">Profile</span>
        {members.map((member) => (
          <MemberTableRow key={member.id} member={member} />
        ))}
      </div>
    </>
  ) : (
    <>
      <TextField
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      ></TextField>
      <Button color="success" onClick={() => setCompany(filter)}>
        Search
      </Button>
      <div>Not found</div>
    </>
  );
};
