import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/app/(auth)/actions";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <form action={signOut}>
            <button
              type="submit"
              className="px-4 py-2 text-sm text-gray-300 hover:text-white border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Sign Out
            </button>
          </form>
        </div>

        <p className="text-gray-400 mb-8">
          Signed in as <span className="text-white font-medium">{user.email}</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
            <p className="text-sm text-gray-400">Current Streak</p>
            <p className="mt-2 text-4xl font-bold text-orange-500">0</p>
            <p className="mt-1 text-sm text-gray-500">days</p>
          </div>
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
            <p className="text-sm text-gray-400">Longest Streak</p>
            <p className="mt-2 text-4xl font-bold text-white">0</p>
            <p className="mt-1 text-sm text-gray-500">days</p>
          </div>
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
            <p className="text-sm text-gray-400">Habits Tracked</p>
            <p className="mt-2 text-4xl font-bold text-white">0</p>
            <p className="mt-1 text-sm text-gray-500">habits</p>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-gray-800 bg-gray-900 p-8 text-center">
          <p className="text-gray-400">Your habits will appear here once you start tracking.</p>
        </div>
      </div>
    </div>
  );
}
