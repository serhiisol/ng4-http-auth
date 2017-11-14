import * as express from 'express';
import { Response as Res } from 'express';
import { Response, Controller, Get, Post, attachControllers } from '@decorators/express';
import { Injectable } from '@decorators/di';

@Injectable()
@Controller('/')
class UsersController {

  private passUsers = false;
  private passData = false;

  @Post('/login')
  public login(@Response() res): void {
    res.send(this.generateTokens());
  }

  @Post('/refresh')
  public refresh(@Response() res): void {
    // emulate long request
    setTimeout(() => res.send(this.generateTokens()), 1000);
  }

  @Get('/users')
  public getUsers(@Response() res: Res): void {
    this.passUsers = !this.passUsers;

    if (this.passUsers) {
      res.send([
          {
              'id': 1,
              'name': 'John Doe'
          },
          {
              'id': 2,
              'name': 'Jane Doe'
          }
      ]);
    } else {
      res.status(401).send();
    }
  }

  @Get('/data')
  public getData(@Response() res: Res): void {
    this.passData = !this.passData

    if (this.passData) {
      res.send([
        {
            'id': 1,
            'name': 'Pepsi'
        },
        {
            'id': 2,
            'name': 'Coca-Cola'
        }
      ]);
    } else {
      // emulate long request
      setTimeout(() => res.status(401).send(), 300);
    }

  }

  private generateTokens() {
    return {
      accessToken: 'access-token-' + Math.random(),
      refreshToken: 'access-token-' + Math.random()
    };
  }

}

const app = express();

app.use((
  _req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

attachControllers(app, [
  UsersController
]);

app.listen(3000);
