import Link from 'next/link'

export default function Timeline({userName}) {
  return(
    <>
    <h1>This is the timeline of {userName}</h1>
    <Link href='/'><a>Go Home</a></Link>
    </>
  )
}

Timeline.getInitialProps = () => {
  return { userName: '@melvin'}
}