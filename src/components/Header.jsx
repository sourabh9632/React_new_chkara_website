import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    GlobalStyle,
    HStack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'
function Header() {

    const
        { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>

            <Button pos={'fixed'} zIndex={'overlay'} top={'4'} left={'4'} colorScheme="purple" p={"0"} w={10} h={'10'} borderRadius={"full"} onClick={onOpen}>

                <BiMenuAltLeft size={"20"} />

            </Button>

            <Drawer isOpen={isOpen} placement={"left"} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        Sourabh Hub
                    </DrawerHeader>

                    <DrawerBody>
                        <VStack alignItems={"flex-start"}>
                            <Button  onClose={onClose} variant={"ghost"} colorScheme={"purple"} >
                                <Link to={'/'}>Home</Link>
                            </Button>
                            <Button variant={"ghost"} colorScheme={"purple"}  onClose={onClose}>
                                <Link to={'/videos'}>Videos</Link>
                            </Button>
                            <Button variant={"ghost"} colorScheme={"purple"}  onClose={onClose}>
                                <Link to={'/videos?category=free'}>Free Videos</Link>
                            </Button>
                            <Button variant={"ghost"} colorScheme={"purple"}  onClose={onClose}>
                                <Link to={'/upload'}>Upload Video</Link>
                            </Button>
                        </VStack>

                        <HStack pos={"absolute"} bottom={10} left={0} justifyContent={"space-evenly"} w={"full"}>
                            <Button colorScheme={'pink'}>

                            <Link to={'/login'}>Login</Link >  
                            </Button>
                             <Button colorScheme={'pink'} variant={"outline"}>

                            <Link to={'/signup'}>sign-up</Link>  
                            </Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>



            </Drawer>


        </>
    )
}

export default Header