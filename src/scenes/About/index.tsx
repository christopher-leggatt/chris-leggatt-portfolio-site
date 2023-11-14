/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Heading,
  Text,
  Divider,
  VStack,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import Button from "@/app/components/Button";
import { ButtonType } from "@/app/lib/types";
import { timelineData } from "@/app/lib/data";
import MainLayout from "@/app/layouts/MainLayout";
import { siteMetadata } from "@/app/data/siteMetadata";
import { useRouter } from "next/router";
import { TimelineItem, TimelineList } from "./Timeline";
import PopoverLink from "@/app/components/PopoverLink";

const About = () => {
  const router = useRouter();

  return (
    <MainLayout customMeta={{ title: "About Me - Chris Leggatt" }}>
      <VStack spacing={4} textAlign="center">
        <Heading as="h1" size="lg" color="indigo.500" textTransform="uppercase">
          About me
        </Heading>
        <Heading as="h2" size="2xl" fontWeight="bold">
          Here&apos;s my story.
        </Heading>
        <Text fontSize="lg">
          I&apos;m Chris, a full stack developer, <PopoverLink href={siteMetadata.codepen}>creative coder</PopoverLink>, and lifelong
          learner who decided to take a new life path from automotive
          manufacturing and quality control. My mission is to translate
          user-focussed designs into pixel-perfect websites/applications while
          adding to my repertoire of software disciplines.
        </Text>
        <Text fontSize="lg">
          I began my tech journey last year with online modules and quickly
          developed a passion for the worlds that coding can create, Now, having
          graduated BrainStation's Software Engineering course, I&apos;m
          #opentowork and hitting the ground running, developing new
          <PopoverLink href='/projects'>projects/collaborations</PopoverLink>, learning new languages and connecting with
          new people in this newfound space.
        </Text>
      </VStack>

      <Box display={{ md: "block" }} float="left" mr={8}>
        <Image
          src="/public/static/hardware.webp"
          alt="article cover"
          width={340}
          height={448}
          objectFit="cover"
        />
      </Box>
      <Text fontSize="lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <Text fontSize="lg">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Sed ut perspiciatis unde omnis
      </Text>
      <Text fontSize="lg">
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </Text>
      <Text fontSize={"lg"}>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt.
      </Text>

      <Divider my={16} />

      <VStack mt={12} spacing={6}>
        <Heading as="h2" size="lg">
          Dev timeline
        </Heading>
        <Text fontSize="lg">
          Here&apos;s a brief rundown of my most recent experiences.
        </Text>
        {timelineData && (
          <TimelineList>
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.title}
                meta={item.company}
                link={item.company_url}
                meta_small={item.duration}
                content={item.description}
              />
            ))}
          </TimelineList>
        )}
        <Button
          buttonType={ButtonType.PRIMARY}
          onButtonClick={() => router.push(siteMetadata.resume)}
        >
          View my resume
        </Button>
      </VStack>

      <Divider my={16} />

      <Grid templateColumns={{ md: "repeat(5, 1fr)" }} gap={12}>
        <GridItem colSpan={3}>
          <Heading as="h2" size="lg">
            My skillset
          </Heading>
          <Text fontSize="lg">
            I keep a list of the software I use to those who are interested.
          </Text>
          <Button
            buttonType={ButtonType.PRIMARY}
            onButtonClick={() => router.push("/toolbox")}
          >
            Check out my toolbox
          </Button>
        </GridItem>
        <GridItem colSpan={2}>
          <Image
            src="/public/static/hardware.webp"
            alt="article cover"
            width={260}
            height={260}
            objectFit="cover"
            borderRadius="3xl"
          />
        </GridItem>
      </Grid>
    </MainLayout>
  );
};

export default About;
