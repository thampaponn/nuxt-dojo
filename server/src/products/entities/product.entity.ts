import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    price: number;

    @Column()
    description: string;

    @Column()
    image: string;

    constructor(product: Partial<Product>) {
        Object.assign(this, product);
    }
}
