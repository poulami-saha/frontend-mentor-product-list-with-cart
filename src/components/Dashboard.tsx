import DesertDetails from "./DesertDetails";
import Cart from "./Cart";
import styles from "./Dashboard.module.css";
import { Deserts } from "../model/deserts";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Desserts</h1>
      <div className={styles.container}>
        <Container className={styles.left}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >
            {Deserts.map((desert) => {
              return <DesertDetails desert={desert} key={desert.id} />;
            })}
          </Grid>
        </Container>

        <Cart />
      </div>
    </div>
  );
};
export default Dashboard;
