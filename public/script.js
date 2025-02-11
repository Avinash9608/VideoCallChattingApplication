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

const socket = io();
let localStream = null; // Store the local media stream globally
let currentCall = null; // Store the current call globally
let isFrontCamera = true; // Track the current camera (front or back)
let peer = null; // Peer instance for WebRTC
let callerEmail = null; // Store the caller's email for incoming calls

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

      // Initialize PeerJS with the user's email as the ID
      peer = new Peer(email, {
        host: "your-peerjs-server.com", // Replace with your PeerJS server
        port: 9000,
        path: "/myapp",
      });

      // Handle peer connection
      peer.on("open", (id) => {
        console.log("PeerJS connected with ID:", id);
      });

      // Handle incoming call
      peer.on("call", (call) => {
        // Show incoming call notification on the receiver's side
        document.getElementById("incoming-call").classList.remove("hidden");
        document.getElementById(
          "caller-name"
        ).innerText = `${callerEmail} is calling`;

        // Store the call object globally
        currentCall = call;
      });
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

// Function to get media devices (camera and microphone)
async function getMediaStream(frontCamera = true) {
  const constraints = {
    video: {
      facingMode: frontCamera ? "user" : "environment", // 'user' for front, 'environment' for back
    },
    audio: true, // Always enable microphone
  };

  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    return stream;
  } catch (error) {
    console.error("Error accessing media devices:", error);
    alert("Error accessing camera or microphone. Please grant permissions.");
    return null;
  }
}

// Start call function
window.startCall = async (recipientEmail) => {
  if (!recipientEmail) {
    alert("No recipient selected.");
    return;
  }

  // Notify the recipient of the incoming call
  socket.emit("incoming-call", {
    recipientEmail,
    callerEmail: document.getElementById("user-email").textContent,
  });

  // Show a message that the call is being initiated
  alert(`Calling ${recipientEmail}...`);
};

// Handle incoming call notification
socket.on("incoming-call", (data) => {
  callerEmail = data.callerEmail; // Store the caller's email
  document.getElementById("incoming-call").classList.remove("hidden");
  document.getElementById(
    "caller-name"
  ).innerText = `${callerEmail} is calling`;
});

// Accept call function
window.acceptCall = async () => {
  if (!callerEmail) return;

  // Hide the incoming call notification
  document.getElementById("incoming-call").classList.add("hidden");

  // Get the local media stream
  localStream = await getMediaStream(isFrontCamera);
  if (!localStream) return;

  // Display the local video
  document.getElementById("local-video").srcObject = localStream;

  // Answer the call
  currentCall.answer(localStream);

  // Handle the remote stream
  currentCall.on("stream", (remoteStream) => {
    document.getElementById("remote-video").srcObject = remoteStream;
  });

  // Handle call end
  currentCall.on("close", () => {
    if (localStream) {
      localStream.getTracks().forEach((track) => track.stop());
    }
    currentCall = null;
  });
};

// Reject call function
window.rejectCall = () => {
  document.getElementById("incoming-call").classList.add("hidden");
  callerEmail = null;
};

// Switch camera function
window.switchCamera = async () => {
  isFrontCamera = !isFrontCamera; // Toggle camera
  if (localStream) {
    localStream.getTracks().forEach((track) => track.stop()); // Stop current tracks
  }

  localStream = await getMediaStream(isFrontCamera); // Get new stream with the toggled camera
  if (!localStream) return;

  // Update local video
  document.getElementById("local-video").srcObject = localStream;

  // If there's an ongoing call, replace the stream
  if (currentCall) {
    const sender = currentCall.peerConnection
      .getSenders()
      .find((s) => s.track.kind === "video");
    if (sender) {
      sender.replaceTrack(localStream.getVideoTracks()[0]);
    }
  }
};
