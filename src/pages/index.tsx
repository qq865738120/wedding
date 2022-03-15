import * as React from "react";
import "./home.scss";
import { Spline } from '@splinetool/react-spline';
import { useSelector } from "react-redux";
import {
  Card,
  Image,
  Timeline,
  Text,
  Title,
  Badge,
  Space,
  SimpleGrid,
  ScrollArea,
  Progress,
  Highlight,
  Modal,
} from "@mantine/core";
import { Prism } from "@mantine/prism";
import {
  companyList,
  infoList,
  menu,
  projectList,
  schoolList,
  skillList,
} from "../common/home_data";
import { useMediaQuery, useScrollIntoView } from "@mantine/hooks";
import { ResponsiveTreeMap } from "@nivo/treemap";
import axios from "axios";
import { useNotifications } from "@mantine/notifications";
import { isBrowser } from "../utils/index";
import AsciinemaPlayer from "../lib/asciinema-player";

// markup
const IndexPage = () => {
  const isPhone = useMediaQuery("(max-width: 760px)");

  // React.useEffect(() => {
  //   const player = [];
  //   if (isBrowser()) {
  //     projectList
  //       .filter((item) => item.player)
  //       .map((item) => {
  //         player.push(
  //           AsciinemaPlayer({}).create(
  //             `https://asciinema.org/a/${item.player}.cast`,
  //             document.getElementById(item.player),
  //             {
  //               loop: true,
  //               autoPlay: true,
  //               idleTimeLimit: 1,
  //               theme: "solarized-light",
  //               cols: isPhone ? 47 : 90,
  //               rows: isPhone ? 24 : 42,
  //             }
  //           )
  //         );
  //       });
  //   }

  //   return () => {
  //     player.map((item) => item && item.dispose());
  //   };
  // }, []);

  return (
    <main className={`index-page`}>
      <Spline scene="https://prod.spline.design/Oy8HSxYl8NhPc6Qm/scene.spline"/>
    </main>
  );
};

// export const query = graphql`
//   # query will go here
// `;

export default IndexPage;
