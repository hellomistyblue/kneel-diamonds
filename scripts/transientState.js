// Set up the transient state data structure and provide initial values
const transientState = {
    metalId: 0,
    sizeId: 0,
    styleId: 0
}

// Functions to modify each property of transient state
export const setMetalId = (chosenMetal) => {
    transientState.metalId = chosenMetal
}
export const setSizeId = (chosenSize) => {
    transientState.sizeId = chosenSize
}
export const setStyleId = (chosenStyle) => {
    transientState.styleId = chosenStyle
}

// Function to convert transient state to permanent state
export const saveOrder = async () => {
    if (transientState.metalId > 0 && transientState.sizeId > 0 && transientState.styleId > 0) {
        // Create the options for fetch()
        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transientState)
        }
        // Send the data to the API
        const response = await fetch("http://localhost:8088/orders", postOptions)
   
        // Dispatch a custom event when the submission is complete
        const newOrderEvent = new CustomEvent("newOrderCreated")
        document.dispatchEvent(newOrderEvent)
    }
    else { 
        window.alert(`Please choose one option in each category to submit order.`)
    }
    }



        







