import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Public } from "../components/routesProtection/Public";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { saveToken, token, getProfileUser, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      getProfileUser(token);
    } else {
      setUser(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(import.meta.env.VITE_URL + `users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        await saveToken(data.token);
        navigate("/dashboard");
      } else {
        throw data.result;
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error,
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <>
      <Public>
        <Container sx={{ p: "2rem" }}>
          <Paper elevation={15} sx={{ width: "70%", margin: "0 auto" }}>
            <form onSubmit={handleSubmit}>
              <Box sx={{ flexGrow: 1, display: "grid", gap: 4, p: 3 }}>
                <Typography variant="h4" textAlign="center" sx={{ my: 2 }}>
                  Acceder
                </Typography>
                <TextField
                  label="Email"
                  type="text"
                  value={email || ""}
                  placeholder="Email ..."
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  fullWidth
                />
                <TextField
                  label="Password"
                  type="password"
                  value={password || ""}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  fullWidth
                />
                <Button type="submit" variant="contained" color="primary">
                  Login
                </Button>
              </Box>
            </form>
          </Paper>
        </Container>
      </Public>
    </>
  );
}
