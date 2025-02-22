import { useEffect, useRef, useState } from "react";
import JobCard from "../../components/card-job/JobCard";
import JobCardDetail from "../../components/card-job/JobCardDetail";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import {
  Content,
  // Content,
  getDataJobAPI,
  getDataJobDetailAPI,
} from "../../redux/reducers/jobReducer";
import { Pagination } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import Banner from "../HomePage/components/banner";
import { useRole } from "../../hooks/useRole";
// import CandiCardDetail from "../../components/card-candidates/CandiCardDetail";
// import CandiCard from "../../components/card-candidates/CandiCard";
// import {
//   getDataCandidateAPI,
//   Content as ContentCandidate,
//   getDataCandidateDetailAPI,
// } from "../../redux/reducers/candidateReducer";

export default function ListJobPage() {

  const { role } = useRole();
  console.log("🚀 ~ ListJobPage ~ role:", role)

  const navigate = useNavigate();
  const [selectedJobCard, setSelectedJobCard] = useState<number>(0);
  // const [selectedCandidateId, setSelectedCandidateId] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageSize = 7;
  // const pageSizeCandidate = 6;

  const { objJob, objJobDetails } = useSelector(
    (state: RootState) => state.jobReducer
  );

  // const { objCandidate, objCandiDetails } = useSelector(
  //   (state: RootState) => state.candidateReducer
  // );

  const dispatch: DispatchType = useDispatch();

  const getDataJobList = async (page: number, size: number) => {
    const actionAPI = getDataJobAPI(page, size);
    dispatch(actionAPI);
  };

  const getDataJobDetail = async (jobId: number) => {
    const actionAPI = getDataJobDetailAPI(jobId);
    dispatch(actionAPI);
  };

  // const getDataCandidateList = async (page: number, size: number) => {
  //   const actionAPI = getDataCandidateAPI(page, size);
  //   dispatch(actionAPI);
  // };

  // const getDataCandidateDetail = async (id: number) => {
  //   const actionAPI = getDataCandidateDetailAPI(id);
  //   dispatch(actionAPI);
  // };

  // Tìm kiếm candidate theo id
  // const objCandiDetails = objCandidate?.content.find(
  //   (candidate: ContentCandidate) => candidate.id === selectedCandidateId
  // );

  // job
  useEffect(() => {
    getDataJobList(currentPage - 1, pageSize);
    // getDataCandidateList(currentPage - 1, pageSizeCandidate);
  }, [currentPage]);

  useEffect(() => {
    if (objJob?.content) {
      const newItem = objJob.content[0];
      if (newItem) {
        setSelectedJobCard(newItem.jobId);
        getDataJobDetail(newItem.jobId);
        navigate(`/list-job/${newItem.jobId}`);
      }
    }
  }, [objJob]);

  // candidate
  // useEffect(() => {
  //   if (objCandidate?.content) {
  //     const newItem = objCandidate.content[0];
  //     if (newItem) {
  //       setSelectedCandidateId(newItem.id);
  //       // getDataCandidateDetail(newItem.id);
  //     }
  //   }
  // }, [objCandidate]);

  //job
  const handleSelectJobCard = (jobId: number) => {
    setSelectedJobCard(jobId);
    getDataJobDetail(jobId);
    navigate(`/list-job/${jobId}`);
  };

  // candidate
  // const handleCandiClick = (id: number) => {
  //   setSelectedCandidateId(id);
  //   getDataCandidateDetail(id);
  // };

  const renderJobs = (): JSX.Element[] => {
    // Use nullish coalescing to ensure `renderJobs` always returns an array
    return (objJob?.content ?? []).map((item: Content) => {
      const handleJobClick = () => {
        if (window.innerWidth <= 840) {
          navigate(`/card-detail-job/${item.jobId}`);
        } else {
          handleSelectJobCard(item.jobId);
        }
      };

      return (
        <div key={item.jobId}>
          <JobCard
            item={item}
            isSelected={
              window.innerWidth > 840 ? selectedJobCard === item.jobId : false
            }
            onSelect={handleJobClick}
            width="w-[191px]"
            widthAddress="w-auto max-w-[160px]"
          />
        </div>
      );
    });
  };

  // const renderCandiCards = (): JSX.Element[] => {
  //   return (objCandidate?.content ?? []).map((item: ContentCandidate) => {
  //     return (
  //       <div key={item.id}>
  //         <CandiCard
  //           item={item}
  //           isSelected={selectedCandidateId === item.id}
  //           onSelect={() => handleCandiClick(item.id)}
  //         />
  //       </div>
  //     );
  //   });
  // };

  const query = new URLSearchParams(useLocation().search);
  const section = query.get("section");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (section === "listJob" && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);

  //
  return (
    <div>
      <Banner />
      <div
        ref={ref}
        className="grid grid-cols-[453px_minmax(0,_1fr)] gap-x-7 pt-[66px] py-4 px-[72px] small-tablet:grid-cols-1 small-tablet:px-[20px]"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-start">
            <h1 className="text-2xl font-semibold">
              Có tất cả {objJob?.totalElements} công việc
            </h1>
            <div className="border-2 border-solid border-[#DC2E55] w-[292px] "></div>
          </div>
          <div className="flex flex-col gap-8">{renderJobs()}</div>
        </div>
        {/* <div className="flex flex-col gap-8">{renderCandiCards()}</div> */}
        <div className="small-tablet:hidden">
          {objJobDetails && <JobCardDetail item={objJobDetails} />}
          {/* {objCandiDetails && <CandiCardDetail item={objCandiDetails} />} */}
        </div>
      </div>
      <Pagination
        style={{
          padding: "30px 20px",
          borderRadius: "5px",
          fontSize: "20px",
        }}
        align="center"
        current={currentPage}
        pageSize={pageSize}
        // total={objCandidate?.totalElements}
        total={objJob?.totalElements}
        onChange={(page) => setCurrentPage(page)}
        itemRender={(page, type, originalElement) => {
          if (type === "page") {
            return (
              <span
                style={{
                  fontSize: "20px",
                  padding: "0 20px",
                  cursor: "pointer",
                }}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </span>
            );
          }
          return originalElement;
        }}
        prevIcon={
          <span
            style={{
              fontSize: "30px",
            }}
          >
            {"<"}
          </span>
        }
        nextIcon={
          <span
            style={{
              fontSize: "30px",
            }}
          >
            {">"}
          </span>
        }
      />
    </div>
  );
}
