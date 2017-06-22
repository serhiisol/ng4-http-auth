import { AuthenticationService } from './authentication.service';

export function factory(authenticationService: AuthenticationService) {
  return authenticationService;
}
