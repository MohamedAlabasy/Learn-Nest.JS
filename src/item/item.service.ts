import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface'
@Injectable()
export class ItemService {
    private readonly item: Item[] = [
        {
            id: '1',
            name: 'mohamed',
            description: 'say any thing',
            qty: 5
        },
        {
            id: '12',
            name: 'mohamed2',
            description: 'say any thing2',
            qty: 5
        }
    ]

    findAll(): Item[] {
        return this.item;
    }

    findOne(_id: string): Item {
        return this.item.find(item => item.id === _id);
    }
}
