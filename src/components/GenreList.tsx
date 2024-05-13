import useGenres, { Genre } from "../hooks/useGenres";
import { HStack, List, ListItem, Image, Button, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void
}

export default function GenreList({onSelectGenre}: Props) {
  const { data, isLoading, error } = useGenres()
  if(isLoading) return <Spinner/>
  if(error) return null
  return (
    <List>
      {data.map((genre) => (
        <ListItem paddingY={'5px'} key={genre.id}>
          <HStack>
            <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
            <Button onClick={() => onSelectGenre(genre)} variant='link' fontSize={'lg'}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
