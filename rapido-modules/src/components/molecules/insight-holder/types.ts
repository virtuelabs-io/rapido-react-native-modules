import { NotificationProps } from "../../../store/analytics/types"

export type InsightHolderProps = {
    insight: NotificationProps,
    onAck: (insightId?: any) => void,
    formatedValue: string,
    backgroundColor: string,
    icon: string
}

export type  InsightHolderState = {

}
