const handleSizeOptionChange = (changeEvent) => {
    if (changeEvent.target.SizeOptions === "Sizes") {

    }
}




export const SizeOptions = async () => {
    document.addEventListener("change", handleSizeOptionChange)
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    let html = `
        <div class="sizeOptions-input">
    `
    const divStringArray = sizes.map(
        (sizes) => {
            return `<div>
            <input type="radio" name="carets" value="${sizes.id}" /> ${sizes.carets}
            </div>`
        }
    )
        html += divStringArray.join("")
        
        html += `
        </div>
        `
    return html
}