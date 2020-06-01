import * as express from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";
import { PostController } from "../interfaces/controllers/post_controller.ts";
import { SqlConnection } from "./sql_connection.ts";

const router = new express.App();
const sqlConnection = new SqlConnection();
const postController = new PostController(sqlConnection);

router.get("/posts", async (req: express.Request, res: express.Response) => {
  const result = await postController.getAllPosts();
  await res.json(result);
});

router.post("/posts", async (req: express.Request, res: express.Response) => {
  const result = await postController.createPost(req);
  await res.json(result);
});

export { router };
