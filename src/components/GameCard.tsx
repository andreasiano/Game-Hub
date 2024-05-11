import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image, HStack } from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconsList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'

interface Props {
  game: Game
}

export default function GameCard({game}: Props) {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}  objectFit="cover"/>
      <CardBody>
        <Heading marginY={5} fontSize={'2xl'}>
          {game.name}
        </Heading>
        <HStack justifyContent={'space-between'}>
          <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)}/>
          <CriticScore score={game.metacritic}/>
        </HStack>
      </CardBody>
    </Card>
  )
}
