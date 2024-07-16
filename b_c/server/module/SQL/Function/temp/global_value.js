const global_value = {
    All_Complete: 0, // 모든 조건 만족 & 데이터 저장
    Fail: 1, // 실패
    Error: 2, // 문법 오류
    Other_Error: 3, // 이외의 오류

    Return_FindID_Error: 0, // 아이디 찾기 문법 오류
    Return_FindID_Undefined: 1, // 아이디가 없는 경우 (실패)
    Return_FindID_Match: 2, // 아이디가 있는 경우 (성공)

    Return_FindPW_Error: 0, // 패스워드 찾기 문법 오류
    Return_FindPW_Undefined: 1, // 패스워드가 없는 경우 (실패)
    Return_FindPW_Match: 2, // 패스워드가 있는 경우 (성공)

    Return_Duplicate_Error: 0, // ID 중복 시 문법 오류
    Return_Duplicate_Undefined: 1, // 중복된 ID가 없는 경우 (성공)
    Return_Duplicate_Match: 2, // 중복된 ID가 있는 경우 (실패)

    Return_UserData_Error: 0, // 유저 데이터 저장 문법 오류
    Return_UserData_Success: 1, // 유저 데이터 저장 성공
};

exports.global_value = global_value;