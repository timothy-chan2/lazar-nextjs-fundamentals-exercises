import { useRouter } from 'next/router'

const Artist = () => {
  const router = useRouter()
  const { gid, artist } = router.query

  return (
    <p>{ artist } is a { gid } music artist!</p>
  )
}

export default Artist;