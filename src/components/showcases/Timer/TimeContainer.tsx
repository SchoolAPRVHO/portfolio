import CurrentTime from "./CurrentTime";
import Timer from "./Timer";
import RandomValue from "./RandomValue";
import styles from './TimeContainer.module.css';


const TimeContainer = ()=>{
    return (
        <>
            <div className={styles.container}>
                <Timer interval={1000}/>
                <CurrentTime interval={1}/>
                <RandomValue interval={1000}/>
            </div>
        </>
    )
}
export default TimeContainer;