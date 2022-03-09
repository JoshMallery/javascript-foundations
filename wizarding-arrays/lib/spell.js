class Spell {
  constructor(spellName, description) {
    this.name = spellName;
    this.description = description;
    this.executionHistory = [];
  }

  execute(target) {
    var executionText = [];

    if(typeof target === 'string') {
      target = target.split();
    }
    for (var i = 0; i < target.length; i++) {
       executionText.push(`Success! You've cast a spell on the ${target[i]}.`)
       this.executionHistory.push(target[i]);
    }

    var ans = executionText[0]
    if(executionText.length === 1) {
      return ans;
    }

    for( var i = 1; i < executionText.length; i++) {
      ans += ` ${executionText[i]}`
    }
    return ans;
  }


  clearExecutionHistory() {
    this.executionHistory = [];
  }

}

module.exports = Spell;
