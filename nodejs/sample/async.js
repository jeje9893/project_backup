function wait(time) {
    return new Promise(function(res, rej) {
      setTimeout(() => {
        // 파라미터로 넘어온 시간 만큼 이후에 'ok'라는 값을 응답합니다.
        res('ok');
      }, time);
    });
  }
   
  async function series() {
    const wait1 = await wait(500);
    const wait2 = await wait(500);
    return "done!";
  }
   
  async function parallel() {
    const wait1 = wait(500);
    const wait2 = wait(500);
    const responseWait1 = await wait1;
    const responseWait2 = await wait2;
    return "done!";
  }
  