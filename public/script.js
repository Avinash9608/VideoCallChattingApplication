// const socket = io();

// // Show chat container and hide auth section after login
// const showChat = () => {
//   document.getElementById("auth-container").classList.add("hidden");
//   document.getElementById("chat-container").classList.remove("hidden");
//   const email = document.getElementById("email").value;
//   document.getElementById("user-email").textContent = email;
// };

// // Show login/signup again and hide chat on logout
// const showAuth = () => {
//   document.getElementById("auth-container").classList.remove("hidden");
//   document.getElementById("chat-container").classList.add("hidden");
// };

// // Attach functions to the window object
// window.signup = async () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   const res = await fetch("/signup", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ username: email.split("@")[0], email, password }),
//   });

//   const data = await res.json();
//   alert(data.message);
//   if (res.ok) showChat();
// };

// window.login = async () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   const res = await fetch("/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email, password }),
//   });

//   const data = await res.json();
//   alert(data.message);
//   if (res.ok) {
//     showChat();
//     socket.emit("join", email);
//   }
// };

// window.logout = () => {
//   alert("You have been logged out!");
//   showAuth();
// };

// window.sendMessage = () => {
//   const messageInput = document.getElementById("message");
//   const message = messageInput.value.trim();

//   if (message) {
//     socket.emit("message", { message });
//     addMessageToChat({ email: "You", message }, true);
//     messageInput.value = "";
//   }
// };
// const logout = () => {
//   alert("You have been logged out!");
//   showAuth();
// };

// const sendMessage = () => {
//   const messageInput = document.getElementById("message");
//   const message = messageInput.value.trim();

//   if (message) {
//     socket.emit("message", { message });
//     addMessageToChat({ email: "You", message }, true);
//     messageInput.value = "";
//   }
// };

// socket.on("message", (data) => {
//   addMessageToChat(data, false);
// });

// function addMessageToChat(data, isSelf) {
//   const chatBox = document.getElementById("chat-box");
//   const messageElement = document.createElement("div");

//   messageElement.classList.add("message");
//   if (isSelf) messageElement.classList.add("self");

//   messageElement.innerHTML = `<strong>${data.email}:</strong> ${data.message}`;
//   chatBox.appendChild(messageElement);
//   chatBox.scrollTop = chatBox.scrollHeight;
// }
// function updateProfilePic(event) {
//   const file = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function (e) {
//       document.getElementById("profile-img").src = e.target.result;
//     };
//     reader.readAsDataURL(file);
//   }
// }
// function toggleOptions() {
//   document.querySelector(".more-options").classList.toggle("active");
// }

// // Close menu when clicking outside
// document.addEventListener("click", function (event) {
//   const moreOptions = document.querySelector(".more-options");
//   if (!moreOptions.contains(event.target)) {
//     moreOptions.classList.remove("active");
//   }
// });
// // window.sendFile = () => {
// //   const fileInput = document.getElementById("fileInput");
// //   const file = fileInput.files[0];

// //   if (file) {
// //     const reader = new FileReader();
// //     reader.onload = function (e) {
// //       socket.emit("file", { fileName: file.name, fileData: e.target.result });
// //       addMessageToChat(
// //         { email: "You", message: `Sent a file: ${file.name}` },
// //         true
// //       );
// //     };
// //     reader.readAsDataURL(file);
// //   }
// // };
// // window.sendFile = async () => {
// //   const fileInput = document.getElementById("fileInput");
// //   const file = fileInput.files[0];

// //   if (!file) return alert("Please select a file.");

// //   const formData = new FormData();
// //   formData.append("file", file);

// //   console.log("Uploading file:", file.name); // Debugging log

// //   try {
// //     const res = await fetch("/upload", { method: "POST", body: formData });
// //     const data = await res.json();

// //     console.log("Upload response:", data); // Debugging log

// //     if (res.ok) {
// //       socket.emit("file", {
// //         email: "You",
// //         fileName: data.fileName,
// //         fileUrl: data.fileUrl,
// //       });

// //       addFileToChat(
// //         {
// //           email: "You",
// //           fileName: data.fileName,
// //           fileUrl: data.fileUrl,
// //         },
// //         true
// //       );
// //     } else {
// //       alert(data.error);
// //     }
// //   } catch (error) {
// //     console.error("Error uploading file:", error);
// //   }
// // };

// // socket.on("file", (data) => {
// //   const chatBox = document.getElementById("chat-box");
// //   const fileLink = document.createElement("a");
// //   fileLink.href = data.fileData;
// //   fileLink.download = data.fileName;
// //   fileLink.textContent = `Download ${data.fileName}`;
// //   fileLink.classList.add("file-message");
// //   chatBox.appendChild(fileLink);
// // });

// window.sendFile = async () => {
//   const fileInput = document.getElementById("fileInput");
//   const file = fileInput.files[0];

//   if (!file) return alert("Please select a file.");

//   const formData = new FormData();
//   formData.append("file", file);

//   console.log("Uploading file:", file.name); // Debugging log

//   try {
//     const res = await fetch("/upload", { method: "POST", body: formData });
//     const data = await res.json();

//     console.log("Upload response:", data); // Debugging log

//     if (res.ok) {
//       socket.emit("file", {
//         email: "You",
//         fileName: data.fileName,
//         fileUrl: data.fileUrl,
//       });

//       addFileToChat(
//         {
//           email: "You",
//           fileName: data.fileName,
//           fileUrl: data.fileUrl,
//         },
//         true
//       );
//     } else {
//       alert(data.error);
//     }
//   } catch (error) {
//     console.error("Error uploading file:", error);
//   }
// };

// function addFileToChat(data, isOwnMessage = false) {
//   const chatBox = document.getElementById("chat-box");
//   const messageDiv = document.createElement("div");
//   messageDiv.classList.add("message");

//   if (isOwnMessage) messageDiv.classList.add("own-message");

//   messageDiv.innerHTML = `
//         <p><strong>${data.email}</strong></p>
//         <p><a href="${data.fileUrl}" target="_blank">${data.fileName}</a></p>
//       `;

//   chatBox.appendChild(messageDiv);
//   chatBox.scrollTop = chatBox.scrollHeight;
// }

// socket.on("file", (data) => {
//   console.log("Received file:", data); // Debugging log
//   addFileToChat(data);
// });
// function addFileToChat(data, isOwnMessage = false) {
//   const chatBox = document.getElementById("chat-box");
//   const messageDiv = document.createElement("div");
//   messageDiv.classList.add("message");

//   if (isOwnMessage) messageDiv.classList.add("own-message");

//   messageDiv.innerHTML = `
//       <p><strong>${data.email}</strong></p>
//       <p><a href="${data.fileUrl}" target="_blank">${data.fileName}</a></p>
//     `;

//   chatBox.appendChild(messageDiv);
//   chatBox.scrollTop = chatBox.scrollHeight;
// }
// // socket.on("file", (data) => {
// //   console.log("Received file:", data); // Debugging log
// //   addFileToChat(data);
// // });

// const socket = io();

// // Utility functions to show/hide UI sections
// const showChat = () => {
//   document.getElementById("auth-container").classList.add("hidden");
//   document.getElementById("chat-container").classList.remove("hidden");
//   const email = document.getElementById("email").value;
//   document.getElementById("user-email").textContent = email;
// };

// const showAuth = () => {
//   document.getElementById("auth-container").classList.remove("hidden");
//   document.getElementById("chat-container").classList.add("hidden");
// };

// // Signup function
// window.signup = async () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   try {
//     const res = await fetch("/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username: email.split("@")[0], email, password }),
//     });

//     const data = await res.json();
//     alert(data.message);

//     if (res.ok) showChat();
//   } catch (error) {
//     console.error("Signup Error:", error);
//     alert("Signup failed!");
//   }
// };

// // Login function
// window.login = async () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   try {
//     const res = await fetch("/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();
//     alert(data.message);

//     if (res.ok) {
//       showChat();
//       socket.emit("join", email);
//     }
//   } catch (error) {
//     console.error("Login Error:", error);
//     alert("Login failed!");
//   }
// };

// // Logout function
// window.logout = () => {
//   alert("You have been logged out!");
//   showAuth();
// };

// // Send chat message
// // window.sendMessage = () => {
// //   const messageInput = document.getElementById("message");
// //   const message = messageInput.value.trim();

// //   if (message) {
// //     socket.emit("message", { message });
// //     addMessageToChat({ email: "You", message }, true);
// //     messageInput.value = "";
// //   }

// // };
// window.sendMessage = () => {
//   const messageInput = document.getElementById("message");
//   const message = messageInput.value.trim();

//   if (message) {
//     socket.emit("message", { email: "You", message });

//     // If the message mentions @chatbot, ask the server to get a response
//     if (message.includes("@chatbot")) {
//       socket.emit("chatbot_request", message);
//     }

//     addMessageToChat({ email: "You", message }, true);
//     messageInput.value = "";
//   }
// };

// // Listen for chatbot responses
// socket.on("chatbot_response", (data) => {
//   addMessageToChat({ email: "Chatbot", message: data.response }, false);
// });

// // Listen for incoming messages
// socket.on("message", (data) => {
//   addMessageToChat(data, false);
// });

// // Add message to chat UI
// function addMessageToChat(data, isSelf) {
//   const chatBox = document.getElementById("chat-box");
//   const messageElement = document.createElement("div");

//   messageElement.classList.add("message");
//   if (isSelf) messageElement.classList.add("self");

//   messageElement.innerHTML = `<strong>${data.email}:</strong> ${data.message}`;
//   chatBox.appendChild(messageElement);
//   chatBox.scrollTop = chatBox.scrollHeight;
// }

// // Update profile picture preview
// function updateProfilePic(event) {
//   const file = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       document.getElementById("profile-img").src = e.target.result;
//     };
//     reader.readAsDataURL(file);
//   }
// }

// // Toggle options menu
// function toggleOptions() {
//   document.querySelector(".more-options").classList.toggle("active");
// }

// // Close menu when clicking outside
// document.addEventListener("click", (event) => {
//   const moreOptions = document.querySelector(".more-options");
//   if (!moreOptions.contains(event.target)) {
//     moreOptions.classList.remove("active");
//   }
// });

// // Send file function
// window.sendFile = async () => {
//   const fileInput = document.getElementById("fileInput");
//   const file = fileInput.files[0];

//   if (!file) return alert("Please select a file.");

//   const formData = new FormData();
//   formData.append("file", file);

//   try {
//     const res = await fetch("/upload", { method: "POST", body: formData });
//     const data = await res.json();

//     if (res.ok) {
//       // Emit the file event ONCE
//       const fileData = {
//         email: "You",
//         fileName: data.fileName,
//         fileUrl: data.fileUrl,
//       };
//       socket.emit("file", fileData);

//       // Ensure it's added only once
//       addFileToChat(fileData, true);
//     } else {
//       alert(data.error);
//     }
//   } catch (error) {
//     console.error("Error uploading file:", error);
//   }
// };

// // Add file to chat UI
// function addFileToChat(data, isOwnMessage = false) {
//   const chatBox = document.getElementById("chat-box");
//   const messageDiv = document.createElement("div");
//   messageDiv.classList.add("message");

//   if (isOwnMessage) messageDiv.classList.add("own-message");

//   messageDiv.innerHTML = `
//       <p><strong>${data.email}</strong></p>
//       <p><a href="${data.fileUrl}" target="_blank">${data.fileName}</a></p>
//     `;

//   chatBox.appendChild(messageDiv);
//   chatBox.scrollTop = chatBox.scrollHeight;
// }

// // Listen for incoming file messages

// socket.on("file", (data) => {
//   // Prevent duplicate file messages
//   const existingMessages = Array.from(document.querySelectorAll(".message"));
//   const alreadyExists = existingMessages.some((msg) =>
//     msg.innerHTML.includes(data.fileUrl)
//   );

//   if (!alreadyExists) {
//     addFileToChat(data);
//   }
// });

//INCOMING CALLING FEATURE ADDING
// const socket = io();
// let localStream = null; // Store the local media stream globally
// let currentCall = null; // Store the current call globally

// // Utility functions to show/hide UI sections
// const showChat = () => {
//   document.getElementById("auth-container").classList.add("hidden");
//   document.getElementById("chat-container").classList.remove("hidden");
//   const email = document.getElementById("email").value;
//   document.getElementById("user-email").textContent = email;
// };

// const showAuth = () => {
//   document.getElementById("auth-container").classList.remove("hidden");
//   document.getElementById("chat-container").classList.add("hidden");
// };

// // Signup function
// window.signup = async () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   try {
//     const res = await fetch("/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username: email.split("@")[0], email, password }),
//     });

//     const data = await res.json();
//     alert(data.message);

//     if (res.ok) showChat();
//   } catch (error) {
//     console.error("Signup Error:", error);
//     alert("Signup failed!");
//   }
// };

// // Login function
// window.login = async () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   try {
//     const res = await fetch("/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();
//     alert(data.message);

//     if (res.ok) {
//       showChat();
//       socket.emit("join", email);
//       socket.emit("register-user", { email }); // Register user with their email
//     }
//   } catch (error) {
//     console.error("Login Error:", error);
//     alert("Login failed!");
//   }
// };

// // Logout function
// window.logout = () => {
//   alert("You have been logged out!");
//   showAuth();
// };

// // Send message function
// window.sendMessage = () => {
//   const messageInput = document.getElementById("message");
//   const message = messageInput.value.trim();

//   if (message) {
//     socket.emit("message", { email: "You", message });

//     // If the message mentions @chatbot, ask the server to get a response
//     if (message.includes("@chatbot")) {
//       socket.emit("chatbot_request", message);
//     }

//     addMessageToChat({ email: "You", message }, true);
//     messageInput.value = "";
//   }
// };

// // Listen for chatbot responses
// socket.on("chatbot_response", (data) => {
//   addMessageToChat({ email: "Chatbot", message: data.response }, false);
// });

// // Listen for incoming messages
// socket.on("message", (data) => {
//   addMessageToChat(data, false);
// });

// // Add message to chat UI
// function addMessageToChat(data, isSelf) {
//   const chatBox = document.getElementById("chat-box");
//   const messageElement = document.createElement("div");

//   messageElement.classList.add("message");
//   if (isSelf) messageElement.classList.add("self");

//   messageElement.innerHTML = `<strong>${data.email}:</strong> ${data.message}`;
//   chatBox.appendChild(messageElement);
//   chatBox.scrollTop = chatBox.scrollHeight;
// }

// // Update profile picture preview
// function updateProfilePic(event) {
//   const file = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       document.getElementById("profile-img").src = e.target.result;
//     };
//     reader.readAsDataURL(file);
//   }
// }

// // Toggle options menu
// function toggleOptions() {
//   document.querySelector(".more-options").classList.toggle("active");
// }

// // Close menu when clicking outside
// document.addEventListener("click", (event) => {
//   const moreOptions = document.querySelector(".more-options");
//   if (!moreOptions.contains(event.target)) {
//     moreOptions.classList.remove("active");
//   }
// });

// // Send file function
// window.sendFile = async () => {
//   const fileInput = document.getElementById("fileInput");
//   const file = fileInput.files[0];

//   if (!file) return alert("Please select a file.");

//   const formData = new FormData();
//   formData.append("file", file);

//   try {
//     const res = await fetch("/upload", { method: "POST", body: formData });
//     const data = await res.json();

//     if (res.ok) {
//       // Emit the file event ONCE
//       const fileData = {
//         email: "You",
//         fileName: data.fileName,
//         fileUrl: data.fileUrl,
//       };
//       socket.emit("file", fileData);

//       // Ensure it's added only once
//       addFileToChat(fileData, true);
//     } else {
//       alert(data.error);
//     }
//   } catch (error) {
//     console.error("Error uploading file:", error);
//   }
// };

// // Add file to chat UI
// function addFileToChat(data, isOwnMessage = false) {
//   const chatBox = document.getElementById("chat-box");
//   const messageDiv = document.createElement("div");
//   messageDiv.classList.add("message");

//   if (isOwnMessage) messageDiv.classList.add("own-message");

//   messageDiv.innerHTML = `
//       <p><strong>${data.email}</strong></p>
//       <p><a href="${data.fileUrl}" target="_blank">${data.fileName}</a></p>
//     `;

//   chatBox.appendChild(messageDiv);
//   chatBox.scrollTop = chatBox.scrollHeight;
// }

// // Listen for incoming file messages
// socket.on("file", (data) => {
//   // Prevent duplicate file messages
//   const existingMessages = Array.from(document.querySelectorAll(".message"));
//   const alreadyExists = existingMessages.some((msg) =>
//     msg.innerHTML.includes(data.fileUrl)
//   );

//   if (!alreadyExists) {
//     addFileToChat(data);
//   }
// });

// const peer = new Peer(); // Use PeerJS for WebRTC calls

// // Render online users list
// socket.on("online-users", (users) => {
//   const usersList = document.getElementById("users-list");
//   usersList.innerHTML = ""; // Clear previous list

//   users.forEach((user) => {
//     if (user !== document.getElementById("user-email").textContent) {
//       const userItem = document.createElement("li");
//       userItem.textContent = user;

//       // Add a call icon/button for each user
//       const callIcon = document.createElement("button");
//       callIcon.textContent = "📞"; // Call icon
//       callIcon.onclick = () => startCall(user); // Pass the recipient email

//       userItem.appendChild(callIcon);
//       usersList.appendChild(userItem);
//     }
//   });
// });

// // Start call function
// window.startCall = (recipientEmail) => {
//   if (!recipientEmail) {
//     alert("No recipient selected.");
//     return;
//   }

//   navigator.mediaDevices
//     .getUserMedia({ video: true, audio: true })
//     .then((stream) => {
//       localStream = stream; // Store the stream globally
//       const call = peer.call(recipientEmail, stream);
//       currentCall = call; // Store the current call

//       call.on("stream", (remoteStream) => {
//         document.getElementById("remote-video").srcObject = remoteStream;
//       });

//       call.on("close", () => {
//         // Stop local media tracks when the call ends
//         if (localStream) {
//           localStream.getTracks().forEach((track) => track.stop());
//         }
//         currentCall = null;
//       });
//     })
//     .catch((error) => {
//       console.error("Error accessing media devices:", error);
//     });

//   socket.emit("call-user", {
//     recipientEmail,
//     callerEmail: document.getElementById("user-email").textContent,
//   });
// };

// // Handle Incoming Call
// socket.on("incoming-call", (data) => {
//   document.getElementById("incoming-call").classList.remove("hidden");
//   document.getElementById(
//     "caller-name"
//   ).innerText = `${data.callerEmail} is calling`;
// });

// // Accept Call
// window.acceptCall = () => {
//   const callerEmail = document
//     .getElementById("caller-name")
//     .textContent.split(" is calling")[0];

//   navigator.mediaDevices
//     .getUserMedia({
//       video: { deviceId: localStorage.getItem("preferredCamera") || undefined },
//       audio: {
//         deviceId: localStorage.getItem("preferredMicrophone") || undefined,
//       },
//     })
//     .then((stream) => {
//       localStream = stream;
//       const call = peer.call(callerEmail, stream);
//       currentCall = call;

//       call.on("stream", (remoteStream) => {
//         document.getElementById("remote-video").srcObject = remoteStream;
//       });

//       call.on("close", () => {
//         if (localStream) {
//           localStream.getTracks().forEach((track) => track.stop());
//         }
//         currentCall = null;
//       });
//     })
//     .catch((error) => {
//       console.error("Error accessing media devices:", error);
//     });

//   socket.emit("accept-call", { callerEmail });
//   document.getElementById("incoming-call").classList.add("hidden");
// };

// // Reject Call
// window.rejectCall = () => {
//   const callerEmail = document
//     .getElementById("caller-name")
//     .textContent.split(" is calling")[0];

//   // Stop local media tracks
//   if (localStream) {
//     localStream.getTracks().forEach((track) => track.stop());
//   }

//   socket.emit("reject-call", { callerEmail });
//   document.getElementById("incoming-call").classList.add("hidden");
// };

// // Handle call accepted
// socket.on("call-accepted", (data) => {
//   alert(`Call accepted by ${data.recipientEmail}`);
// });

// // Handle call rejected
// socket.on("call-rejected", (data) => {
//   alert(`Call rejected by ${data.recipientEmail}`);
// });

// // Handle user not available
// socket.on("user-not-available", (data) => {
//   alert(`User ${data.recipientEmail} is not available`);
// });

//  new code
// const socket = io("http://localhost:5500");
// socket.on("connect", () => {
//   console.log("Connected to server");
// });
// socket.on("connect_error", (err) => {
//   console.error("Connection error:", err);
// });

// let localStream = null; // Store the local media stream globally
// let currentCall = null; // Store the current call globally

// // Utility functions to show/hide UI sections
// const showChat = () => {
//   document.getElementById("auth-container").classList.add("hidden");
//   document.getElementById("chat-container").classList.remove("hidden");
//   const email = document.getElementById("email").value;
//   document.getElementById("user-email").textContent = email;
// };

// const showAuth = () => {
//   document.getElementById("auth-container").classList.remove("hidden");
//   document.getElementById("chat-container").classList.add("hidden");
// };

// // Signup function
// window.signup = async () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   try {
//     const res = await fetch("/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username: email.split("@")[0], email, password }),
//     });

//     const data = await res.json();
//     alert(data.message);

//     if (res.ok) showChat();
//   } catch (error) {
//     console.error("Signup Error:", error);
//     alert("Signup failed!");
//   }
// };

// // Login function
// window.login = async () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   try {
//     const res = await fetch("/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();
//     alert(data.message);

//     if (res.ok) {
//       showChat();
//       socket.emit("join", email);
//       socket.emit("register-user", { email }); // Register user with their email
//     }
//   } catch (error) {
//     console.error("Login Error:", error);
//     alert("Login failed!");
//   }
// };

// // Logout function
// window.logout = () => {
//   alert("You have been logged out!");
//   showAuth();
// };

// // Send message function
// window.sendMessage = () => {
//   const messageInput = document.getElementById("message");
//   const message = messageInput.value.trim();

//   if (message) {
//     socket.emit("message", { email: "You", message });

//     // If the message mentions @chatbot, ask the server to get a response
//     if (message.includes("@chatbot")) {
//       socket.emit("chatbot_request", message);
//     }

//     addMessageToChat({ email: "You", message }, true);
//     messageInput.value = "";
//   }
// };

// // Listen for chatbot responses
// socket.on("chatbot_response", (data) => {
//   addMessageToChat({ email: "Chatbot", message: data.response }, false);
// });

// // Listen for incoming messages
// socket.on("message", (data) => {
//   addMessageToChat(data, false);
// });

// // Add message to chat UI
// function addMessageToChat(data, isSelf) {
//   const chatBox = document.getElementById("chat-box");
//   const messageElement = document.createElement("div");

//   messageElement.classList.add("message");
//   if (isSelf) messageElement.classList.add("self");

//   messageElement.innerHTML = `<strong>${data.email}:</strong> ${data.message}`;
//   chatBox.appendChild(messageElement);
//   chatBox.scrollTop = chatBox.scrollHeight;
// }

// // Update profile picture preview
// function updateProfilePic(event) {
//   const file = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       document.getElementById("profile-img").src = e.target.result;
//     };
//     reader.readAsDataURL(file);
//   }
// }

// // Toggle options menu
// function toggleOptions() {
//   document.querySelector(".more-options").classList.toggle("active");
// }

// // Close menu when clicking outside
// document.addEventListener("click", (event) => {
//   const moreOptions = document.querySelector(".more-options");
//   if (!moreOptions.contains(event.target)) {
//     moreOptions.classList.remove("active");
//   }
// });

// // Send file function
// window.sendFile = async () => {
//   const fileInput = document.getElementById("fileInput");
//   const file = fileInput.files[0];

//   if (!file) return alert("Please select a file.");

//   const formData = new FormData();
//   formData.append("file", file);

//   try {
//     const res = await fetch("/upload", { method: "POST", body: formData });
//     const data = await res.json();

//     if (res.ok) {
//       // Emit the file event ONCE
//       const fileData = {
//         email: "You",
//         fileName: data.fileName,
//         fileUrl: data.fileUrl,
//       };
//       socket.emit("file", fileData);

//       // Ensure it's added only once
//       addFileToChat(fileData, true);
//     } else {
//       alert(data.error);
//     }
//   } catch (error) {
//     console.error("Error uploading file:", error);
//   }
// };

// // Add file to chat UI
// function addFileToChat(data, isOwnMessage = false) {
//   const chatBox = document.getElementById("chat-box");
//   const messageDiv = document.createElement("div");
//   messageDiv.classList.add("message");

//   if (isOwnMessage) messageDiv.classList.add("own-message");

//   messageDiv.innerHTML = `
//       <p><strong>${data.email}</strong></p>
//       <p><a href="${data.fileUrl}" target="_blank">${data.fileName}</a></p>
//     `;

//   chatBox.appendChild(messageDiv);
//   chatBox.scrollTop = chatBox.scrollHeight;
// }

// // Listen for incoming file messages
// socket.on("file", (data) => {
//   // Prevent duplicate file messages
//   const existingMessages = Array.from(document.querySelectorAll(".message"));
//   const alreadyExists = existingMessages.some((msg) =>
//     msg.innerHTML.includes(data.fileUrl)
//   );

//   if (!alreadyExists) {
//     addFileToChat(data);
//   }
// });

// const peer = new Peer(); // Use PeerJS for WebRTC calls
// peer.on("open", (id) => {
//   console.log("My Peer ID:", id);
//   socket.emit("register-peer", {
//     email: document.getElementById("user-email").textContent,
//     peerId: id,
//   });
// });

// // Render online users list
// socket.on("online-users", (users) => {
//   const usersList = document.getElementById("users-list");
//   usersList.innerHTML = ""; // Clear previous list

//   users.forEach((user) => {
//     if (user !== document.getElementById("user-email").textContent) {
//       const userItem = document.createElement("li");
//       userItem.textContent = user;

//       // Add a call icon/button for each user
//       const callIcon = document.createElement("button");
//       callIcon.textContent = "📞"; // Call icon
//       callIcon.onclick = () => startCall(user); // Pass the recipient email

//       userItem.appendChild(callIcon);
//       usersList.appendChild(userItem);
//     }
//   });
// });

// // Start call function
// window.startCall = (recipientEmail) => {
//   if (!recipientEmail) {
//     alert("No recipient selected.");
//     return;
//   }

//   navigator.mediaDevices
//     .getUserMedia({ video: true, audio: true })
//     .then((stream) => {
//       localStream = stream;
//       document.getElementById("local-video").srcObject = stream; // Show local video
//       console.log("StartCall Local-video streaming ");
//       const call = peer.call(recipientEmail, stream);
//       currentCall = call;

//       call.on("stream", (remoteStream) => {
//         console.log("StartCall remote-video streaming ");
//         document.getElementById("remote-video").srcObject = remoteStream; // Show remote video
//       });

//       call.on("close", () => {
//         if (localStream) {
//           localStream.getTracks().forEach((track) => track.stop());
//         }
//         currentCall = null;
//       });
//     })
//     .catch((error) => {
//       console.error("Error accessing media devices:", error);
//     });

//   socket.emit("call-user", {
//     recipientEmail,
//     callerEmail: document.getElementById("user-email").textContent,
//   });
// };

// // Handle Incoming Call
// socket.on("incoming-call", (data) => {
//   document.getElementById("incoming-call").classList.remove("hidden");
//   document.getElementById(
//     "caller-name"
//   ).innerText = `${data.callerEmail} is calling`;
// });

// // Accept Call
// // window.acceptCall = () => {
// //   const callerEmail = document
// //     .getElementById("caller-name")
// //     .textContent.split(" is calling")[0];

// //   navigator.mediaDevices
// //     .getUserMedia({ video: true, audio: true })
// //     .then((stream) => {
// //       localStream = stream;
// //       console.log("AcceptCall local-video streaming ");
// //       document.getElementById("local-video").srcObject = stream; // Show local video

// //       // Ensure currentCall is not null before answering
// //       if (currentCall) {
// //         currentCall.answer(stream); // Answer the call with the local stream

// //         currentCall.on("stream", (remoteStream) => {
// //           console.log("AcceptCall Remote-video streaming ");
// //           document.getElementById("remote-video").srcObject = remoteStream; // Show remote video
// //         });

// //         currentCall.on("close", () => {
// //           if (localStream) {
// //             localStream.getTracks().forEach((track) => track.stop());
// //           }
// //           currentCall = null;
// //         });
// //       } else {
// //         console.error("No current call to answer.");
// //       }
// //     })
// //     .catch((error) => {
// //       console.error("Error accessing media devices:", error);
// //     });

// //   socket.emit("accept-call", { callerEmail });
// //   document.getElementById("incoming-call").classList.add("hidden");
// // };
// window.acceptCall = () => {
//   const callerEmail = document
//     .getElementById("caller-name")
//     .textContent.split(" is calling")[0];

//   navigator.mediaDevices
//     .getUserMedia({ video: true, audio: true })
//     .then((stream) => {
//       localStream = stream;
//       console.log("Local video stream started");
//       document.getElementById("local-video").srcObject = stream; // Show local video

//       if (currentCall) {
//         currentCall.answer(stream); // Answer the call with the local stream

//         currentCall.on("stream", (remoteStream) => {
//           console.log("Remote video stream received");
//           document.getElementById("remote-video").srcObject = remoteStream; // Show remote video
//         });

//         currentCall.on("close", () => {
//           console.log("Call ended");
//           endCall();
//         });
//       } else {
//         console.error("No current call to answer.");
//       }
//     })
//     .catch((error) => {
//       console.error("Error accessing media devices:", error);
//     });

//   socket.emit("accept-call", { callerEmail });
//   document.getElementById("incoming-call").classList.add("hidden");
// };
// // Handle peer ID response
// socket.on("peer-id-response", (data) => {
//   if (!data.peerId) {
//     alert("User  is not available for a call.");
//     return;
//   }

//   navigator.mediaDevices
//     .getUserMedia({ video: true, audio: true })
//     .then((stream) => {
//       localStream = stream;
//       document.getElementById("local-video").srcObject = stream;

//       const call = peer.call(data.peerId, stream); // Call using peerId
//       currentCall = call;

//       call.on("stream", (remoteStream) => {
//         console.log("Receiving remote stream...");
//         document.getElementById("remote-video").srcObject = remoteStream; // Show remote video
//       });

//       call.on("error", (err) => {
//         console.error("Call error:", err);
//       });

//       call.on("close", () => {
//         console.log("Call ended.");
//       });
//     })
//     .catch((error) => {
//       console.error("Error accessing media devices:", error);
//     });
// });

// // Reject Call
// window.rejectCall = () => {
//   const callerEmail = document
//     .getElementById("caller-name")
//     .textContent.split(" is calling")[0];

//   // Stop local media tracks
//   if (localStream) {
//     localStream.getTracks().forEach((track) => track.stop());
//   }

//   socket.emit("reject-call", { callerEmail });
//   document.getElementById("incoming-call").classList.add("hidden");
// };

// // Handle call accepted
// socket.on("call-accepted", (data) => {
//   alert(`Call accepted by ${data.recipientEmail}`);
// });

// // Handle call rejected
// socket.on("call-rejected", (data) => {
//   alert(`Call rejected by ${data.recipientEmail}`);
// });

// // Handle user not available
// socket.on("user-not-available", (data) => {
//   alert(`User  ${data.recipientEmail} is not available`);
// });

// // Switch Camera
// window.switchCamera = async () => {
//   const devices = await navigator.mediaDevices.enumerateDevices();
//   const videoDevices = devices.filter((device) => device.kind === "videoinput");

//   if (videoDevices.length < 2) {
//     alert("No alternate camera found.");
//     return;
//   }

//   const currentDeviceId = localStream
//     .getVideoTracks()[0]
//     .getSettings().deviceId;
//   const alternateDevice = videoDevices.find(
//     (device) => device.deviceId !== currentDeviceId
//   );

//   if (!alternateDevice) {
//     alert("No alternate camera found.");
//     return;
//   }

//   // Stop the current video track
//   localStream.getVideoTracks()[0].stop();

//   // Get new media stream with the alternate camera
//   navigator.mediaDevices
//     .getUserMedia({
//       video: { deviceId: { exact: alternateDevice.deviceId } },
//       audio: true,
//     })
//     .then((stream) => {
//       localStream = stream;
//       document.getElementById("local-video").srcObject = stream;

//       if (currentCall) {
//         currentCall.replaceTrack(
//           currentCall.localStream.getVideoTracks()[0],
//           stream.getVideoTracks()[0],
//           localStream
//         );
//       }
//     })
//     .catch((error) => {
//       console.error("Error switching camera:", error);
//     });
// };

// // Handle incoming calls
// // peer.on("call", (incomingCall) => {
// //   console.log("Incoming call from:", incomingCall.peer);

// //   // Show incoming call notification
// //   document.getElementById("incoming-call").classList.remove("hidden");
// //   document.getElementById(
// //     "caller-name"
// //   ).innerText = `${incomingCall.peer} is calling`;

// //   // Store the incoming call globally
// //   currentCall = incomingCall;

// //   // Handle Accept Call Button
// //   document.getElementById("accept-call").onclick = () => {
// //     navigator.mediaDevices
// //       .getUserMedia({ video: true, audio: true })
// //       .then((stream) => {
// //         localStream = stream;
// //         document.getElementById("local-video").srcObject = stream; // Show local video

// //         incomingCall.answer(stream); // Answer the call with the local stream

// //         incomingCall.on("stream", (remoteStream) => {
// //           console.log("Remote stream received:", remoteStream);
// //           document.getElementById("remote-video").srcObject = remoteStream; // Show remote video
// //         });

// //         incomingCall.on("close", () => {
// //           console.log("Call ended.");
// //           endCall(); // Clean up the call
// //         });

// //         // Notify the caller that the call has been accepted
// //         socket.emit("call-accepted", { callerEmail: incomingCall.peer });
// //       })
// //       .catch((error) => {
// //         console.error("Error accessing media devices:", error);
// //         alert("Failed to access camera and microphone.");
// //       });

// //     // Hide the incoming call notification
// //     document.getElementById("incoming-call").classList.add("hidden");
// //   };

// //   // Handle Reject Call Button
// //   document.getElementById("reject-call").onclick = () => {
// //     // Notify the caller that the call has been rejected
// //     socket.emit("call-rejected", { callerEmail: incomingCall.peer });

// //     // Hide the incoming call notification
// //     document.getElementById("incoming-call").classList.add("hidden");
// //     endCall(); // Clean up the call
// //   };
// // });
// peer.on("call", (incomingCall) => {
//   console.log("Incoming call from:", incomingCall.peer);

//   // Show incoming call notification
//   document.getElementById("incoming-call").classList.remove("hidden");
//   document.getElementById(
//     "caller-name"
//   ).innerText = `${incomingCall.peer} is calling`;

//   // Store the incoming call globally
//   currentCall = incomingCall;

//   // Handle Accept Call Button
//   document.getElementById("accept-call").onclick = () => {
//     navigator.mediaDevices
//       .getUserMedia({ video: true, audio: true })
//       .then((stream) => {
//         localStream = stream;
//         document.getElementById("local-video").srcObject = stream; // Show local video

//         currentCall.answer(stream); // Answer the call with the local stream

//         currentCall.on("stream", (remoteStream) => {
//           console.log("Remote video stream received");
//           document.getElementById("remote-video").srcObject = remoteStream; // Show remote video
//         });

//         currentCall.on("close", () => {
//           console.log("Call ended");
//           endCall(); // Clean up the call
//         });

//         // Notify the caller that the call has been accepted
//         socket.emit("call-accepted", { callerEmail: incomingCall.peer });
//       })
//       .catch((error) => {
//         console.error("Error accessing media devices:", error);
//         alert("Failed to access camera and microphone.");
//       });

//     // Hide the incoming call notification
//     document.getElementById("incoming-call").classList.add("hidden");
//   };

//   // Handle Reject Call Button
//   document.getElementById("reject-call").onclick = () => {
//     // Notify the caller that the call has been rejected
//     socket.emit("call-rejected", { callerEmail: incomingCall.peer });

//     // Hide the incoming call notification
//     document.getElementById("incoming-call").classList.add("hidden");
//     endCall(); // Clean up the call
//   };
// });
// // End call function
// // window.endCall = () => {
// //   if (currentCall) {
// //     currentCall.close();
// //   }
// //   if (localStream) {
// //     localStream.getTracks().forEach((track) => track.stop());
// //   }
// //   currentCall = null;
// //   localStream = null;
// // };
// // End call function
// window.endCall = () => {
//   if (currentCall) {
//     currentCall.close();
//   }
//   if (localStream) {
//     localStream.getTracks().forEach((track) => track.stop());
//   }
//   currentCall = null;
//   localStream = null;
//   document.getElementById("remote-video").srcObject = null;
//   document.getElementById("local-video").srcObject = null;
//   console.log("Call ended and streams cleaned up");
// };

// // Handle peer ID response
// socket.on("peer-id-response", (data) => {
//   if (!data.peerId) {
//     alert("User is not available for a call.");
//     return;
//   }

//   navigator.mediaDevices
//     .getUserMedia({ video: true, audio: true })
//     .then((stream) => {
//       localStream = stream;
//       document.getElementById("local-video").srcObject = stream;

//       const call = peer.call(data.peerId, stream); // Call using peerId
//       currentCall = call;

//       call.on("stream", (remoteStream) => {
//         console.log("Remote video stream received");
//         document.getElementById("remote-video").srcObject = remoteStream; // Show remote video
//       });

//       call.on("error", (err) => {
//         console.error("Call error:", err);
//       });

//       call.on("close", () => {
//         console.log("Call ended");
//         endCall();
//       });
//     })
//     .catch((error) => {
//       console.error("Error accessing media devices:", error);
//     });
// });

const socket = io("https://videocallchattingapplication.onrender.com");
socket.on("connect", () => {
  console.log("Connected to server");
});
socket.on("connect_error", (err) => {
  console.error("Connection error:", err);
});

let localStream = null; // Store the local media stream globally
let currentCall = null; // Store the current call globally

// Utility functions to show/hide UI sections
const showChat = () => {
  document.getElementById("auth-container").classList.add("hidden");
  document.getElementById("chat-container").classList.remove("hidden");
  const email = document.getElementById("email").value;
  document.getElementById("user-email").textContent = email;
};

const showAuth = () => {
  document.getElementById("auth-container").classList.remove("hidden");
  document.getElementById("chat-container").classList.add("hidden");
};

// Signup function
window.signup = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email.split("@")[0], email, password }),
    });

    const data = await res.json();
    alert(data.message);

    if (res.ok) showChat();
  } catch (error) {
    console.error("Signup Error:", error);
    alert("Signup failed!");
  }
};

// Login function
window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    alert(data.message);

    if (res.ok) {
      showChat();
      socket.emit("join", email);
      socket.emit("register-user", { email }); // Register user with their email
    }
  } catch (error) {
    console.error("Login Error:", error);
    alert("Login failed!");
  }
};

// Logout function
window.logout = () => {
  alert("You have been logged out!");
  showAuth();
};

// Send message function
window.sendMessage = () => {
  const messageInput = document.getElementById("message");
  const message = messageInput.value.trim();

  if (message) {
    socket.emit("message", { email: "You", message });

    // If the message mentions @chatbot, ask the server to get a response
    if (message.includes("@chatbot")) {
      socket.emit("chatbot_request", message);
    }

    addMessageToChat({ email: "You", message }, true);
    messageInput.value = "";
  }
};

// Listen for chatbot responses
socket.on("chatbot_response", (data) => {
  addMessageToChat({ email: "Chatbot", message: data.response }, false);
});

// Listen for incoming messages
socket.on("message", (data) => {
  addMessageToChat(data, false);
});

// Add message to chat UI
function addMessageToChat(data, isSelf) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");

  messageElement.classList.add("message");
  if (isSelf) messageElement.classList.add("self");

  messageElement.innerHTML = `<strong>${data.email}:</strong> ${data.message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Update profile picture preview
function updateProfilePic(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById("profile-img").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

// Toggle options menu
function toggleOptions() {
  document.querySelector(".more-options").classList.toggle("active");
}

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  const moreOptions = document.querySelector(".more-options");
  if (!moreOptions.contains(event.target)) {
    moreOptions.classList.remove("active");
  }
});

// Send file function
window.sendFile = async () => {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (!file) return alert("Please select a file.");

  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch("/upload", { method: "POST", body: formData });
    const data = await res.json();

    if (res.ok) {
      // Emit the file event ONCE
      const fileData = {
        email: "You",
        fileName: data.fileName,
        fileUrl: data.fileUrl,
      };
      socket.emit("file", fileData);

      // Ensure it's added only once
      addFileToChat(fileData, true);
    } else {
      alert(data.error);
    }
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

// Add file to chat UI
function addFileToChat(data, isOwnMessage = false) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");

  if (isOwnMessage) messageDiv.classList.add("own-message");

  messageDiv.innerHTML = `
      <p><strong>${data.email}</strong></p>
      <p><a href="${data.fileUrl}" target="_blank">${data.fileName}</a></p>
    `;

  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Listen for incoming file messages
socket.on("file", (data) => {
  // Prevent duplicate file messages
  const existingMessages = Array.from(document.querySelectorAll(".message"));
  const alreadyExists = existingMessages.some((msg) =>
    msg.innerHTML.includes(data.fileUrl)
  );

  if (!alreadyExists) {
    addFileToChat(data);
  }
});

// Update the Peer initialization with STUN servers
const peer = new Peer({
  config: {
    iceServers: [
      { urls: "stun:stun.l.google.com:19302" },
      { urls: "stun:stun1.l.google.com:19302" },
      { urls: "stun:stun2.l.google.com:19302" },
      { urls: "stun:stun3.l.google.com:19302" },
      { urls: "stun:stun4.l.google.com:19302" },
    ],
    iceCandidatePoolSize: 10,
  },
  debug: 3, // Enable detailed logging
});

peer.on("open", (id) => {
  console.log("My Peer ID:", id);
  socket.emit("register-peer", {
    email: document.getElementById("user-email").textContent,
    peerId: id,
  });
});

// Render online users list
socket.on("online-users", (users) => {
  const usersList = document.getElementById("users-list");
  usersList.innerHTML = ""; // Clear previous list

  users.forEach((user) => {
    if (user !== document.getElementById("user-email").textContent) {
      const userItem = document.createElement("li");
      userItem.textContent = user;

      // Add a call icon/button for each user
      const callIcon = document.createElement("button");
      callIcon.textContent = "📞"; // Call icon
      callIcon.onclick = () => startCall(user); // Pass the recipient email

      userItem.appendChild(callIcon);
      usersList.appendChild(userItem);
    }
  });
});

// Start call function
// window.startCall = (recipientEmail) => {
//   if (!recipientEmail) {
//     alert("No recipient selected.");
//     return;
//   }

//   navigator.mediaDevices
//     .getUserMedia({ video: true, audio: true })
//     .then((stream) => {
//       localStream = stream;
//       document.getElementById("local-video").srcObject = stream; // Show local video
//       console.log("StartCall Local-video streaming ");
//       const call = peer.call(recipientEmail, stream);
//       currentCall = call;

//       call.on("stream", (remoteStream) => {
//         console.log("StartCall remote-video streaming ");
//         document.getElementById("remote-video").srcObject = remoteStream; // Show remote video
//       });

//       call.on("close", () => {
//         if (localStream) {
//           localStream.getTracks().forEach((track) => track.stop());
//         }
//         currentCall = null;
//       });
//     })
//     .catch((error) => {
//       console.error("Error accessing media devices:", error);
//     });

//   socket.emit("call-user", {
//     recipientEmail,
//     callerEmail: document.getElementById("user-email").textContent,
//   });
// };
// Enhanced Start Call function
window.startCall = async (recipientEmail) => {
  if (!recipientEmail) {
    alert("No recipient selected.");
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: { ideal: 1280 },
        height: { ideal: 720 },
        frameRate: { ideal: 30 },
      },
      audio: true,
    });

    localStream = stream;
    const localVideo = document.getElementById("local-video");
    localVideo.srcObject = stream;
    await localVideo
      .play()
      .catch((e) => console.error("Error playing local video:", e));
    console.log("Local video stream started successfully");

    const call = peer.call(recipientEmail, stream);
    console.log("Initiating call to:", recipientEmail);

    call.on("stream", async (remoteStream) => {
      console.log("Received remote stream in startCall");
      await handleRemoteStream(remoteStream);
    });

    currentCall = call;

    // Monitor connection state
    call.peerConnection.addEventListener("connectionstatechange", (event) => {
      console.log(
        "Connection state changed:",
        call.peerConnection.connectionState
      );
    });

    call.peerConnection.addEventListener(
      "iceconnectionstatechange",
      (event) => {
        console.log(
          "ICE connection state:",
          call.peerConnection.iceConnectionState
        );
      }
    );

    socket.emit("call-user", {
      recipientEmail,
      callerEmail: document.getElementById("user-email").textContent,
    });
  } catch (error) {
    console.error("Error starting call:", error);
    alert("Failed to access camera and microphone.");
  }
};

// New function to handle remote stream
async function handleRemoteStream(remoteStream) {
  console.log("Handling remote stream");
  const remoteVideo = document.getElementById("remote-video");

  // Log remote stream details
  console.log("Remote stream tracks:", remoteStream.getTracks());
  const videoTracks = remoteStream.getVideoTracks();
  const audioTracks = remoteStream.getAudioTracks();

  console.log("Video tracks:", videoTracks.length);
  console.log("Audio tracks:", audioTracks.length);

  if (videoTracks.length > 0) {
    console.log("Video track settings:", videoTracks[0].getSettings());
  }

  // Ensure the video element is properly set up
  remoteVideo.autoplay = true;
  remoteVideo.playsInline = true;
  remoteVideo.srcObject = null; // Clear any existing stream
  remoteVideo.srcObject = remoteStream;

  try {
    await remoteVideo.play();
    console.log("Remote video playing successfully");
  } catch (err) {
    console.error("Error playing remote video:", err);
    // Try playing again with user interaction
    remoteVideo.addEventListener("click", () => {
      remoteVideo.play().catch((e) => console.error("Retry play error:", e));
    });
  }
}
function setupCallHandlers(call) {
  call.on("stream", async (remoteStream) => {
    console.log("Received remote stream");
    const remoteVideo = document.getElementById("remote-video");

    // Log video track information
    const videoTracks = remoteStream.getVideoTracks();
    if (videoTracks.length > 0) {
      console.log("Remote video tracks:", videoTracks);
      videoTracks.forEach((track) => {
        console.log("Track settings:", track.getSettings());
        console.log("Track state:", track.readyState);
      });
    }

    remoteVideo.srcObject = remoteStream;
    try {
      await remoteVideo.play();
      console.log("Remote video playing successfully");
    } catch (e) {
      console.error("Error playing remote video:", e);
    }
  });

  call.on("error", (error) => {
    console.error("Call error:", error);
    alert("Call error occurred. Please try again.");
    endCall();
  });

  call.on("close", () => {
    console.log("Call ended");
    endCall();
  });
}
// Handle Incoming Call
socket.on("incoming-call", (data) => {
  document.getElementById("incoming-call").classList.remove("hidden");
  document.getElementById(
    "caller-name"
  ).innerText = `${data.callerEmail} is calling`;
});

window.acceptCall = async () => {
  const callerEmail = document
    .getElementById("caller-name")
    .textContent.split(" is calling")[0];

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: { ideal: 1280 },
        height: { ideal: 720 },
        frameRate: { ideal: 30 },
      },
      audio: true,
    });

    localStream = stream;
    console.log("Local video stream started");
    const localVideo = document.getElementById("local-video");
    localVideo.srcObject = stream;
    await localVideo
      .play()
      .catch((e) => console.error("Error playing local video:", e));

    if (currentCall) {
      setupCallHandlers(currentCall);
      currentCall.answer(stream);
    } else {
      console.error("No current call to answer.");
    }

    socket.emit("accept-call", { callerEmail });
    document.getElementById("incoming-call").classList.add("hidden");
  } catch (error) {
    console.error("Error accessing media devices:", error);
    alert("Failed to access camera and microphone.");
  }
};

// Handle peer ID response
socket.on("peer-id-response", (data) => {
  if (!data.peerId) {
    alert("User is not available for a call.");
    return;
  }

  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      localStream = stream;
      document.getElementById("local-video").srcObject = stream;

      const call = peer.call(data.peerId, stream); // Call using peerId
      currentCall = call;

      call.on("stream", (remoteStream) => {
        console.log("Receiving remote stream...");
        document.getElementById("remote-video").srcObject = remoteStream; // Show remote video
      });

      call.on("error", (err) => {
        console.error("Call error:", err);
      });

      call.on("close", () => {
        console.log("Call ended.");
      });
    })
    .catch((error) => {
      console.error("Error accessing media devices:", error);
    });
});

// Reject Call
window.rejectCall = () => {
  const callerEmail = document
    .getElementById("caller-name")
    .textContent.split(" is calling")[0];

  // Stop local media tracks
  if (localStream) {
    localStream.getTracks().forEach((track) => track.stop());
  }

  socket.emit("reject-call", { callerEmail });
  document.getElementById("incoming-call").classList.add("hidden");
};

// Handle call accepted
socket.on("call-accepted", (data) => {
  alert(`Call accepted by ${data.recipientEmail}`);
});

// Handle call rejected
socket.on("call-rejected", (data) => {
  alert(`Call rejected by ${data.recipientEmail}`);
});

// Handle user not available
socket.on("user-not-available", (data) => {
  alert(`User ${data.recipientEmail} is not available`);
});

// Switch Camera
// window.switchCamera = async () => {
//   const devices = await navigator.mediaDevices.enumerateDevices();
//   const videoDevices = devices.filter((device) => device.kind === "videoinput");

//   if (videoDevices.length < 2) {
//     alert("No alternate camera found.");
//     return;
//   }

//   const currentDeviceId = localStream
//     .getVideoTracks()[0]
//     .getSettings().deviceId;
//   const alternateDevice = videoDevices.find(
//     (device) => device.deviceId !== currentDeviceId
//   );

//   if (!alternateDevice) {
//     alert("No alternate camera found.");
//     return;
//   }

//   // Stop the current video track
//   localStream.getVideoTracks()[0].stop();

//   // Get new media stream with the alternate camera
//   navigator.mediaDevices
//     .getUserMedia({
//       video: { deviceId: { exact: alternateDevice.deviceId } },
//       audio: true,
//     })
//     .then((stream) => {
//       localStream = stream;
//       document.getElementById("local-video").srcObject = stream;

//       if (currentCall) {
//         currentCall.replaceTrack(
//           currentCall.localStream.getVideoTracks()[0],
//           stream.getVideoTracks()[0],
//           localStream
//         );
//       }
//     })
//     .catch((error) => {
//       console.error("Error switching camera:", error);
//     });
// };
window.switchCamera = async () => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(
      (device) => device.kind === "videoinput"
    );

    if (videoDevices.length < 2) {
      alert("No alternate camera found.");
      return;
    }

    const currentTrack = localStream.getVideoTracks()[0];
    const currentDeviceId = currentTrack.getSettings().deviceId;
    const alternateDevice = videoDevices.find(
      (device) => device.deviceId !== currentDeviceId
    );

    if (!alternateDevice) {
      alert("No alternate camera found.");
      return;
    }

    const newStream = await navigator.mediaDevices.getUserMedia({
      video: {
        deviceId: { exact: alternateDevice.deviceId },
        width: { ideal: 1280 },
        height: { ideal: 720 },
        frameRate: { ideal: 30 },
      },
      audio: true,
    });

    const [videoTrack] = newStream.getVideoTracks();

    if (currentCall && currentCall.peerConnection) {
      const sender = currentCall.peerConnection
        .getSenders()
        .find((s) => s.track.kind === "video");

      if (sender) {
        await sender.replaceTrack(videoTrack);
      }
    }

    currentTrack.stop();
    localStream.removeTrack(currentTrack);
    localStream.addTrack(videoTrack);

    document.getElementById("local-video").srcObject = localStream;
    console.log("Camera switched successfully");
  } catch (error) {
    console.error("Error switching camera:", error);
    alert("Failed to switch camera.");
  }
};

// peer.on("call", (incomingCall) => {
//   console.log("Incoming call from:", incomingCall.peer);

//   // Show incoming call notification
//   document.getElementById("incoming-call").classList.remove("hidden");
//   document.getElementById(
//     "caller-name"
//   ).innerText = `${incomingCall.peer} is calling`;

//   // Store the incoming call globally
//   currentCall = incomingCall;

//   // Handle Accept Call Button
//   document.getElementById("accept-call").onclick = () => {
//     navigator.mediaDevices
//       .getUserMedia({ video: true, audio: true })
//       .then((stream) => {
//         localStream = stream;
//         document.getElementById("local-video").srcObject = stream; // Show local video

//         currentCall.answer(stream); // Answer the call with the local stream

//         currentCall.on("stream", (remoteStream) => {
//           console.log("Remote video stream received");
//           document.getElementById("remote-video").srcObject = remoteStream; // Show remote video
//         });

//         currentCall.on("close", () => {
//           console.log("Call ended");
//           endCall(); // Clean up the call
//         });

//         // Notify the caller that the call has been accepted
//         socket.emit("call-accepted", { callerEmail: incomingCall.peer });
//       })
//       .catch((error) => {
//         console.error("Error accessing media devices:", error);
//         alert("Failed to access camera and microphone.");
//       });

//     // Hide the incoming call notification
//     document.getElementById("incoming-call").classList.add("hidden");
//   };

//   // Handle Reject Call Button
//   document.getElementById("reject-call").onclick = () => {
//     // Notify the caller that the call has been rejected
//     socket.emit("call-rejected", { callerEmail: incomingCall.peer });

//     // Hide the incoming call notification
//     document.getElementById("incoming-call").classList.add("hidden");
//     endCall(); // Clean up the call
//   };
// });

// window.endCall = () => {
//   if (currentCall) {
//     currentCall.close();
//   }
//   if (localStream) {
//     localStream.getTracks().forEach((track) => track.stop());
//   }
//   currentCall = null;
//   localStream = null;
//   document.getElementById("remote-video").srcObject = null;
//   document.getElementById("local-video").srcObject = null;
//   console.log("Call ended and streams cleaned up");
// };

// Handle peer ID response
peer.on("call", async (incomingCall) => {
  console.log("Incoming call received");
  document.getElementById("incoming-call").classList.remove("hidden");
  document.getElementById(
    "caller-name"
  ).textContent = `${incomingCall.peer} is calling`;
  currentCall = incomingCall;

  document.getElementById("accept-call").onclick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          frameRate: { ideal: 30 },
        },
        audio: true,
      });

      localStream = stream;
      const localVideo = document.getElementById("local-video");
      localVideo.srcObject = stream;
      await localVideo
        .play()
        .catch((e) => console.error("Error playing local video:", e));

      console.log("Answering incoming call");
      incomingCall.answer(stream);

      incomingCall.on("stream", async (remoteStream) => {
        console.log("Received remote stream in incoming call");
        await handleRemoteStream(remoteStream);
      });

      // Monitor connection state for incoming call
      incomingCall.peerConnection.addEventListener(
        "connectionstatechange",
        (event) => {
          console.log(
            "Incoming call connection state:",
            incomingCall.peerConnection.connectionState
          );
        }
      );

      incomingCall.peerConnection.addEventListener(
        "iceconnectionstatechange",
        (event) => {
          console.log(
            "Incoming call ICE state:",
            incomingCall.peerConnection.iceConnectionState
          );
        }
      );

      socket.emit("call-accepted", { callerEmail: incomingCall.peer });
      document.getElementById("incoming-call").classList.add("hidden");
    } catch (error) {
      console.error("Error accepting call:", error);
      alert("Failed to access camera and microphone.");
    }
  };
});

window.endCall = () => {
  console.log("Ending call");
  if (currentCall) {
    if (currentCall.peerConnection) {
      console.log(
        "Final connection state:",
        currentCall.peerConnection.connectionState
      );
      console.log(
        "Final ICE state:",
        currentCall.peerConnection.iceConnectionState
      );
    }
    currentCall.close();
  }

  if (localStream) {
    localStream.getTracks().forEach((track) => {
      track.stop();
      console.log(`Stopped local track: ${track.kind}`);
    });
  }

  const remoteVideo = document.getElementById("remote-video");
  const localVideo = document.getElementById("local-video");

  if (remoteVideo.srcObject) {
    remoteVideo.srcObject.getTracks().forEach((track) => {
      track.stop();
      console.log(`Stopped remote track: ${track.kind}`);
    });
    remoteVideo.srcObject = null;
  }

  if (localVideo.srcObject) {
    localVideo.srcObject.getTracks().forEach((track) => track.stop());
    localVideo.srcObject = null;
  }

  currentCall = null;
  localStream = null;
  console.log("Call cleanup completed");
};

socket.on("peer-id-response", (data) => {
  if (!data.peerId) {
    alert("User is not available for a call.");
    return;
  }

  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      console.log("Media stream accessed successfully:", stream);
      localStream = stream;
      document.getElementById("local-video").srcObject = stream;

      const call = peer.call(data.peerId, stream); // Call using peerId
      currentCall = call;

      call.on("stream", (remoteStream) => {
        console.log("Remote stream received:", remoteStream);
        document.getElementById("remote-video").srcObject = remoteStream;
      });

      call.on("error", (err) => {
        console.error("Call error:", err);
      });

      call.on("close", () => {
        console.log("Call ended");
        endCall();
      });
    })
    .catch((error) => {
      console.error("Error accessing media devices:", error);
    });
});
