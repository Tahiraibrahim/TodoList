import TodoList from "@/component/Todolist";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 py-8 px-4 text-gray-100">
      {/* Page Header */}
      <div className="max-w-lg mx-auto text-center mb-8">
        <h1 className="text-4xl font-extrabold mb-4 text-yellow-400">Todo App</h1>
        <p className="text-lg text-gray-300">
          Stay organized and track your daily tasks effortlessly.
        </p>
      </div>

      {/* Todo List Component */}
      <div className="max-w-lg mx-auto">
        <TodoList />
      </div>
    </main>
  );
}
