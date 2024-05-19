import { Badge } from "@chakra-ui/react"

interface Props {
    score: number
}

export default function CriticScore({score}: Props) {
    let color = score > 75 ? 'green' : score < 75 ? 'blue' : ''
  return (
    <div>
      <Badge color={color}>{score}</Badge>
    </div>
  )
}
