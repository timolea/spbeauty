import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex flex-column p-4 gap-2 mt-4 border col justify-content-between'>
            <div className='container '>
            <div className='title'>Адреса заведений</div>
            <div className='d-inline-flex flex-column gap-3'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>
                </div>
                <div className='container '>
                <SecondaryButton>Добавить филиал</SecondaryButton>
                </div>
        </div>
    );
}

export default Addresses;