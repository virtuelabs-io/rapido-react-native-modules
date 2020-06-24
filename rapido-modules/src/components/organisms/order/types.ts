import { OrderHeader } from "../../../models"

export type OrderProps = {
    data: OrderHeader,
    onPress: (selectedOrder: any) => void
}

export type OrderState = { }
