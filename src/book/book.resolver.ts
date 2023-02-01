import { Resolver,Query } from '@nestjs/graphql';
import { Book } from './book.schema';

@Resolver(of => Book)
export class BookResolver {
    @Query(returns => [Book],{name:'books'})
  getAllBooks() {
    //return all books
    return [
      {
        id: 1,
        title: 'Book 1',
        price: 50,
      },
      {
        id: 2,
        title: 'Book 2',
        price: 1000,
      },
      {
        id: 3,
        title: 'Book 3',
        price: 2000,
      }
    ];
  }
}
