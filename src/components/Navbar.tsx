import { HStack, Image, Text } from '@chakra-ui/react'
import Logo from '../assets/logo.webp'

export default function Navbar() {
  return (
    <div>
      <HStack boxSize='60px'>
        <Image src={Logo}/>
        <Text>Skeam</Text>
      </HStack>
    </div>
  )
}
