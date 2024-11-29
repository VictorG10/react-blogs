import { IoMdAddCircle } from "react-icons/io";
import Navbar from "./components/Navbar";
import PeopleToFollow from "./components/PeopleToFollow";
import TopicList from "./components/TopicList";
import TrendList from "./components/TrendList";
import { BlogProvider } from "./shared/BlogContent";
import { useState } from "react";
import { Blog } from "./types";
import Modal from "./components/Modal";
import ArticleList from "./components/ArticleList";
import BlogForm from "./components/BlogForm";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const openModalForNewBlog = () => {
    setEditingBlog(null);
    setModalOpen(true);
  };

  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setModalOpen(true);
  };

  return (
    <div>
      <BlogProvider>
        <Navbar />

        <div className="flex justify-center">
          <section className="mx-auto p-6">
            <div>
              <button
                onClick={openModalForNewBlog}
                className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
              >
                Add New Blog
                <IoMdAddCircle className="ml-[.5rem]" />
              </button>

              <ArticleList onEdit={openModalForEdit} />
              {isModalOpen && (
                <Modal onClose={() => setModalOpen(false)}>
                  <BlogForm
                    existingBlog={editingBlog}
                    onClose={() => setModalOpen(false)}
                  />
                </Modal>
              )}
            </div>
          </section>

          <div className="w-[30%]">
            <PeopleToFollow />
            <TrendList />
            <TopicList />
          </div>
        </div>
      </BlogProvider>
    </div>
  );
};

export default App;
