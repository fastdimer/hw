const hasPromoCode = true;
const cartTotal = 100;
const isBlackFriday = false;

const isDiscountApplied = (hasPromoCode && cartTotal >= 100) || isBlackFriday;

if (isDiscountApplied) {
    console.log("знижка є");
}
    else {
    console.log("знижки немає");
    }

    const noDiscount = !isDiscountApplied;