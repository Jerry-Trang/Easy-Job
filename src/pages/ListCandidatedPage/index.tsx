// import CandiCard from "../../components/card-candidates/CandiCard";


export default function ListCandidatedPage() {
  return (
    <div className="px-[30px]">
      <div className="bg-white shadow-md py-4 px-11 rounded-[20px]">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-medium">Danh sách ứng viên</h1>
        </div>
        <div className="flex flex-col gap-10 mt-10">
          {/* <CandiCard showAmount={true} /> */}
        </div>
      </div>
    </div>
  );
}
