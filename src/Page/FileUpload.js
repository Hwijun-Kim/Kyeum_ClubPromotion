import { Box, Button, setRef } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { dbService, storageService } from "fbase";

const FileUpload = ({ clubObj }) => {
  //test
  const mkArr = () => {
    const textArea = document.getElementById("upload");
    const lines = textArea.value.split("\n");
    return lines;
  };
  const upload = async (lines) => {
    const clubName = document.getElementById("clubName").value;
    const field = document.getElementById("field").value;
    if (field === "recruitment") {
      const state = await dbService.collection("clubs").doc(clubName).update({
        recruitment: lines,
      });
    } else if (field === "introduction") {
      const state = await dbService
        .collection("clubs")
        .doc(clubName)
        .update({
          introduction: lines,
        });
    } else {
      const state = await dbService
        .collection("departments")
        .doc(clubName)
        .update({
          information_m: lines,
        });
    }
  };
  const handleUpload = async () => {
    const lines = mkArr();
    upload(lines);
  };
  return (
    <>
      <Grid container>
        <textarea rows="30" cols="300" id="upload"></textarea>
      </Grid>
      <Grid container>
        <input id="clubName" placeholder="동아리명"></input>
        <input id="field" placeholder="필드명"></input>
      </Grid>
      <Grid container>
        <Button
          type="button"
          fullWidth
          variant="contained"
          onClick={handleUpload}
        >
          등록
        </Button>
      </Grid>
    </>
  );
};
export default FileUpload;
