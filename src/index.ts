import * as http from 'node:http';
import * as dotenv from 'dotenv';

dotenv.config()

const port: number = Number(process.env.PORT);
const hostname: string = "127.0.0.1";

const server = http.createServer(
  (_: http.IncomingMessage, res: http.ServerResponse) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello')
  }
)

server.listen(
  port, hostname, () => {
    console.log(
      `Server running at http://${hostname}:${port}/`
    );
  }
);
