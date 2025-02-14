import { useSelector } from "react-redux";

function PdfViewer() {
  const pdfFile = useSelector((state) => state.user.pdfFile);
  const pdfName = useSelector((state) => state.user.pdfName);

  if (!pdfFile) {
    return <div>No PDF uploaded yet</div>;
  }

  return (
    <div className="w-full h-screen">
      <h2 className="text-xl mb-4">Resume: {pdfName}</h2>
      <iframe
        src={pdfFile}
        className="w-full h-[800px]"
        title="PDF Viewer"
      />
      <a 
        href={pdfFile}
        download={pdfName}
        className="bg-veronica-700 hover:bg-veronica-800 text-indie-600 px-4 py-2 rounded-lg mt-4 inline-block"
      >
        Download Resume/CV
      </a>
    </div>
  );
}

export default PdfViewer;