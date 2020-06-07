import { Post } from "../entities/Post.ts";

export interface IPostRepository {
  findAll(): Promise<Post[]>;
  persist(post: Post): Promise<Post>;
}
