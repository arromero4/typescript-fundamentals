namespace Utility {
    export namespace Taxes {
        export function calculateIva(price: number): number{
            return (price * 0.21) + price
        }
        export function calculatePanaltyIva(price: number): number{
            return (price * 0.30) + price
        }

    }
}