import { HStack, Image } from '@chakra-ui/react';
import Logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void
}

export default function Navbar({onSearch}: Props) {
  return (
    <HStack my={10} justifyContent='space-between'>
      <Image src={Logo} boxSize='60px' />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
}
