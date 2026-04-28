// useState가 어떻게 동작하는지
// function component를 사용하면서 class 생명주기를 이용하지 못하게 되면서
// 이 문제를 해결하기 위해서 사용하는 hook
// 그 중 useState가 어떻게 작동하는지를 구현해 본 코드

let hooks: any = [];
let currentIndex = 0;

function useState(initialValue: any) {
  const index = currentIndex;

  if (hooks[index] === undefined) {
    hooks[index] = initialValue;
  }

  function setState(newValue: any) {
    hooks[index] = newValue;
    render();
  }

  currentIndex++;
  return [hooks[index], setState];
}

function render() {
  return;
}
