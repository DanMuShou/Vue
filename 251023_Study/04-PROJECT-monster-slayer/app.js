function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHp: 100,
      monsterHp: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: Math.max(this.monsterHp, 0) + "%" };
    },
    playerBarStyles() {
      return { width: Math.max(this.playerHp, 0) + "%" };
    },
    canUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHp(value) {
      if (value <= 0 && this.monsterHp <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHp(value) {
      if (value <= 0 && this.playerHp <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },

  methods: {
    startGame() {
      this.playerHp = 100;
      this.monsterHp = 100;
      this.winner = null;
      this.currentRound = 0;
      this.logMessages = [];
    },
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHp -= attackValue;
      this.logMessage("player", "attack", attackValue);
      this.attackPlayer();
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHp -= attackValue;
      this.logMessage("player", "specialAttack", attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHp -= attackValue;
      this.logMessage("monster", "attack", attackValue);
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      this.playerHp = Math.min(this.playerHp + healValue, 100);
      this.logMessage("player", "heal", healValue);
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    logMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
