import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/api";

export type PostsResponse = {
    posts: Post[];
    page: number;
    total: number;
    limit: number;
};

export type Post = {
    id: number;
    title: string;
    content: string;
    image: string | null;
    authorId: number;
    authorName: string;
    likesCount: number;
    createdAt: string;
    likedByUser: boolean;
};

export function usePosts(page: number, search: string) {
    const queryClient = useQueryClient();

    // ✅ Buscar posts com paginação
    const postsQuery = useQuery<PostsResponse>({
        queryKey: ["posts", page, search], // IMPORTANTE
        queryFn: async () => {
            const res = await api.get(`/posts?page=${page}&search=${search}`);
            return res.data;
        },
        placeholderData: (prev) => prev
    });

    // Criar post
    const createPostMutation = useMutation({
        mutationFn: async (data: { title: string; content: string; image?: string }) => {
            const res = await api.post("/posts", data);
            return res.data;
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
    });

    // Atualizar post
    const updatePostMutation = useMutation({
        mutationFn: async (data: { id: number; title: string; content: string; image?: string }) => {
            const res = await api.put(`/posts/${data.id}`, data);
            return res.data;
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
    });

    // Curtir
    const likePostMutation = useMutation({
        mutationFn: async (id: number) => api.post(`/posts/${id}/like`),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
    });

    // Deletar
    const deletePostMutation = useMutation({
        mutationFn: async (id: number) => api.delete(`/posts/${id}`),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
    });

    return {
        posts: postsQuery.data?.posts ?? [],
        total: postsQuery.data?.total ?? 0,
        limit: postsQuery.data?.limit ?? 10,
        page: postsQuery.data?.page ?? page,

        isLoading: postsQuery.isLoading,
        error: postsQuery.error,

        createPost: createPostMutation.mutateAsync,
        updatePost: updatePostMutation.mutateAsync,
        likePost: likePostMutation.mutateAsync,
        deletePost: deletePostMutation.mutateAsync,
    };
}