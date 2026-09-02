import { useState } from "react";
import "./ResourceLibrary.css";
import { searchBooks } from "../../utils/OpenApi";
import Preloader from "../Preloader/Preloader";

function ResourceLibrary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  async function handleSearchSubmit(event) {
    event.preventDefault();

    setIsLoading(true);
    setError("");
    setVisibleCount(3);

    try {
      const data = await searchBooks(searchQuery);

      setResources(data.docs);
      setHasSearched(true);
    } catch (error) {
      console.error("Resource search failed:", error);

      setError(
        "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  }
  function handleShowMore() {
    setVisibleCount((currentCount) => currentCount + 3);
  }

  return (
    <section>
      <h2>Resource Library</h2>
      <p>Find books and resources to help you understand ADHD and YOU! </p>
      <form className="resource-library__search" onSubmit={handleSearchSubmit}>
        <input
          className="resource-library__input"
          type="text"
          placeholder="Search for ADHD resources"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />

        <button className="resource-library__button" type="submit">
          Search
        </button>
      </form>

      {isLoading && <Preloader />}

      {error && <p>{error}</p>}

      {hasSearched && !isLoading && !error && resources.length === 0 && (
        <p>No resources found. Try another search!</p>
      )}

      {hasSearched && !isLoading && !error && resources.length > 0 && (
        <p>Results found: {resources.length}</p>
      )}
      <div className="resource-library__grid">
        {resources.slice(0, visibleCount).map((resource) => (
          <article className="resource-card" key={resource.key}>
            <h3>{resource.title}</h3>

            <p>
              {resource.author_name
                ? resource.author_name.join(", ")
                : "Unknown author"}
            </p>
          </article>
        ))}
      </div>

      {visibleCount < resources.length && (
        <button type="button" onClick={handleShowMore}>
          Show More
        </button>
      )}
    </section>
  );
}

export default ResourceLibrary;
