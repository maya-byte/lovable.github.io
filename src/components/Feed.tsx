import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, MoreHorizontal, Send } from "lucide-react";

const posts = [
  {
    id: 1,
    author: "Sarah M.",
    avatar: "🧑‍🦰",
    pet: "Max (Golden Retriever)",
    time: "2 hours ago",
    content: "Does anyone have recommendations for a good dog trainer in the downtown area? Max is pulling on the leash a lot lately and I'd love some help! 🐕",
    likes: 12,
    comments: 8,
    category: "Question",
  },
  {
    id: 2,
    author: "James K.",
    avatar: "👨",
    pet: "Luna (Tabby Cat)",
    time: "5 hours ago",
    content: "Just wanted to thank everyone who recommended Dr. Peterson at the Riverside Vet Clinic! Luna had her checkup today and she was so calm. The staff is amazing! ⭐",
    likes: 34,
    comments: 5,
    category: "Recommendation",
  },
  {
    id: 3,
    author: "Emily R.",
    avatar: "👩",
    pet: "Buddy & Bella",
    time: "Yesterday",
    content: "Looking for a pet-sitter for next weekend (Jan 17-19). I have two friendly dogs who are house-trained and love cuddles. Can compensate fairly! DM if interested 🏠",
    likes: 8,
    comments: 14,
    category: "Pet Sitting",
  },
];

const Feed = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) =>
      prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
    );
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Question":
        return "bg-amber-light text-amber";
      case "Recommendation":
        return "bg-sage-light text-sage";
      case "Pet Sitting":
        return "bg-terracotta-light text-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="feed" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
              Community <span className="text-gradient">Feed</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Share tips, ask questions, and connect with fellow pet parents
            </p>
          </div>

          {/* Post composer */}
          <Card className="mb-8">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-terracotta-light flex items-center justify-center text-lg flex-shrink-0">
                  🐾
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Share something with your community..."
                    className="w-full bg-muted rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <Button variant="hero" size="icon" className="flex-shrink-0">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Posts */}
          <div className="space-y-6">
            {posts.map((post, index) => (
              <Card
                key={post.id}
                variant="elevated"
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-2xl">
                        {post.avatar}
                      </div>
                      <div>
                        <div className="font-semibold">{post.author}</div>
                        <div className="text-sm text-muted-foreground">
                          {post.pet} • {post.time}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      <button className="p-1 hover:bg-muted rounded-lg transition-colors">
                        <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
                      </button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4">{post.content}</p>
                  <div className="flex items-center gap-6 pt-4 border-t border-border">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-2 text-sm transition-colors ${
                        likedPosts.includes(post.id)
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      <Heart
                        className={`w-5 h-5 ${likedPosts.includes(post.id) ? "fill-current" : ""}`}
                      />
                      {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                    </button>
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      {post.comments}
                    </button>
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors ml-auto">
                      <Share2 className="w-5 h-5" />
                      Share
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Posts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feed;
