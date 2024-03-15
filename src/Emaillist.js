import React, { useEffect, useState } from "react";
import "./css/Emaillist.css";

import HeaderSettings from "./HeaderSettings";
import Emailtype from "./Emailtype";
import Emailbody from "./Emailbody";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";

const Emaillist = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "emails"), (doc) => {
      setEmails(
        doc.docs.map((item) => ({
          data: item.data(),
          id: item.id,
        }))
      );
    });
  }, []);

  return (
    <div className="emaillist">
      <HeaderSettings />
      <Emailtype />
      {emails.map(({ id, data }) => (
        <Emailbody
          key={id}
          name={data.fromName}
          subject={data.subject}
          message={data.message}
          time={new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()}
        />
      ))}
    </div>
  );
};

export default Emaillist;
