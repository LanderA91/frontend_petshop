import { Stack, Typography, Paper, Box } from "@mui/material";
import { SaleUseContext } from "../Context/SaleContext";
import CartItemConfirm from "../components/menuCart/CartItemConfirm";

export default function Profile() {
  const { total } = SaleUseContext();
  const data = JSON.parse(localStorage.getItem("product"));

  const listCartItems = data.products.map((product) => {
    return (
      <Box key={product.name}>
        <CartItemConfirm product={product} />
      </Box>
    );
  });

  return (
    <Box
      component={Paper}
      maxWidth="xs"
      variant="outlined"
      padding="1.5rem"
      sx={{ width: "70%" }}
    >
      <Stack
        direction="row"
        gap="4rem"
        sx={{ flexDirection: { lg: "column", md: "row" } }}
      >
        <Stack gap="1.5rem" sx={{ order: { lg: "1", md: "0" } }}>
          <Typography textTransform="capitalize" variant="h4" fontWeight="bold">
            Productos a Comprar
          </Typography>
          {listCartItems}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" sx={{ mt: 3 }}>
              Total
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              $ {total.toLocaleString("es-CL")}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
