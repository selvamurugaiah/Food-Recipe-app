import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { MyContext } from "../context";
import { API, DB_API } from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewDish = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    // Getting the particular dish based on the id
    axios.get(`${API}/lookup.php?i=${id}`).then(({ data }) => {
      setRecipe(data.meals);
    });
    // eslint-disable-next-line
  }, []);

 
    return (
      <Container className="viewDish" maxWidth="xl">
        <Box sx={{ maxWidth: "auto", minHeight: "auto" }}>
          <Paper elevation={3}>
            {/* React Player for playing the youtube video */}
            <ReactPlayer width="100%" controls url={recipe[0].strYoutube} />
            <Box sx={{ width: "100%", borderBottom: 2, borderColor: "purple" }}>
              <Tab className="instcTitle" label="Instructions to be Followed" />
            </Box>
            <List className="Instructions">
              {recipe[0].strInstructions.split(".").map((line, i) => {
                const instruction = line.trimStart();

                return (
                  <ListItemText key={i} primary={`${i + 1}: ${instruction}`} />
                );
              })}
            </List>
           
            
            <ToastContainer />
          </Paper>
        </Box>
      </Container>
    );
  }


export default ViewDish;
