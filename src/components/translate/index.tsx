import { useTranslate } from "../../utils/use-i18n.util";

export default function Translate(props: any) {
    const value = useTranslate(props.value);

    return (
        <span>{value}</span>
    )
}