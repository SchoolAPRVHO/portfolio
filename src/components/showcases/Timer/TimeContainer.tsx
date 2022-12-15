import CurrentTime from "./CurrentTime";
import Timer from "./Timer";
import RandomValue from "./RandomValue";
import styles from './TimeContainer.module.css';
import { Container } from "@mui/material";


const TimeContainer = ()=>{
    return (
        <>
            <Container className={styles.container}>
                <h1>Timer component</h1>
                <Timer interval={1000}/>
                <CurrentTime interval={1}/>
                <RandomValue interval={1000}/>
            </Container>
        </>
    )
}
export default TimeContainer;