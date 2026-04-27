type ButtonProps = {
  onClick: () => void;
};

export function LoginButton({ onClick }: ButtonProps) {
  return <button onClick={onClick}>로그인</button>;
}

export function LogoutButton({ onClick }: ButtonProps) {
  return <button onClick={onClick}>로그아웃</button>;
}
