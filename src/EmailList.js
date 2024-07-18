import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const EmailList = ({ datass }) => {
  const groupedData = {};

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
      "inviteId": "05SKXv1htestsdotuNpXn9Cg",
      "email": "arvind.sitestngh@yopmail.com",
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
    "inviteId": "05SKXtesv1hsdotuNpXn9Cg",
    "email": "asstestrvind.singh@yopmail.com",
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
  "inviteId": "05SKXssfv1hsdotuNpXn9Cg",
  "email": "testarvind.singh@yopmail.com",
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
  "inviteId": "05SKXsv1hsdotuNpXn9Cg",
  "email": "arvinds.singh@yopmail.com",
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


  datas.forEach((item) => {
    if (!groupedData[item.email]) {
      groupedData[item.email] = [];
    }
    groupedData[item.email].push(item);
  });

  const [data, setData] = useState(groupedData);
  const [showAll, setShowAll] = useState({});
  const [currentPage, setCurrentPage] = useState({});
  const [hasMore, setHasMore] = useState(true);

  const toggleShowAll = (email) => {
    setShowAll((prevShowAll) => ({
      ...prevShowAll,
      [email]: !prevShowAll[email],
    }));
  };

  const loadMoreDatafss = () => {
    // Simulate loading more data (you can replace this with actual data fetching)
    setTimeout(() => {
      // Update the current page to load more data for each email
      const updatedCurrentPage = {};
      Object.keys(data).forEach((email) => {
        updatedCurrentPage[email] = (currentPage[email] || 0) + 1;
      });
      setCurrentPage(updatedCurrentPage);

      // Check if there's more data to load (based on the first email)
     const firstEmail = Object.keys(data)[0];
      if (firstEmail && updatedCurrentPage[firstEmail] * 2 >= data[firstEmail].length) {
        setHasMore(false);
      }
    }, 100000);
  };

  const loadMoreData = (email) => {
    // Check if the email group exists in data
    if (!data[email]) {
      setHasMore(false); // No more data to load
      return;
    }
  
    // Simulate loading more data for the specified email group (you can replace this with actual data fetching)
    setTimeout(() => {
      // Get the current page count for the specified email group
      const currentPageForEmail = currentPage[email] || 0;
  
      // Calculate the index of the next data to load for the specified email group
      const startIndex = currentPageForEmail * 2;
      const endIndex = startIndex + 2;
  
      // Get the next set of data for the specified email group
      const nextData = data[email].slice(startIndex, endIndex);
  
      // Check if there's more data to load for the specified email group
      if (nextData.length === 0) {
        setHasMore(false); // No more data to load
      } else {
        // Update the current page count for the specified email group
        setCurrentPage((prevCurrentPage) => ({
          ...prevCurrentPage,
          [email]: currentPageForEmail + 1,
        }));
      }
    }, 1000);
  };
  
  
  



  useEffect(() => {
    // Load more data initially
    loadMoreData();
  }, []);

  return (
    <InfiniteScroll
      dataLength={Object.keys(showAll).reduce(
        (total, email) =>
          showAll[email]
            ? total + data[email].length
            : total + (currentPage[email] || 0) * 2,
        0
      )}
      next={loadMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {Object.keys(data).map((email, index) => (
        <div key={index}>
          <h3>Email: {email}</h3>
          {showAll[email] && (
            data[email].map((item, subIndex) => (
              <div key={subIndex}>
                <div>Name: {item.name}</div>
                <div>Status: {item.status}</div>
                <div>Created: {item.created}</div>
                <div>Updated: {item.updated}</div>
                <div>Role Name: {item.roleName}</div>
                <hr />
              </div>
            ))
          )}
          {!showAll[email] && (
            data[email].slice(0, currentPage[email] ? undefined : 2).map((item, subIndex) => (
              <div key={subIndex}>
                <div>Name: {item.name}</div>
                <div>Status: {item.status}</div>
                <div>Created: {item.created}</div>
                <div>Updated: {item.updated}</div>
                <div>Role Name: {item.roleName}</div>
                <hr />
              </div>
            ))
          )}
          {data[email].length > (currentPage[email] || 0) * 2 && (
            <button onClick={() => toggleShowAll(email)}>
              {showAll[email] ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default EmailList;
