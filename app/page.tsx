'use client';
import { Avatar, Box, Center, Container, Flex, MantineProvider, Affix} from '@mantine/core';
import Typewriter from 'typewriter-effect';

import '@mantine/core/styles.css';

export default function Home() {
  return (
    <MantineProvider forceColorScheme="light">
        <Box
        style={{
          position: 'sticky', // Makes the Box sticky
          top: '5vh', // Sticks the Box to the top of the viewport
          zIndex: 10, // Ensures the Box stays on top of other elements
        }}>
          <Flex
            className='ml-10 mr-10 mt-10'
            justify="space-between"
          >
            <Box>Joey</Box>

            <Flex
              gap={"10vw"}
            >
              <Box>About</Box>
              <Box>Resume</Box>
              <Box>Projects</Box>
            </Flex>
          </Flex>
        </Box>
      <Center
      h={"90vh"}>
        <Flex gap={40}>
          <Avatar size={"15vw"} src="headshot.png" alt="it's me" />
          <Center>
            <Box>
              <Box>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString('Hi Im Joey Lam')
                      .pauseFor(2500)                
                      .start();
                  }}
                />
              </Box>
              <Flex gap={30}>
                <Box w={"30vw"}>
                  As of December 2024 I'm still currently looking for any internship, research, or mentorship. If you think I'm a good fit please reach out.
                </Box>
              </Flex>
            </Box>
          </Center>

        </Flex>
      </Center>
      <Box h={"100vh"}>
        About me
        <Box>
          Bello! My name is Joey! I'm a current sophmore at Boston University studying Computer Science & Economics. I'm intrested in optimizations, machine learning and finance. In my free time I like to take photos, video/photo editing and playing ping pong!  
        </Box>
      </Box>
      <Box h={"100vh"}>
        Resume
        <Box>
          This is my current resume!
        </Box>
        Last updated {"date"} 
      </Box>
      <Box h={"100vh"}>
        Projects
        <Box>
          List of projects that I have done
        </Box>
      </Box>
      <Box h={"100vh"}>
        Others!
      </Box>
    </MantineProvider>
  );
}
