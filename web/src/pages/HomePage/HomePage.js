import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <i>Home</i>
      <ArticlesCell />
    </>
  )
}

export default HomePage
