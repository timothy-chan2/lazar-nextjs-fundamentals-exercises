import type { GetStaticProps } from 'next'

import { List, ListItem, Container, Heading } from '@chakra-ui/react'

type Props = {
  genres: string[]
}

const Genres = ({ genres }: Props) => {
  return (
    <Container maxW="container.xl" pt={10}>
      <Heading mb={4}>Genres:</Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre}>{genre}</ListItem>
        ))}
      </List>
    </Container>
  )
}

export const getStaticProps: GetStaticProps<Props> = (context) => {
  const genres = [ "rock", "country", "pop" ]

  const props: Props = {
    genres
  }

  return {
    props
  }
}

export default Genres