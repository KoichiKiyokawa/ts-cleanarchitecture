import { Post } from "../entities/Post.ts";

export interface IPostRepository {
  findAll(): Promise<Post[]>;
  findById(postId: number): Promise<Post>;
  persist(post: Post): Promise<Post>;
}
