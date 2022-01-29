import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }
    console.log('req', req);
    return {
      message: 'User information from google',
      // req: req,
      user: req.user,
    };
  }
}
