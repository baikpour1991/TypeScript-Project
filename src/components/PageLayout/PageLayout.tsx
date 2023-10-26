interface IPageLayout {
  children: React.ReactNode
}

export const PageLayout = ({ children }: IPageLayout) => {
  return <div className="content">{children}</div>
}
