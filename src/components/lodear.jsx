// import { useState } from "react";
// import { ClipLoader } from "react-spinners";

// const lodear = () => {
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       alert("Please select a file first.");
//       return;
//     }

//     setLoading(true);

//     // Simulating file upload
//     setTimeout(() => {
//       setLoading(false);
//       alert("File uploaded successfully!");
//     }, 3000);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload} disabled={loading} style={{ marginLeft: "10px" }}>
//         Upload
//       </button>

//       {loading && (
//         <div style={{ marginTop: "20px" }}>
//           <ClipLoader color="#36d7b7" size={50} />
//           <p>Uploading...</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default lodear;
