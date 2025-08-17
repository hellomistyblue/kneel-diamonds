import { MetalOptions } from './MetalOptions.js'
import { SizeOptions } from './SizeOptions.js'
import { StyleOptions } from './StyleOptions.js'

//get a reference to the container element in our HTML
const container = document.querySelector("#container")

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const sizeOptionsHTML = await SizeOptions()
    const styleOptionsHTML = await StyleOptions()


    const composedHTML = `

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
                
            </section>
        </article>

        <article class="order">

        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>

        </article>
    `

    container.innerHTML = composedHTML
}

// Add an event listener for our custom event
document.addEventListener("newSubmissionCreated", render)

render()