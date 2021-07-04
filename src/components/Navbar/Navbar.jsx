import React from 'react'
import { Box ,Flex,Button,useColorModeValue } from '@chakra-ui/react'
import DarkmodeToggle from '../DarkmodeToggle/DarkmodeToggle';

import Logo from './Logo';

const Navbar = () => {

    const bg = useColorModeValue("white", "#0D101B")
    const shadow = useColorModeValue("base", "none")

    return ( 
        <Flex boxShadow={shadow}  justify="center" bg={bg}   >
            <Flex mx="20px"  justify="space-between" align="center" w="1286px" h="90px"  >
                <Flex >
                <Logo/>
                <Button fontWeight="medium" ml="52px"  variant="ghost">
                    Movies
                 </Button>
                 <Button fontWeight="medium" ml="20px"  variant="ghost">
                    Shows
                 </Button>

                </Flex>
                <Box>
                <DarkmodeToggle/>
                </Box>
            </Flex>
        </Flex>
     );
}
 
export default Navbar;