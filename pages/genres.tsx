import type { GetStaticProps } from 'next'
import Link from 'next/link'

import { List, ListItem, Container, Heading } from '@chakra-ui/react'

type Props = {
  genres: string[]
}

const Genres = ({ genres }: Props) => {
  return (
    <Container maxW="container.xl" pt={10}>
      <Link href="/">Home</Link>
      <Heading mb={4}>Genres:</Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre}>{genre}</ListItem>
        ))}
      </List>
    </Container>
  )
}

import { promises as fs } from 'fs'
import path from 'path'
export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const filePath = path.join(process.cwd(), 'genreList.json')
  const jsonData = await fs.readFile(filePath, 'utf8')
  const objectData = JSON.parse(jsonData)
  const genres: string[] = Object.values(objectData)

  const props: Props = {
    genres
  }

  return {
    props
  }
}

export default Genres