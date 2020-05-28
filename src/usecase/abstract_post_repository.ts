import { Post } from "../entities/post.ts";

export abstract class AbstractPostRepository {
  abstract async findAll(): Promise<Post[]>;
  abstract async persist(post: Post): Promise<Post>;
}
