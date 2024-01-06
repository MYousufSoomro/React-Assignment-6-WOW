import { useState } from "react";
import "./App.css";
import ResponsiveAppBar from "./components/Appbar";
import Card from "./components/Card";
import { Button, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import image1 from "./assets/pro-hm1-1.webp";
import image2 from "./assets/pro-hm1-2.webp";
import image3 from "./assets/pro-hm1-3.webp";
import image4 from "./assets/pro-hm1-4.webp";

function App() {
  const [showDetail, setShowDetail] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(1);

  const products = [
    {
      title: "Classy Chair",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint est accusamus quaerat, inventore odit quasi accusantium sunt quia consequatur fuga!",
      image: image1,
    },
    {
      title: "Screw Classy Chair",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint est accusamus quaerat, inventore odit quasi accusantium sunt quia consequatur fuga!",
      image: image2,
    },
    {
      title: "Stacked Chair",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint est accusamus quaerat, inventore odit quasi accusantium sunt quia consequatur fuga!",
      image: image3,
    },
    {
      title: "Alpha Chair Pro",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint est accusamus quaerat, inventore odit quasi accusantium sunt quia consequatur fuga!",
      image: image4,
    },
  ];

  const handleCardDetails = (id) => {
    setShowDetail(true);
    setCurrentProduct(id);
  };

  return (
    <>
      <ResponsiveAppBar />
      {!showDetail && (
        <div className="container">
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 5 }}
          >
            <h1>Best Sell</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              voluptates quam eveniet enim corporis totam, ut nostrum nihil!
              Velit, est.
            </p>
          </Stack>
          <Divider sx={{ my: 5 }} />
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
            // direction="row"
            justifyContent="center"
            alignItems="center"
            // spacing={2}
          >
            {products.map((product, id) => {
              return (
                <Card
                  image={product.image}
                  title={product.title}
                  key={id}
                  onClick={() => handleCardDetails(id)}
                />
              );
            })}
          </Stack>
          <div className="cards"></div>
        </div>
      )}

      {showDetail && (
        <div>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 5 }}
          >
            <h1>{products[currentProduct].title}</h1>
            <div>
              <img src={products[currentProduct].image} height={300} />
            </div>
            <p>{products[currentProduct].description}</p>
            <Divider sx={{ my: 5 }} />
            <Button
              variant="contained"
              color="warning"
              onClick={() => setShowDetail(false)}
            >
              Back
            </Button>
          </Stack>
        </div>
      )}
    </>
  );
}

export default App;
