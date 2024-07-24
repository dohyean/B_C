const global_value = {
  return_DBMS_err: 0, // 에러
  return_DBMS_success: 1, // 성공
  return_DBMS_undefined: 2, // 데이터 없음

  All_Complete: 0, // 모든 조건 만족 & 데이터 저장
  Fail: 1, // 실패
  Error: 2, // 문법 오류
  Other_Error: 3, // 이외의 오류

  Return_FindID_Error: 0, // 아이디 찾기 문법 오류
  Return_FindID_Match: 1, // 아이디가 있는 경우 (성공)
  Return_FindID_Undefined: 2, // 아이디가 없는 경우 (실패)

  Return_FindPW_Error: 0, // 패스워드 찾기 문법 오류
  Return_FindPW_Match: 1, // 패스워드가 있는 경우 (성공)
  Return_FindPW_Undefined: 2, // 패스워드가 없는 경우 (실패)

  Return_Duplicate_Error: 0, // ID 중복 시 문법 오류
  Return_Duplicate_Match: 1, // 중복된 ID가 있는 경우 (실패)
  Return_Duplicate_Undefined: 2, // 중복된 ID가 없는 경우 (성공)

  Return_UserData_Error: 0, // 유저 데이터 저장 문법 오류
  Return_UserData_Success: 1, // 유저 데이터 저장 성공

  Return_Update_Error: 0, // sql Update 실행시 오류
  Return_Update_Success: 1, // sql Update 실행시 성공

  Return_Select_Error: 0, // sql Select 실행시 오류
  Return_Select_Match: 1, // sql Select 실행시 데이터가 있는 경우 (성공)
  Return_Select_Undefined: 2, // sql Select 실행시 오류 데이터가 없는 경우 (실패)
};

exports.global_value = global_value;
