import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useAllJobsContext } from "../pages/AllJobs";

const PageBtnContainer = () => {
  const {
    data: { numberOfPages, currentPage },
  } = useAllJobsContext();

  const pages = Array.from({ length: numberOfPages }, (_, index) => {
    return index + 1;
  });

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        className={`btn page-btn ${activeClass && "active"}`}
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButton = [];
    pageButton.push(
      addPageButton({ pageNumber: 1, activeClass: currentPage === 1 })
    );
    if (currentPage > 3) {
      pageButton.push(
        <span className="page-btn dots" key={"dots-1"}>
          ...
        </span>
      );
    }
    if (currentPage !== 1 && currentPage !== 2) {
      pageButton.push(
        addPageButton({
          pageNumber: currentPage - 1,
          activeClass: false,
        })
      );
    }
    if (currentPage !== 1 && currentPage !== numberOfPages) {
      pageButton.push(
        addPageButton({
          pageNumber: currentPage,
          activeClass: true,
        })
      );
    }
    if (currentPage !== numberOfPages && currentPage !== numberOfPages - 1) {
      pageButton.push(
        addPageButton({
          pageNumber: currentPage + 1,
          activeClass: false,
        })
      );
    }
    if (currentPage < numberOfPages - 2) {
      pageButton.push(
        <span className="page-btn dots" key={"dots+1"}>
          ...
        </span>
      );
    }
    pageButton.push(
      addPageButton({
        pageNumber: numberOfPages,
        activeClass: currentPage === numberOfPages,
      })
    );
    return pageButton;
  };

  return (
    <Wrapper>
      <button
        className="btn prev-btn"
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = numberOfPages;
          handlePageChange(prevPage);
        }}
      >
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">{renderPageButtons()}</div>
      <button
        className="btn next-btn"
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > numberOfPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
      >
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;
