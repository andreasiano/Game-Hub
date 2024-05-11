import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export default function GameCardContainer({children}: Props) {
  return (
    <Box boxShadow="var(--chakra-shadows-base)" width='100%' borderRadius={10} overflow={'hidden'}>{children}</Box>
  )
}
