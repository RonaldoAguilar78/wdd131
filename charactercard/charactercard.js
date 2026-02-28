const monster = {
  name: 'Snortleblat',
  class: 'Swamp Beast Diplomat',
  level: 1, // Starting level
  health: 100, // Starting health
  
  // Method to handle being attacked
  takeDamage: function() {
    if (this.health > 0) {
      this.health -= 10;
      // Update the HTML display
      document.querySelector('#health').textContent = this.health;
    }
  },

  // Method to handle leveling up
  levelUp: function() {
    if (this.level < 9) {
      this.level++;
      // Reset health back to 100 on level up (optional but fun!)
      this.health = 100;
      
      // Update the HTML display
      document.querySelector('#level').textContent = this.level;
      document.querySelector('#health').textContent = this.health;
    }
  }
};

// Initial Render (Sets the starting values in HTML)
document.querySelector('#level').textContent = monster.level;
document.querySelector('#health').textContent = monster.health;

// Event Listeners (Connecting buttons to object methods)
document.querySelector("#attackBtn").addEventListener("click", function () {
  monster.takeDamage();
});

document.querySelector("#levelBtn").addEventListener("click", function () {
  monster.levelUp();
});