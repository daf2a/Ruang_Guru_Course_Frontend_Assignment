else {
        let countries = [];
        for (let i = 0; i < players.length; i++) {
            if (countries.indexOf(players[i].country) === -1) {
                countries.push(players[i].country);
            }
        }
        for (let i = 0; i < countries.length; i++) {
            let totalMedals = 0;
            for (let j = 0; j < players.length; j++) {
                if (countries[i] === players[j].country) {
                    totalMedals += players[j].medals;
                }
            }
            result.push({ name: countries[i], totalMedals: totalMedals });
        }