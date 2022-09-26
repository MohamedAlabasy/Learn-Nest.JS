import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUserByID(param, postID): object | null {
        return {
            id: param.id,
            postID: postID,
            userName: 'mohamed',
            age: 25
        }
        // return {}
        // return null
    }
}
