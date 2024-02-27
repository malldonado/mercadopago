const express = require("express");
const MercadoPago = require("mercadopago");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

//Mercado config with access token
MercadoPago.configure({
  sandbox: true,
  access_token: "", // TOKEN
});

//route /pagar
app.get("/pagar", async (req, res) => {
  var id = "" + Date.now();
  var emailDoPagador = "email@email.com.br";

  //json info by buy
  var dados = {
    item: [
      (item = {
        id: id,
        description: "2x video games, 3x camisas",
        quantity: 1,
        currency_id: "BRL",
        unit_price: parseFloat(150),
      }),
    ],
    payer: {
      email: emailDoPagador,
    },
    external_reference: id
  };

  try {
    var pagamento = await Mercado.preferences.create(dados);
    // Banco.SalvarPagamento({id: id, pagador: emailDoPagador});
    return res.redirect(pagamento.body.init_point);
  } catch (err) {
    return res.send(err.message);
  }
});

app.post("/not", (req, res) => {
  var id = req.query.id;

  setTimeout(() => {
    var filtro = {
      "order.id": id,
    };

    MercadoPago.payment
      .search({
        qs: filtro,
      })
      .then((data) => {
        var pagamento = data.body.results[0];

        if(pagamento != undefined) {
          console.log(pagamento.external_reference);
          console.log(pagamento.status); //payment approved

        } else {
          console.log('Pagamento não existe');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, 20000);
});

app.listen("8000", (req, res) => {
  console.log("server running, port 8000 connected");
});
