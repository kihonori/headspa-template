"use client";

const title =
  "\u30c9\u30e9\u30a4\u30d8\u30c3\u30c9\u30b9\u30d1\u5c02\u9580\u5e97 \u3086\u3046 - MEGURI -";

export default function Header() {
  return (
    <header className="py-6 text-center bg-background">
      <h1 className="text-xl font-bold text-gold">
        {title}
      </h1>
      <p className="mt-4 text-sm text-gray-300">
        施術の効果を長く実感していただくために、ホームケア商品もご用意しております。
      </p>
    </header>
  );
}
