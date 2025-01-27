import SubredditList from "@/components/subredditList";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <SubredditList />
    </main>
  );
}