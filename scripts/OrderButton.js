import { saveOrder } from "./transientState.js"

const handleOrderSubmission = (clickEvent) => {
    if (clickEvent.target.id === "order-button") {
        console.log("Button clicked!")
        saveOrder()
    }
}

export const OrderButton = () => {
    document.addEventListener("click", handleOrderSubmission)

    return `<button id='order-button'>Save Order</button>`
}







