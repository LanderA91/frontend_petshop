import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Public } from "../components/routesProtection/Public";
import Swal from "sweetalert2";

export default function Register() {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [password, setPassword] = useState("");
  const [img_avatar, setImg_avatar] = useState("");



  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleApellido = (e) => {
    setApellido(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleImgAvatar = (e) => {
    setImg_avatar(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: nombre,
      lastName: apellido,
      email: email,
      password: password,
      img_avatar: img_avatar
    };

    try {
      const response = await fetch(import.meta.env.VITE_URL + "users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Usuario Registrado con Exito",
          confirmButtonText: "Aceptar",
          didClose: () => {
            window.location.href = "/login";
          },
        });
      } else {
        throw response;
      }
    } catch (error) {
      const msg = await error.json();
      let msgError = msg.result;
      !msgError ? (msgError = msg.error) : null;
      Swal.fire({
        icon: "error",
        title: msgError,
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
                  Registro
                </Typography>
                <TextField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  fullWidth
                />
                <TextField
                  label="Nombre"
                  type="text"
                  value={nombre}
                  onChange={handleNombre}
                  fullWidth
                />
                <TextField
                  label="Apellidos"
                  type="text"
                  value={apellido}
                  onChange={handleApellido}
                  fullWidth
                />
                <TextField
                  label="Imagen de Avatar"
                  type="text"
                  value={img_avatar}
                  onChange={handleImgAvatar}
                  fullWidth
                />
                <TextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  fullWidth
                />
                <Button type="submit" variant="contained" color="primary">
                  Registrar
                </Button>
              </Box>
            </form>
          </Paper>
        </Container>
      </Public>
    </>
  );
}
