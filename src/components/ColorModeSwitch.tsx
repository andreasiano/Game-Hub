import { HStack, Switch, Text, useColorMode, Box } from "@chakra-ui/react";

export default function ColorModeSwitch() {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <HStack>
            <Switch colorScheme="green" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
            <Box whiteSpace="nowrap">
                <Text>Dark Mode</Text>
            </Box>
        </HStack>
    );
}
