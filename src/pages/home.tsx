import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { getAsk } from "../services/calls";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage: React.FC = () => {
  async function callAsks(){
    try {
      
      const response = await getAsk();
    } catch (error) {
      console.log("erro: ", error);
      console.info('teste')
    }
  }

  useEffect(()=>{
    callAsks()
  },[])
  const navigate = useNavigate();
  return (
    <Box>
      <Header />
    </Box>
  );
};

export default HomePage;
