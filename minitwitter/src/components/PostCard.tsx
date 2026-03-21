type Post = {
  id: number
  title: string
  content: string
  authorId: number
  authorName: string
  likesCount: number
  createdAt: string
}

type Props = {
  post: Post
  currentUser: any
  onLike: (id: number) => void
  onDelete: (id: number) => void
}

export default function PostCard({
  post,
  currentUser,
  onLike,
  onDelete
}: Props) {

  return (

    <div className="border rounded p-3 mb-3">

      <div className="text-sm text-gray-500">
        <strong>{post.authorName}</strong> • {post.createdAt}
      </div>

      <h3 className="font-bold">{post.title}</h3>

      <p>{post.content}</p>

      <button
        onClick={() => onLike(post.id)}
        className="mr-3"
      >
        👍 {post.likesCount}
      </button>

      {currentUser && post.authorId === currentUser.id && (
        <button
          onClick={() => onDelete(post.id)}
          className="text-red-500"
        >
          🗑 Deletar
        </button>
      )}

    </div>

  )

}