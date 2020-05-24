import { Post } from "../entities/post";

export abstract class AbstractPostRepository {
  abstract async persist(post: Post): Promise<Post>;
}
