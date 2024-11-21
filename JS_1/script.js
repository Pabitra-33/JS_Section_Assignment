let rosePrice = 8;
        let lilyPrice = 10;
        let tulipPrice = 2;

        let numberOfRoses = 70;
        let numberOfLilies = 50;
        let numberOfTulips = 120;

        let rosesValue = rosePrice * numberOfRoses;
        let liliesValue = lilyPrice * numberOfLilies;
        let tulipsValue = tulipPrice * numberOfTulips;

        let total = rosesValue + liliesValue + tulipsValue;
        console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
        console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
        console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
        console.log("Total: ", total);