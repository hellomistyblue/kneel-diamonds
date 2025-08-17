
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
        <h2>Metals</h2>
    `
    for (const metalsObject of metals) {
        html += `<input type="radio" name="metal"
        value="${metalsObject.id}" /> ${metalsObject.metal}`
    }
        html += `
        </div>
        `
    return html

}

