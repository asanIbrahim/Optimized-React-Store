// import React, { useState } from "react";

// const Input = () => {
//   const [data, setData] = useState({
//     userId: "",
//     id: "",
//     title: "",
//     body: "",
//   });

//   const addFunction = () => {
//     if (!data.userId || !data.id || !data.title || !data.body) return;
//     const newData = {
//       userId: 1,
//       id: Date.now(),
//       title: data.title,
//       body: data.body,
//     };
//     console.log("saved data", newData);
//     setData({ userId: "", id: "", title: "", body: "" });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
//       <input
//         name="userId"
//         placeholder="add user id"
//         value={data.userId}
//         onChange={handleChange}
//       />
//       <input
//         name="id"
//         placeholder="add id"
//         value={data.id}
//         onChange={handleChange}
//       />
//       <input
//         name="title"
//         placeholder="add title"
//         value={data.title}
//         onChange={handleChange}
//       />
//       <input
//         name="body"
//         placeholder="please add body"
//         value={data.body}
//         onChange={handleChange}
//       />
//       <button onClick={addFunction}> Save</button>
//     </div>
//   );
// };

// export default Input;
