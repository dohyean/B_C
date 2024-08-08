const io = require("socket.io-client");

let socket = null;

function connectSocket() {
  return new Promise((resolve, reject) => {
    if (!socket || !socket.connected) {
      socket = io("https://localhost:3001", {
        reconnectionAttempts: 3, // 재연결 시도 횟수
        timeout: 5000, // 연결 시간 제한(ms)
      });

      socket.on("connect", () => {
        console.log("Socket connected!");
        resolve(socket);
      });

      socket.on("connect_error", (error) => {
        console.error("Socket connection error:", error);
        reject(error);
      });
    } else {
      resolve(socket);
    }
  });
}

function disconnectSocket(socket) {
  return new Promise((resolve, reject) => {
    if (socket && socket.connected) {
      socket.disconnect();
      console.log("Socket disconnected successfully");
      resolve(0);
    } else {
      console.log("Socket is not connected");
      resolve(0);
    }
  });
}

// 회원가입 기능
async function SignUp_Server(formData) {
  const socket = await connectSocket();
  try {
    const SignUp = require("./Credential/SignUp/SignUp_Server.js");
    var return_data = await SignUp.SignUp_Server(socket, formData);
    return return_data;
  } catch (err) {
    console.error("err in SignUp_Server: ", err);
    throw err;
  } finally {
    await disconnectSocket(socket);
  }
}

// 아이디 찾기 기능
async function FindID_Server(formData) {
  const socket = await connectSocket();
  try {
    const FindID = require("./Credential/FindID/FindID_Server.js");
    var return_data = await FindID.FindID_Server(socket, formData);
    return return_data;
  } catch (err) {
    console.error("err in FindID_Server: ", err);
    throw err;
  } finally {
    await disconnectSocket(socket);
  }
}

// 패스워드 찾기 기능
async function FindPW_Server(formData) {
  const socket = await connectSocket();
  try {
    const FindPW = require("./Credential/FindPW/FindPW_Server.js");
    var return_data = await FindPW.FindPW_Server(socket, formData);
    return return_data;
  } catch (err) {
    console.error("err in FindPW_Server: ", err);
    throw err;
  } finally {
    await disconnectSocket(socket);
  }
}

// 패스워드 변경 기능
async function ChangePW_Server(formData) {
  const socket = await connectSocket();
  try {
    const ChangePW = require("./Credential/ChangePW/ChangePW_Server.js");
    var return_data = await ChangePW.ChangePW_Server(socket, formData);
    return return_data;
  } catch (err) {
    console.error("err in ChangePW_Server: ", err);
    throw err;
  } finally {
    await disconnectSocket(socket);
  }
}

// 해시를 생성하는 기능
async function MakeHash_Server() {
  try {
    const MakeHash = require("./Credential/HashModule/MakeHash/MakeHash_Server.js");
    var return_data = await MakeHash.MakeHash_Server(socket);
    return return_data;
  } catch (err) {
    console.error("err in MakeHash_Server: ", err);
    throw err;
  }
}

// 저장된 해시를 가져오는 기능
async function GetHash_Server(formData) {
  const socket = await connectSocket();
  try {
    const GetHash = require("./Credential/HashModule/GetHash/GetHash_Server.js");
    var return_data = await GetHash.GetHash_Server(socket, formData);
    return return_data;
  } catch (err) {
    console.error("err in GetHash_Server: ", err);
    throw err;
  } finally {
    await disconnectSocket(socket);
  }
}

// 로그인 기능
async function Login_Server(formData) {
  const socket = await connectSocket();
  try {
    const Login = require("./Credential/Login/Login_Server.js");
    var return_data = await Login.Login_Server(socket, formData);
    return return_data;
  } catch (err) {
    console.error("err in Login_Server: ", err);
    throw err;
  } finally {
    await disconnectSocket(socket);
  }
}

// 아래는 후순위 더미 데이터 (유저 정보 제거 관련 데이터)
async function DeleteUser_Server(formData) {
  const socket = await connectSocket();
  try {
    const DeleteUser = require("./DeleteUser/DeleteUser_Server.js");
    var return_data = await DeleteUser.DeleteUser_Server(socket, formData);
    return return_data;
  } catch (err) {
    console.error("err in DeleteUser_Server: ", err);
    throw err;
  } finally {
    await disconnectSocket(socket);
  }
}

// 블로그 저장
async function BlogSave_Server(formData) {
  const socket = await connectSocket();
  try {
    const BlogSave = require("./Blog/BlogSave/BlogSave_Server.js");
    var return_data = await BlogSave.BlogSave_Server(socket, formData);
    return return_data;
  } catch (err) {
    console.error("err in BlogSave_Server: ", err);
    throw err;
  } finally {
    await disconnectSocket(socket);
  }
}

// 블로그 게시물 저장
async function BlogPostSave_Server(formData) {
  const socket = await connectSocket();
  try {
    const BlogPostSave = require("./Blog/BlogPostSave/BlogPostSave_Server.js");
    var return_data = await BlogPostSave.BlogPostSave_Server(socket, formData);
    return return_data;
  } catch (err) {
    console.error("err in BlogPostSave_Server: ", err);
    throw err;
  } finally {
    await disconnectSocket(socket);
  }
}

// 블로그 게시물 삭제
async function BlogPostDelete_Server(formData) {
  const socket = await connectSocket();
  try {
    const PostDelete = require("./Blog/Post/PostDelete/PostDelete_Server.js");
    var return_data = await PostDelete.PostDelete_Server(socket, formData);
    return return_data;
  } catch (err) {
    console.error("err in BlogPostDelete_Server: ", err);
    throw err;
  } finally {
    await disconnectSocket(socket);
  }
}

// 블로그 카테고리 생성
async function CategoryCreate_Server(formData) {
  const socket = await connectSocket();
  try {
    const CategoryCreate = require("./Blog/CategoryCreate/CategoryCreate_Server.js");
    var return_data = await CategoryCreate.CategoryCreate_Server(
      socket,
      formData
    );
    return return_data;
  } catch (err) {
    console.error("err in CategoryCreate_Server: ", err);
    throw err;
  } finally {
    await disconnectSocket(socket);
  }
}

// 블로그 댓글 생성
async function CommentCreate_Server(formData) {
  const socket = await connectSocket();
  try {
    const CommentCreate = require("./Blog/Commnet/CommentCreate/CommentCreate_Server.js");
    var return_data = await CommentCreate.CommentCreate_Server(
      socket,
      formData
    );
    return return_data;
  } catch (err) {
    console.error("err in CommentCreate_Server: ", err);
    throw err;
  } finally {
    await disconnectSocket(socket);
  }
}

// 블로그 댓글 삭제
async function CommentDelete_Server(formData) {
  const socket = await connectSocket();
  try {
    const CommentDelete = require("./Blog/Commnet/CommentDelete/CommentDelete_Server.js");
    var return_data = await CommentDelete.CommentDelete_Server(
      socket,
      formData
    );
    return return_data;
  } catch (err) {
    console.error("err in CommentDelete_Server: ", err);
    throw err;
  } finally {
    await disconnectSocket(socket);
  }
}

//연습용 이후 삭제 예정
async function Test_Server(formData) {
  const socket = await connectSocket();
  try {
    const Server_Receive = require("./Server_RecSend/Server_Receive.js");
    const { RecSend_Message } = require("./Server_RecSend/RecSend_Message.js");

    //const UserData = { ID: formData.ID }; //내가 보낼꺼로 설정

    var return_data = await Server_Receive.Server_Receive(
      socket,
      formData,
      RecSend_Message.test_Message
    );

    return return_data;
  } catch (err) {
    console.error("err in CommentDelete_Server: ", err);
    throw err;
  } finally {
    await disconnectSocket(socket);
  }
}

module.exports = {
  SignUp_Server,
  FindID_Server,
  FindPW_Server,
  ChangePW_Server,
  MakeHash_Server,
  GetHash_Server,
  Login_Server,
  DeleteUser_Server,
  BlogSave_Server,
  BlogPostSave_Server,
  BlogPostDelete_Server,
  CategoryCreate_Server,
  CommentCreate_Server,
  CommentDelete_Server,
  Test_Server,
};
