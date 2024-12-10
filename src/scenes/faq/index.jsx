import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="BACKGROUND" subtitle="Philippine Presidential Election" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Ferdinand "Bongbong" Marcos Jr.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Political Party: Partido Federal ng Pilipinas
          Background: The son of the late dictator Ferdinand Marcos, Bongbong Marcos ran for president after a failed bid for vice president in 2016. His platform focused on unity, economic growth, and improving the country's infrastructure. He was supported by many who were nostalgic for the Marcos era or disillusioned with traditional political parties. Marcos Jr. won the 2022 election with a landslide victory.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Leni Robredo
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Political Party: Liberal Party
          Background: Leni Robredo was the sitting vice president at the time of the election and ran on a platform focused on good governance, fighting corruption, and addressing inequality. Robredo built her campaign on themes of grassroots advocacy and building a better future for ordinary Filipinos. She was known for her independent stance and for opposing the policies of the Duterte administration. Though she lost, Robredo was a strong contender with a significant following.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Sara Duterte-Carpio
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Political Party: Lakas–CMD
          Background: The daughter of then-President Rodrigo Duterte, Sara Duterte-Carpio initially ran for vice president but later teamed up with Bongbong Marcos for a vice-presidential candidacy, running as his running mate. She was the mayor of Davao City and enjoyed a strong base of support due to her father's influence and her own leadership record in Davao.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Manny Pacquiao
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Political Party: PROMDI (Progressive Movement for the Devolution of Initiatives)
          Background: The boxing champion and former senator Manny Pacquiao ran on a platform of fighting poverty and corruption. He promised to bring his "fighting spirit" to address the nation's economic challenges. Pacquiao had a populist appeal, emphasizing his background as a self-made man who understood the struggles of the Filipino people.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Isko Moreno Domagoso
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Political Party: Aksyon Demokratiko
Background: The mayor of Manila, Isko Moreno, ran on a platform of reform and modernization, with a focus on improving urban infrastructure and addressing social issues. Known for his dramatic rise from a poor background, he garnered significant attention with his youth and dynamic leadership style. Moreno was also seen as a practical and pragmatic alternative to traditional political families.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
