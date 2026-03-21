import { useState, useEffect } from "react";
import { usePosts } from "../hooks/usePosts";
import { Image, Heart } from "lucide-react";
import { Trash2, Edit2 } from "lucide-react";

type Props = {
    dropDown: "darkmode" | "lightmode";
    search: string;
    isGuest: boolean;
};

export default function Feed({ dropDown, search, isGuest }: Props) {
    const [currentPage, setCurrentPage] = useState(1);
    const { posts, total, limit, createPost, deletePost, likePost, updatePost } = usePosts(currentPage, search);

    const totalPages = Math.ceil(total / limit);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [likedPosts, setLikedPosts] = useState<number[]>([]);

    const [editingPostId, setEditingPostId] = useState<number | null>(null);
    const [editTitle, setEditTitle] = useState("");
    const [editContent, setEditContent] = useState("");
    const [editImage, setEditImage] = useState<File | null>(null);

    const currentUser = JSON.parse(localStorage.getItem("user") || "{}");

    useEffect(() => {
        setCurrentPage(1);
    }, [search]);

    async function handleCreatePost() {
        if (!title || !content) return;

        let base64Image: string | undefined;
        if (image) {
            base64Image = await toBase64(image);
        }

        await createPost({
            title,
            content,
            ...(base64Image ? { image: base64Image } : {}),
        });

        setTitle("");
        setContent("");
        setImage(null);
    }

    async function handleSaveEdit(postId: number) {
        if (!editTitle || !editContent) return;

        const originalPost = posts.find((p) => p.id === postId);
        if (!originalPost) return;

        let base64Image: string | undefined;
        if (editImage) {
            base64Image = await toBase64(editImage);
        }

        const finalImage: string | undefined =
            base64Image ?? originalPost.image ?? undefined;

        await updatePost({
            id: postId,
            title: editTitle,
            content: editContent,
            ...(finalImage ? { image: finalImage } : {}),
        });

        setEditingPostId(null);
        setEditImage(null);
    }

    function toBase64(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });
    }

    const filteredPosts = posts.filter(
        (post) =>
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.content.toLowerCase().includes(search.toLowerCase()) ||
            post.authorName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div
            className={`flex flex-col items-center pt-4 min-h-screen ${dropDown === "lightmode" ? "bg-gray-100" : "bg-[#070b20]"
                }`}
        >
            <div className="w-full max-w-[600px] mx-auto px-4 pb-6">
                {/* AVISO GUEST */}
                {isGuest && (
                    <p
                        className={`text-center text-sm mb-4 ${dropDown === "lightmode" ? "text-gray-500" : "text-gray-400"
                            }`}
                    >
                        Você está no modo visitante. Faça login para interagir.
                    </p>
                )}

                {/* CRIAR POST */}
                {!isGuest && (
                    <div
                        className={`mb-4 rounded-xl border overflow-hidden ${dropDown === "lightmode"
                            ? "bg-white border-gray-300"
                            : "bg-gray-800 text-white border-gray-500"
                            }`}
                    >
                        <input
                            placeholder="Título"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className={`w-full px-4 py-3 outline-none ${dropDown === "lightmode"
                                ? "bg-white text-gray-800"
                                : "bg-gray-800 text-white"
                                }`}
                        />

                        <div className="px-4">
                            <div
                                className={`${dropDown === "lightmode"
                                    ? "border-t border-gray-300"
                                    : "border-t border-gray-700"
                                    }`}
                            />
                        </div>

                        <textarea
                            placeholder="E aí, o que está rolando?"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className={`w-full px-4 py-3 h-24 resize-none outline-none ${dropDown === "lightmode"
                                ? "bg-white text-gray-800"
                                : "bg-gray-800 text-white"
                                }`}
                        />

                        <div className="px-4">
                            <div
                                className={`${dropDown === "lightmode"
                                    ? "border-t border-gray-300"
                                    : "border-t border-gray-700"
                                    }`}
                            />
                        </div>

                        <div className="flex items-center justify-between px-4 py-3">
                            <label className="cursor-pointer flex items-center">
                                <Image className="w-8 h-8 text-sky-500 hover:scale-110 transition" />
                                <input
                                    type="file"
                                    onChange={(e) => setImage(e.target.files?.[0] || null)}
                                    className="hidden"
                                />
                            </label>

                            <button
                                onClick={handleCreatePost}
                                className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md shadow-sky-500/20"
                            >
                                Postar
                            </button>
                        </div>
                    </div>
                )}

                {/* FEED */}
                <div className="flex flex-col gap-4">
                    {filteredPosts.length === 0 && (
                        <p
                            className={`text-center ${dropDown === "lightmode" ? "text-gray-500" : "text-gray-400"
                                }`}
                        >
                            Nenhum post encontrado 😢
                        </p>
                    )}

                    {filteredPosts.map((post) => {
                        const likedByUser = likedPosts.includes(post.id);
                        const username = post.authorName?.toLowerCase().replace(/\s+/g, "");
                        const formattedDate = new Date(post.createdAt).toLocaleDateString(
                            "pt-BR"
                        );

                        return (
                            <div
                                key={post.id}
                                className={`p-4 rounded-xl border ${dropDown === "lightmode"
                                    ? "bg-white border-gray-300"
                                    : "bg-gray-800 border-gray-500"
                                    }`}
                            >
                                <div className="text-sm mb-2 flex gap-2 flex-wrap">
                                    <strong
                                        className={`${dropDown === "lightmode" ? "text-gray-800" : "text-white"
                                            }`}
                                    >
                                        {post.authorName}
                                    </strong>

                                    <span
                                        className={`${dropDown === "lightmode" ? "text-gray-500" : "text-gray-400"
                                            }`}
                                    >
                                        @{username}
                                    </span>

                                    <span
                                        className={`${dropDown === "lightmode" ? "text-gray-500" : "text-gray-400"
                                            }`}
                                    >
                                        • {formattedDate}
                                    </span>
                                </div>

                                {/* EDIÇÃO */}
                                {editingPostId === post.id ? (
                                    <div className="flex flex-col gap-2">
                                        <input
                                            value={editTitle}
                                            onChange={(e) => setEditTitle(e.target.value)}
                                            className={`w-full px-3 py-2 rounded border ${dropDown === "lightmode"
                                                ? "bg-gray-200 text-gray-800 border-gray-300"
                                                : "bg-gray-700 text-white border-gray-600"
                                                }`}
                                        />
                                        <textarea
                                            value={editContent}
                                            onChange={(e) => setEditContent(e.target.value)}
                                            className={`w-full px-3 py-2 resize-none rounded border h-20 ${dropDown === "lightmode"
                                                ? "bg-gray-200 text-gray-800 border-gray-300"
                                                : "bg-gray-700 text-white border-gray-600"
                                                }`}
                                        />


                                        <div className="flex gap-2 justify-between">
                                            <label className="cursor-pointer flex items-center">
                                                <Image className="w-8 h-8 text-sky-500 hover:scale-110 transition" />
                                                <input
                                                    type="file"
                                                    onChange={(e) => setEditImage(e.target.files?.[0] || null)}
                                                    className="hidden"
                                                />
                                            </label>
                                            <div className="flex gap-3">
                                                <button
                                                    onClick={() => handleSaveEdit(post.id)}
                                                    className="bg-sky-500 text-white px-4 py-2 rounded-lg"
                                                >
                                                    Salvar
                                                </button>
                                                <button
                                                    onClick={() => setEditingPostId(null)}
                                                    className="text-gray-500"
                                                >
                                                    Cancelar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <h3
                                            className={`text-lg font-semibold ${dropDown === "lightmode" ? "text-gray-800" : "text-white"
                                                }`}
                                        >
                                            {post.title}
                                        </h3>

                                        <p
                                            className={`mb-2 ${dropDown === "lightmode" ? "text-gray-700" : "text-gray-300"
                                                }`}
                                        >
                                            {post.content}
                                        </p>

                                        {post.image && (
                                            <img
                                                src={post.image}
                                                alt="Post"
                                                className="w-full rounded-lg mb-2"
                                            />
                                        )}
                                    </>
                                )}

                                {/* AÇÕES */}
                                <div className="flex items-center gap-3 mt-2">
                                    <button
                                        disabled={isGuest}
                                        onClick={async () => {
                                            if (isGuest) return;

                                            await likePost(post.id);

                                            setLikedPosts((prev) =>
                                                prev.includes(post.id)
                                                    ? prev.filter((id) => id !== post.id)
                                                    : [...prev, post.id]
                                            );
                                        }}
                                        className={`flex items-center gap-1 ${isGuest ? "opacity-50 cursor-not-allowed" : ""
                                            }`}
                                    >
                                        <Heart
                                            className={`w-5 h-5 transition ${likedByUser
                                                ? "text-red-500 fill-red-500"
                                                : "text-red-500 fill-transparent"
                                                }`}
                                        />
                                        <span className="text-sm">{post.likesCount}</span>
                                    </button>

                                    {!isGuest && currentUser && post.authorId === currentUser.id && (
                                        <>
                                            <button
                                                onClick={() => deletePost(post.id)}
                                                className={`${dropDown === "lightmode" ? "text-sky-500" : "text-white"}`}
                                                >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setEditingPostId(post.id);
                                                    setEditTitle(post.title);
                                                    setEditContent(post.content);
                                                    setEditImage(null);
                                                }}
                                                 className={`${dropDown === "lightmode" ? "text-sky-500" : "text-white"}`}
                                                >
                                                <Edit2 className="w-5 h-5" />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* PAGINAÇÃO */}
                
                {totalPages > 1 && (
                    <div className="flex justify-center mt-6 gap-2 flex-wrap">
                        <span  className="text-gray-700 font-bold"> {"< "} </span>
                        {Array.from({ length: totalPages }).map((_, index) => {
                            const page = index + 1;
                            return (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`px-3 py-1 rounded-full  text-sm transition ${currentPage === page
                                        ? "bg-sky-500 text-white border-sky-500 border"
                                        : dropDown === "lightmode"
                                            ? "bg-white text-gray-700 hover:bg-gray-200"
                                            : "bg-[#070b20] text-gray-700 hover:bg-gray-700"
                                        }`}
                                >
                                    {page}
                                </button>
                            );
                        })}
                        <span className="text-gray-700 font-bold"> {" >"} </span>
                    </div>
                )}
            </div>
        </div>
    );
}