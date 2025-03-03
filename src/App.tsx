import PageHeader from "./layouts/PageHeader"
import CategoryPills from './components/CategoryPills';
import { categories, videos } from "./data/home";
import { useState } from "react";
import { VideoGridItem } from "./components/VideoGridItem";
import { Sidebar } from "./layouts/Sidebar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
    <div className="max-h-screen flex flex-col bg-blue-400">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <Sidebar />
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 bg-white z-10 pb-4">
            <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
          </div>
          <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
            {videos.map(video => (
              <VideoGridItem key={video.id} {...video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App