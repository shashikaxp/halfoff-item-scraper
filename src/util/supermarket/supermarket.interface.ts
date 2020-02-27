import { IItem } from './item.interface';

export interface ISupermarket{

    name: String,
    location: String

    getHalfoffItems(): Promise<IItem[]>

}
