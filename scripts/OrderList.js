export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await fetchResponse.json()
    console.log(orders)
    let ordersHTML = ""
    const orderItems = orders.map(
        (order) => {
            const orderPrice = order.metal.price + order.style.price + order.size.price
            return `<p>Order #${order.id} cost $${orderPrice}</p>`
        }
    )    
    ordersHTML += orderItems.join("")

    return ordersHTML
}