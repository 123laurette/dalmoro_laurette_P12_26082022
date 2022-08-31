class mainData {
    constructor(data) {
        this.id = data.id;
        this.firstName = data.userInfos.firstName;
        this.lastName = data.userInfos.lastName;
        this.age = data.userInfos.age;
        this.todayScore = data.todayScore || data.score;
        this.calorie = data.keyData.calorieCount;
        this.proteine = data.keyData.proteinCount;
        this.glucide = data.keyData.carbohydrateCount;
        this.lipide = data.keyData.lipidCount
        this.formatScore = this.formatScore(this.todayScore);
    }
    formatScore() {
        return [{value : this.todayScore * 100}]
    }
}

class activityData {
    constructor(data) {
        this.id = data.userId;
        this.day = data.sessions.day;
        this.kilo = data.sessions.kilogram;
        this.calorie = data.sessions.calories;
    }
}

class averageSessionsData {
    constructor(data) {
        this.id = data.userId;
        this.day = data.sessions.day;
        this.session = data.sessions.sessionLength;
    }
}

class performanceData {
    constructor(data) {
        this.value = data.data.value;
        this.kind = data.data.kind
    }
}

export {mainData, activityData, averageSessionsData,performanceData}

//créa d'une classe qui reprend les clés du data.js
//mise en pourcentage du montant des scores (todayScore ou score)