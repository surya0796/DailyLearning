import styles from "./Select.module.css"

const { container } = styles

type SelectOption = {
    value: string | number,
    label: string
}

type SelectProps = {
    options: SelectOption[]
    value?: SelectOption,
    onChange: (value: SelectOption | undefined) => void,
    styling?: object
}

export const Select = ({ value, onChange, options, styling }: SelectProps) => {
    return (
        <>
            <div className={container}>
                <span className={styles["select-value"]}>Value</span>
                <div className={styles["right-icons-wrapper"]}>
                    <button className={styles["del-icon"]}>&times;</button>
                    <div className={styles["middle-line"]}></div>
                    <div className={styles["dropdown-indicator"]}></div>
                    <ul className={styles.options}>
                        {options.map((option) => {
                            return (
                                <li className={styles["single-option"]} key={option.value}>{option.label}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}