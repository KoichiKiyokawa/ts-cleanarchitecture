import { AbstractPostRepository } from "../../usecase/abstract_post_repository";
import { DBConnection } from "./db_connection";
import { Post } from "../../entities/post";

export class PostRepository extends AbstractPostRepository {
  #connection: DBConnection;

  constructor(connection: DBConnection) {
    super();
    this.#connection = connection;
  }
  async persist(post: Post) {
    const savedPost = await this.#connection.execute(
      // ここにSQL書くのびみょい
      "INSERT INTO posts (title, body) VALUES (?, ?)",
      [post.getTitle(), post.getBody()],
    );
    post.setId(savedPost.id);
    return post;
  }
}
