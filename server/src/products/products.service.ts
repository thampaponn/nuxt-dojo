import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { EntityManager, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
    private readonly entityManager: EntityManager
  ) { }
  async create(createProductDto: CreateProductDto) {
    const product = new Product(createProductDto);
    await this.entityManager.save(product);
    return product;
  }

  async findAll() {
    return this.productsRepository.find();
  }

  async findOne(id: number) {
    return this.productsRepository.findOneBy({ id });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productsRepository.findOneBy({ id });
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    product.title = updateProductDto.title;
    product.price = updateProductDto.price;
    product.description = updateProductDto.description;
    product.image = updateProductDto.image;
    return await this.entityManager.save(product);
  }

  async remove(id: number) {
    const product = await this.productsRepository.findOneBy({ id });
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    return this.productsRepository.remove(product);
  }
}
