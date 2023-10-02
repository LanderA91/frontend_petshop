import { Stack, Avatar, Typography, Paper, Box } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";


export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <Box component={Paper} maxWidth="md" variant="outlined" padding='1.5rem'>
      <Stack
        direction='row'
        alignItems="center"
        justifyContent="space-around"
        gap="4rem"
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Stack gap="1.5rem" sx={{ order: { xs: '1', md: '0' } }}>
          <Typography textTransform='capitalize' variant='h4' fontWeight="bold" >{user.name} {user.lastname}</Typography>
          <Typography variant='h5'>{user.email}</Typography>
        </Stack>
        <Avatar alt="Peter" src={user.img_avatar} sx={{ width: '200px', height: '200px' }}></Avatar>
      </Stack>
    </Box>
  )
}