import React, {useState} from "react";

const DiscountForm = ({onDiscountSubmit}) => {

    const [discountCode, setDiscountCode] = useState("");

    const handleCodeChange = (e) => {
        setDiscountCode(e.target.value)
    };

    const handleDiscountSubmit = (e) => {
        e.preventDefault();
        const discountToSubmit = discountCode.trim();
        if (!discountToSubmit){
            return;
        };
        onDiscountSubmit(discountToSubmit);
    };

    return (
        <form onSubmit={handleDiscountSubmit}>
            <input type="text" placeholder="Add discount here" value={discountCode} onChange={handleCodeChange} />
            <input type="submit" value="Apply Discount" />
        </form>
    );
};

export default DiscountForm;