import Badge from "../components/badge/Badge"

// Top customers table data
export const topCustomers = {
	head: [
		'user',
		'total orders',
		'total spending'
	],
	body: [
		{
				"username": "john doe",
				"order": "490",
				"price": "$15,870"
		},
		{
				"username": "frank iva",
				"order": "250",
				"price": "$12,251"
		},
		{
				"username": "anthony baker",
				"order": "120",
				"price": "$10,840"
		},
		{
				"username": "frank iva",
				"order": "110",
				"price": "$9,251"
		},
		{
				"username": "anthony baker",
				"order": "80",
				"price": "$8,840"
		}
	]
}

// Lastest orders table data
export const latestOrders = {
	head: [
		"order id",
		"user",
		"date",
		"total price",
		"status",
	],
	body: [
		{
			id: "#OD1711",
			user: "john doe",
			date: "17 Jun 2021",
			price: "$900",
			status: "shipping",
		},
		{
			id: "#OD1712",
			user: "frank iva",
			date: "1 Jun 2021",
			price: "$400",
			status: "paid",
		},
		{
			id: "#OD1713",
			user: "anthony baker",
			date: "27 Jun 2021",
			price: "$200",
			status: "pending",
		},
		{
			id: "#OD1712",
			user: "frank iva",
			date: "1 Jun 2021",
			price: "$400",
			status: "paid",
		},
		{
			id: "#OD1713",
			user: "anthony baker",
			date: "27 Jun 2021",
			price: "$200",
			status: "refund",
		}
	]
}

// order status for badge data
export const orderStatus = {
	"shipping": "primary",
	"pending": "warning",
	"paid": "success",
	"refund": "danger"
}

// render header of table
export const renderHead = (item, index) => (
	<th key={index}>{ item }</th>
)

// render body of table
export const renderBody = (item, index) => (
	<tr key={index}>
		{
			Object.keys(item).map((key, index) => (
				key === "status" 
					? <td key={index}>
							<Badge 
								type={orderStatus[item[key]]}
								content={item[key]}
							/>
						</td>
					: <td key={index}>{ item[key] }</td>
			))
		}
	</tr>
)