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
        setDiscountCode('');
    };

    return (
        <form onSubmit={handleDiscountSubmit}>
            <label id='discount-code' htmlFor='discount-code'>Discount code? </label>
            <input name='discount-code' type="text" placeholder="Add discount here" value={discountCode} onChange={handleCodeChange} />
            <input type="submit" value="Apply Discount" />
        </form>
    );
};

export default DiscountForm;