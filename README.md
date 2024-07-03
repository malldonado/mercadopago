# Node.js API for MercadoPago Integration

## Description
This Node.js API seamlessly connects to the MercadoPago payment gateway, enabling secure online transactions and streamlining financial processes within your application.

## Features
- Integration with MercadoPago payment gateway.
- Secure handling of financial transactions.
- Easily configurable for different transaction types and currencies.

## Technologies Used
- Node.js
- Express.js
- MercadoPago API

## Installation
1. Clone the repository:

```sh
git clone https://github.com/malldonado/mercadopago
```

2. Install dependencies:

```sh
npm install
```

## Configuration
1. Obtain your MercadoPago API credentials (Client ID and Client Secret).
2. Set your MercadoPago API token in a `.env` file:

```sh
MercadoPagotoken=your_mercadopago_token_here
PORT=8000
```

Replace `your_mercadopago_token_here` with your actual MercadoPago API token.


## Usage
1. Start the server:

```sh
node server.js
```

2. The API will be accessible at `http://localhost:PORT`, where `PORT` is the port configured in your `server.js`.

## API Endpoints
- **POST /payment/create**: Endpoint to create a new payment transaction.
- **GET /payment/:id**: Endpoint to retrieve details of a specific payment by ID.
- **POST /webhook**: Endpoint to receive and handle MercadoPago webhook events.

## Contributing
Contributions are welcome! Fork the repository and submit a pull request.

## License
[MIT License](https://opensource.org/licenses/MIT)
