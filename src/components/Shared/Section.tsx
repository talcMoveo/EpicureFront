/* eslint-disable */
import styles from '../../styles/Shared/Section.module.scss';

const Section = (props: {section: string, children: any}) => {
    return (
        <div className={styles[`${props.section}-section`]}>
        {props.children}
        </div>
    );
};

export default Section;
