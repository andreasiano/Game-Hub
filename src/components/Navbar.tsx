import { HStack, Image, Text } from '@chakra-ui/react';
import Logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

export default function Navbar() {
  return (
    <HStack px={10} justifyContent='space-between'>
      <Image src={Logo} boxSize='60px' />
      <ColorModeSwitch />
    </HStack>
  );
}
