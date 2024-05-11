import useGenres from "../hooks/useGenres";
import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

export default function GenreList() {
  const { data } = useGenres()
  return (
    <List>
      {data.map((genre) => (
        <ListItem paddingY={'5px'} key={genre.id}>
          <HStack>
            <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
            <Text fontSize={'lg'}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
