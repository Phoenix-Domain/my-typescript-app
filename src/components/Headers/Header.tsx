interface HeaderProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  style: string;
}

function Header({ level = 1, children, style}: HeaderProps) {
  const Tag = `h${level}` as keyof HTMLElementTagNameMap;
  return <Tag className={style}>{children}</Tag>;
}

export default Header;