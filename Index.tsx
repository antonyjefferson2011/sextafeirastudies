import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageSquare, Share2, Image, Video, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

const mockPosts = [
  {
    id: 1,
    author: "Ana Silva",
    initials: "AS",
    time: "2h atrás",
    title: "Resumo de Física Quântica",
    content: "Acabei de terminar meu resumo sobre superposição quântica! O conceito é fascinante - uma partícula pode existir em múltiplos estados simultaneamente até ser observada. 🧪",
    likes: 24,
    comments: 8,
    type: "post",
  },
  {
    id: 2,
    author: "Carlos Mendes",
    initials: "CM",
    time: "5h atrás",
    title: "Aula de Cálculo - Derivadas",
    content: "Gravei uma aula explicando derivadas de forma simples. Se alguém tiver dúvidas, comenta aqui! 📹",
    likes: 56,
    comments: 15,
    type: "video",
  },
  {
    id: 3,
    author: "Julia Santos",
    initials: "JS",
    time: "1d atrás",
    title: "Dicas para ENEM 2026",
    content: "Montei uma lista com as 10 melhores estratégias para a prova de redação. Compartilhem com os amigos! ✍️",
    likes: 142,
    comments: 33,
    type: "post",
  },
];

const Index = () => {
  const [newPost, setNewPost] = useState("");

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-6 space-y-6">
      {/* Create post */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Card className="glass-card p-4 space-y-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-primary/30">
              <AvatarFallback className="gradient-primary text-primary-foreground font-display text-sm">EU</AvatarFallback>
            </Avatar>
            <Textarea
              placeholder="Compartilhe algo com seus amigos..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="min-h-[60px] resize-none bg-muted/50 border-none"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Image className="h-4 w-4 mr-1" /> Foto
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Video className="h-4 w-4 mr-1" /> Vídeo
              </Button>
            </div>
            <Button variant="hero" size="sm">
              <Send className="h-4 w-4 mr-1" /> Publicar
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Feed */}
      {mockPosts.map((post, i) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Card className="glass-card p-4 space-y-3 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-secondary text-secondary-foreground font-display text-xs">{post.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">{post.author}</p>
                <p className="text-xs text-muted-foreground">{post.time}</p>
              </div>
              {post.type === "video" && (
                <span className="ml-auto text-xs gradient-cool text-primary-foreground px-2 py-0.5 rounded-full font-medium">
                  📹 Vídeo
                </span>
              )}
            </div>
            <h3 className="font-display font-semibold">{post.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{post.content}</p>
            <div className="flex items-center gap-4 pt-2 border-t border-border/50">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-rose">
                <Heart className="h-4 w-4 mr-1" /> {post.likes}
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-sky">
                <MessageSquare className="h-4 w-4 mr-1" /> {post.comments}
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Share2 className="h-4 w-4 mr-1" /> Compartilhar
              </Button>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default Index;
