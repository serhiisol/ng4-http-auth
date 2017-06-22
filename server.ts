import * as express from 'express';
import { Response as Res } from 'express';
import {
  Response, Params, Controller, Get, Post,
  bootstrapControllers, Middleware
} from '@decorators/express';

let passRequest = false;

@Controller('/')
class UsersController {
  @Post('/login')
  login(@Response() res) {
    res.send({ accessToken: 'access-token', refreshToken: 'refresh-token' });
  }

  @Post('/refresh')
  refresh(@Response() res) {
    this.login(res);
  }

  @Get('/data')
  getData(@Response() res: Res) {
    passRequest = !passRequest;

    if (passRequest) {
      return res.send([
          {
              'id': 1,
              'name': 'John Doe'
          },
          {
              'id': 2,
              'name': 'Jane Doe'
          }
      ]);
    }

    return res.status(401).send();
  }

}

const app = express();

app.use((
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
}
);


bootstrapControllers(app, [ { provide: UsersController, deps: []} ]);
app.listen(3000);
