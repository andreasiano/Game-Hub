import { HStack, Switch, useColorMode } from "@chakra-ui/react";

export default function ColorModeSwitch() {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <HStack>
            <Switch colorScheme="blue" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
        </HStack>
    );
}
