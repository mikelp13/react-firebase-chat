import { Avatar, Button, Container, Grid, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "./Loader";

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );

  const handleChange = (e) => setValue(e.target.value);

  const sendMessage = () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50, marginTop: 20 }}
        justify={"center"}
      >
        <div
          style={{
            width: "80%",
            height: "70vh",
            border: "1px solid grey",
            overflowY: "auto",
          }}
        >
          {messages.map((message, idx) => (
            <div
              key={idx}
              style={{
                margin: 10,
                border:
                  user.uid === message.uid
                    ? "1px solid green"
                    : "1px solid blue",
                borderRadius: 19,
                backgroundColor: user.uid === message.uid ? "lightgreen" : "lightskyblue",

                marginLeft: user.uid === message.uid ? "auto" : "10px",
                width: "fit-content",
                padding: 10,
              }}
            >
              <Grid container style={{ alignItems: "center", marginBottom: 5 }}>
                <Avatar src={message.photoURL} style={{ marginRight: 5 }} />
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          ))}
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "80%" }}
        >
          <TextField
            variant={"outlined"}
            fullWidth
            rowmax={2}
            value={value}
            onChange={handleChange}
          />
          <Button
            onClick={sendMessage}
            variant={"outlined"}
            style={{ marginTop: 10 }}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
