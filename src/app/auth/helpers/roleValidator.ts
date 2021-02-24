import {User} from '../../shared/interfaces/user';

export class RoleValidator {
  isSubscriber(user:User): boolean {
      return user.role === 'SUBSCRIBER';
  }

  isNoAuth(user?: User): boolean {
      if(user === null || user.role === 'SUBSCRIBER'){
        return false;
      }
  }
}
