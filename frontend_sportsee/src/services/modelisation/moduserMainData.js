class MainData {
    constructor(data) {
        this.id = data.id;
        this.userFirstName = data.userInfos.firstName;
        this.todayScore = data.todayScore || data.score;
        this.keyData = data.keyData;
        this.formatScore = this.formatScore(this.todayScore);
    }
    formatScore() {
        return [{value : this.todayScore * 100}]
    }
}

export default MainData

//créa d'une classe qui reprend les clés du data.js
//mise en pourcentage du montant des scores (todayScore ou score)