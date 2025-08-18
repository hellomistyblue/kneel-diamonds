import { setStyleId } from "./transientState.js" 

const handleStyleOptionChange = (changeEvent) => {
    if (changeEvent.target.name === "style") {
        const convertedToNumber = parseInt(changeEvent.target.value)
        setStyleId(convertedToNumber) 
    }
}


export const StyleOptions = async () => {
    document.addEventListener("change", handleStyleOptionChange)
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let html = `
        <div class="styleOptions-input">
    `
    const divStringArray = styles.map(
        (styles) => {
            return `<div> 
            <input type="radio" name="style" value="${styles.id}" /> ${styles.style}
            </div>`
        }
    )
        html += divStringArray.join("")

        html += `
        </div>
        `

    return html
}