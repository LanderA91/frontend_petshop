import { Alert, AlertTitle, Container, Stack, Typography } from "@mui/material";
import FavoriteListItem from "../components/favorites/FavoriteListItem";

import { FavoritesContext } from "../Context/FavoritesProvider";

import { PacmanLoader } from "react-spinners";
import { useContext } from "react";


export default function Favorites() {


  const { favorites } = useContext(FavoritesContext);

  const listFavorites = favorites.map((favoriteItem) => {
    return (
      <FavoriteListItem key={favoriteItem.name} favoriteItem={favoriteItem} />
    )
  });

  return (

    <Container maxWidth="md" padding='1.5rem' gap='1rem'>

      <Stack gap='1.5rem' mt='1rem'>
        <Typography variant="h3" fontWeight='bold'>Mis Favoritos</Typography>
        {/* The loader will be implemented later on the project */}
        {/* {loadingFavorites ? (<Box sx={{ display: 'flex', width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center', }}><PacmanLoader
          color='#3A98B9'
          size={47}
        /> </Box>) : listFavorites} */}


        {favorites.length === 0 ?
          <Container>
            <Alert variant="outlined" severity="info">
              <AlertTitle>Tu Lista de Favoritos se encuentra vacía.</AlertTitle>
              <Typography ><strong>¡Te invitamos a revisar nuestra galería de productos!</strong> y marcar como favoritos los que te interesen.
              </Typography>
            </Alert>
          </Container> : listFavorites}

      </Stack>
    </Container>
  );
}