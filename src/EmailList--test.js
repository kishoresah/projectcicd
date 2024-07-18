import React, { useState } from 'react';

const EmailList = ({ data }) => {

  const datas=[
    {
        "inviteId": "05SKXv1hsdotuNpXn9Cg",
        "email": "arvind.singh@yopmail.com",
        "name": "arvind",
        "status": "sent",
        "firstInviteTime": 1695791758535,
        "created": "2023-09-30T04:46:18.062Z",
        "updated": "2023-09-30T04:46:18.062Z",
        "workspaceInfo": {
            "name": "test",
            "isDefault": false,
            "id": "rU1PkS8Xp53yfUs7zcTG"
        },
        "roleName": "vic-admin"
    },
    {
        "inviteId": "MTBDLNHyQufYCwdQnQVX",
        "email": "arvind.singh@yopmail.com",
        "name": "arvind",
        "status": "sent",
        "firstInviteTime": 1695791829833,
        "created": "2023-09-30T04:46:18.149Z",
        "updated": "2023-09-30T04:46:18.149Z",
        "workspaceInfo": {
            "name": "Rsystems Workspace",
            "isDefault": false,
            "id": "W1MxNJlI77a9JGqvx4ml"
        },
        "roleName": "vic-admin"
    },
    {
        "inviteId": "R2YRbB1c6OySccHgQ9VF",
        "email": "arvind.singh@yopmail.com",
        "name": "arvind",
        "status": "sent",
        "firstInviteTime": 1695788581774,
        "created": "2023-09-30T04:46:18.270Z",
        "updated": "2023-09-30T04:46:18.270Z",
        "workspaceInfo": {
            "name": "Default Workspace",
            "isDefault": true,
            "id": "8MCki0Jck8LCkQwZwgJN"
        },
        "roleName": "vic-admin"
    },
    {
        "inviteId": "gMRFhaE2iuv7kkQNs9o3",
        "email": "arvind.singh@yopmail.com",
        "name": "arvind",
        "status": "sent",
        "firstInviteTime": 1695791863116,
        "created": "2023-09-30T04:46:18.424Z",
        "updated": "2023-09-30T04:46:18.424Z",
        "workspaceInfo": {
            "name": "test1",
            "isDefault": false,
            "id": "AB7n3mGRg77r7FPgPIN9"
        },
        "roleName": "workspace-owner"
    },
    {
        "inviteId": "gYqVmThGMIsxYLZhcvfH",
        "email": "n12_ad@mailinator.com",
        "name": null,
        "status": "sent",
        "firstInviteTime": 1696047493548,
        "created": "2023-09-30T04:46:18.466Z",
        "updated": "2023-09-30T04:46:18.466Z",
        "workspaceInfo": {
            "name": "Default Workspace",
            "isDefault": true,
            "id": "8MCki0Jck8LCkQwZwgJN"
        },
        "roleName": "vic-admin"
    }
];

  const groupedData = {};

  // Group the data by email address
  datas.forEach((item) => {
    if (!groupedData[item.email]) {
      groupedData[item.email] = [];
    }
    groupedData[item.email].push(item);
  });

  const [showAll, setShowAll] = useState({});
  
  const toggleShowAll = (email) => {
    setShowAll({
      ...showAll,
      [email]: !showAll[email]
    });
  };
console.log("groupedData",groupedData)
  return (
    <div>
      {Object.keys(groupedData).map((email, index) => (
        <div key={index}>
          <h3>Email: {email}</h3>
          {groupedData[email].map((item, subIndex) => (
            <div key={subIndex}>
              <div>Name: {item.name}</div>
              <div>Status: {item.status}</div>
              <div>Created: {item.created}</div>
              <div>Updated: {item.updated}</div>
              <div>Role Name: {item.roleName}</div>
              <hr />
            </div>
          ))}
          {groupedData[email].length > 2 && (
            <button onClick={() => toggleShowAll(email)}>
              {showAll[email] ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default EmailList;
