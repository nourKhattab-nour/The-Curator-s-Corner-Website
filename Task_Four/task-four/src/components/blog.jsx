import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";


import techBlog from "../../src/assets/techBlog.jpg";
import techBlogTwo from "../../src/assets/techBlogTwo.jpg";
import travelBlogOne from "../../src/assets/Travel-Blogger.webp";
import travelBlogTwo from "../../src/assets/travelBlog.jpg";
import foodBlogThree from "../../src/assets/foodBlogThree.jpg";
import foodBlogTwo from "../../src/assets/foodBlogTwo.webp";
import foodBlogPhotography from "../../src/assets/Food-blog-photography.jpeg";
import pinchOfYum from "../../src/assets/Pinch-of-Yum-Blog.png";

const blogPosts = [
  {
    id: 1,
    title: "The Rise of Generative AI",
    description:
      "Exploring how generative AI is transforming creative industries, from art to code generation.",
    category: "tech",
    date: "October 28, 2023",
    image: techBlog,
  },
  {
    id: 2,
    title: "Advanced Machine Learning",
    description:
      "Deep dive into neural networks and their applications in modern software development.",
    category: "tech",
    date: "October 25, 2023",
    image: techBlogTwo,
  },
  {
    id: 3,
    title: "Sunrise in the Scottish Highlands",
    description:
      "A breathtaking journey through the misty mountains and serene lochs of Scotland.",
    category: "travel",
    date: "October 22, 2023",
    image: travelBlogOne,
  },
  {
    id: 4,
    title: "Exploring Kyoto's Hidden Temples",
    description:
      "Discovering the ancient temples and traditional culture of Japan's former capital.",
    category: "travel",
    date: "October 20, 2023",
    image: travelBlogTwo,
  },
  {
    id: 5,
    title: "The Art of the Perfect Brunch",
    description:
      "Tips and recipes for crafting a delicious and Instagram-worthy brunch spread.",
    category: "food",
    date: "October 18, 2023",
    image: foodBlogThree,
  },
  {
    id: 6,
    title: "Mastering Italian Pasta",
    description:
      "Learn the secrets of authentic Italian pasta making from traditional recipes.",
    category: "food",
    date: "October 15, 2023",
    image: foodBlogTwo,
  },
  {
    id: 7,
    title: "Gourmet Coffee at Home",
    description:
      "Transform your morning routine with professional barista techniques and premium beans.",
    category: "food",
    date: "October 12, 2023",
    image: foodBlogPhotography,
  },
  {
    id: 8,
    title: "Artisan Bread Baking",
    description:
      "A beginner's guide to baking perfect sourdough and artisan breads from scratch.",
    category: "food",
    date: "October 08, 2023",
    image: pinchOfYum,
  },
];


const blog = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  let posToshow = [];
  if (activeFilter === "all") {
    posToshow = blogPosts;
  } else {
    posToshow = blogPosts.filter((post) => post.category === activeFilter);
  }
  function changeFilter(newFilter) {
    setActiveFilter(newFilter);
  }

  return (
    <div>
      {/* <!-- Start Blog section --> */}
      <div className="blog">
        <div className="top_section">
          <button
            className={`Btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => changeFilter("all")}
          >
            All Posts
          </button>
          <button
            className={`Btn ${activeFilter === "tech" ? "active" : ""}`}
            onClick={() => changeFilter("tech")}
          >
            Tech
          </button>
          <button
            className={`Btn ${activeFilter === "travel" ? "active" : ""}`}
            onClick={() => changeFilter("travel")}
          >
            Travel
          </button>
          <button
            className={`Btn ${activeFilter === "food" ? "active" : ""}`}
            onClick={() => changeFilter("food")}
          >
            Food
          </button>
        </div>

        <div className="down_section">
          {posToshow.map((post) => (
            <div key={post.id} className="card">
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
                <small>{post.date}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="Buttons">
          <ArrowLeft className="ArrowLeft" />
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <ArrowRight className="ArrowRight" />
        </div>
      </div>
      {/* <!-- End Blog section --> */}
    </div>
  );
};

export default blog;
