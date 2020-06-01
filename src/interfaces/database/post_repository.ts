import { AbstractPostRepository } from "../../usecase/abstract_post_repository.ts";
import { AbstractDBConnection } from "./abstract_db_connection.ts";
import { Post } from "../../entities/post.ts";
import { TPost } from "../../types/post.ts";

export class PostRepository extends AbstractPostRepository {
  #connection: AbstractDBConnection;

  constructor(connection: AbstractDBConnection) {
    super();
    this.#connection = connection;
  }

  async findAll() {
    const postRows: any = await this.#connection.execute(
      "SELECT * FROM posts",
    );

    return [...postRows].map((row) => {
      const [id, title, body] = row;
      return new Post({ id, title, body });
    });
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
