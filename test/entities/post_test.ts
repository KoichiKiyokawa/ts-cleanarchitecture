import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { Post } from "../../src/entities/post.ts";

Deno.test("post entity", () => {
  const post = new Post({ id: 1, title: "post1", body: "body1" });
  assertEquals(post.getId(), 1);
  assertEquals(post.getTitle(), "post1");
  assertEquals(post.getBody(), "body1");
});
