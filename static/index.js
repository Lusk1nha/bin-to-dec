
function converterBinToDec() {
    const binary = document.querySelector("#bin").value
    const decimal = document.getElementById("dec")
    const binaryArray = []
    
    if ( !validationNumbers(binary, binaryArray)) { return }
    transformBinToDec(decimal, binaryArray)
    
}

function validationNumbers(binaryInput, binaryArray) {
    // Add the numbers in an array
    for ( const bin of binaryInput ) {
        binaryArray.push(bin)
        
    }

    // if any number is different than 1 or 0, return an error for the user's screen
    if ( binaryInput.length != 0 ) {
        for ( const binNumber of binaryArray ) {
            if ( binNumber != '0'  && binNumber != '1' ) {
                window.alert("Error: Please, enter 1 or 0 numbers in Binary")
                return false
            }
        }
        
        return binaryArray
        
    } else {
        window.alert("Please, insert a binary number")
        return false

    }
}


function transformBinToDec(decimalInput, transformedArrayBinary) {
    let decimalResult = 0

    // Make a conversion
    transformedArrayBinary.reverse().forEach((binaryNumber, rows) => {
        let calculatedBinary = 0
        
        calculatedBinary = binaryNumber * (2 ** rows)
        decimalResult += calculatedBinary
    })

    // Puts the conversion result on the user's screen
    decimalInput.value = `${decimalResult}`
    
}
