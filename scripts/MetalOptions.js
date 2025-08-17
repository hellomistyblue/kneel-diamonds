
const handleMetalOptionChange = (changeEvent) => {
    if (changeEvent.target.MetalOptions === "Metals") {

    }
}



export const MetalOptions = async () => {
    document.addEventListener("change", handleMetalOptionChange)
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()
    
    let html = `
        <div class="metalOptions-input">
        `
    const divStringArray = metals.map(
        (metals) => {
            return `<div>
            <input type="radio" name="metal" value="${metals.id}" /> ${metals.metal}
            </div>`
        }
    )    
    html += divStringArray.join("")

    html += `
        </div>
        `
    return html

}

