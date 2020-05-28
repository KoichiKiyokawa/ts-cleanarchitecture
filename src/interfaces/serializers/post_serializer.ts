import {Post}from"../../entities/post.ts"

export class PostSerializer {
  private serializeSingle (post:Post) {
    return {
      id: post.getId(),
      title: post.getTitle(),
      body: post.getBody()
    }
  }
  serialize(posts: Post | Post[]) {
    if (Array.isArray(posts))
      return posts.map(this.serializeSingle)
    else
      return this.serializeSingle(posts)
  }
}
