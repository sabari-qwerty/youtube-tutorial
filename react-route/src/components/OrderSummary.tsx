import { useNavigate } from 'react-router-dom'

export const OrderSummary = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>Order confrom</div>
            <button onClick={() => navigate(-1)}>back</button>
        </>
    )
}
