form.addEventListener("submit", function(e) {
    e.preventDefault();
  
    let userId = e.target.id.value;
    let userPw1 = e.target.pw1.value;
    let userPw2 = e.target.pw2.value;
    let userName = e.target.name.value;
    let userPhone = e.target.phone.value;
    let userPosition = e.target.position.value;
  
    if (userId.length < 6) {
      alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.");
      return;
    }
  
    if (userPw1 !== userPw2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
  
    document.body.innerHTML = "";
    document.write(`
      <p>${userId}님 환영합니다.</p>
      <p>회원 가입 시 입력하신 내역은 다음과 같습니다.</p>
      <ul>
        <li>아이디: ${userId}</li>
        <li>이름: ${userName}</li>
        <li>전화번호: ${userPhone}</li>
        <li>원하는 직무: ${userPosition}</li>
      </ul>
    `);
  });
  