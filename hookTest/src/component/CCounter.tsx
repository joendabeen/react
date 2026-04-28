import { Component } from "react";

type Props = {
  count: number;
};

type State = {
  count: number;
};

export default class CCounter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: props.count,
    };
  }

  handleClick = (): void => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  // render가 두번 호출 됨 왜일까?
  // React.StrictMode => 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구
  // strict 모드는 개발 모드에서만 활성 됨
  // 프로덕션 빌드에서는 영향 없음
  // 원하지 않으면 main.tsx에서 StrictMode 태그 제거
  render() {
    console.log("render 호출");

    return (
      <div>
        <p>{this.state.count} 번 클릭</p>
        <button onClick={this.handleClick}>클릭</button>
      </div>
    );
  }

  componentDidMount(): void {
    console.log("componentDidMount 호출");
  }

  componentDidUpdate(): void {
    console.log("componentDidUpdate 호출");
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount 호출");
  }
}
