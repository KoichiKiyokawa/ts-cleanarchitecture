import { Post } from "../../entities/Post.ts";
import { IDbConnection } from "../database/IDbConnection.ts";
import { IPostRepository } from "../../entities/IPostRepository.ts";

export class PostRepository implements IPostRepository {
  constructor(private _connection: IDbConnection) {}

  async findAll() {
    const postRows: any = await this._connection.execute(
      "SELECT * FROM posts",
    );

    return [...postRows].map((row) => {
      const [id, title, body] = row;
      return new Post({ id, title, body });
    });
  }

  async persist(post: Post) {
    const savedPost = await this._connection.execute(
      // ここにSQL書くのびみょい。SQLではなく、NoSQLやグラフDBになったときに対応できない
      "INSERT INTO posts (title, body) VALUES (?, ?)",
      [post.getTitle(), post.getBody()],
    );
    post.setId(savedPost.id);
    return post;
  }

  async findById(postId: number) {
    const postRecord = await this._connection.execute(
      "SELECT * FROM posts where post_id = ?",
      [postId],
    );
    const [id, title, body] = postRecord;
    const post = new Post({ id, title, body });
    return post;
  }
}
