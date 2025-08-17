// Set up the transient state data structure and provide initial values
const transientState = {
    metalChoice: 0,
    sizeChoice: 0,
    styleChoice: 0
}

// Functions to modify each property of transient state
export const setMetalChoice = (chosenMetal) => {
    transientState.metalChoice = chosenMetal
}
export const setSizeChoice = (chosenSize) => {
    transientState.sizeChoice = chosenSize
}
export const setStyleChoice = (chosenStyle) => {
    transientState.styleChoice = chosenStyle
}

// Function to convert transient state to permanent state
export const saveSurveySubmission = async () => {
    if (transientState.metalChoice > 0 && transientState.sizeChoice > 0 && transientState.styleChoice > 0) {
        // Create the options for fetch()
        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transientState)
        }
        // Send the data to the API
        const response = await fetch("http://localhost:8088/submissions", postOptions)
   
   // Dispatch a custom event when the submission is complete
    const newSubmissionEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(newSubmissionEvent)
    }
    else { 
        window.alert(`Please choose one option in each category to submit order.`)
    }
    }



        







