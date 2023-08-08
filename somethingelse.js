//nylo
const accuracy = (attackRoll, DefenseRoll) => {
        let hitChance;
        if (attackRoll > DefenseRoll) {
            hitChance = 1 - ((DefenseRoll + 2) / (2 * (attackRoll + 1)));
        } else {
            hitChance = attackRoll / (2 * (DefenseRoll + 1));
        } return hitChance;
};

const scySwing = (acc, def, max, size = 3) => {
  let damage = 0;
  if (Math.floor(Math.random() * (acc + 1)) > Math.floor(Math.random() * def)) {
    damage += Math.floor(Math.random() * (max[0] + 1));
  }
  if (Math.floor(Math.random() * (acc + 1)) > Math.floor(Math.random() * def)) {
    damage += Math.floor(Math.random() * (max[1] + 1));
  }
  if (
    Math.floor(Math.random() * (acc + 1)) > Math.floor(Math.random() * def) &&
    size > 2
  ) {
    damage += Math.floor(Math.random() * (max[2] + 1));
  }
  return damage;
};

const challySpec = (acc, def, max) => {
  let damage = 0;
  const secondAcc = acc * 0.75;
  if (Math.floor(Math.random() * (acc + 1)) > Math.floor(Math.random() * def)) {
    damage += Math.floor(Math.random() * (max + 1));
  }
  if (Math.floor(Math.random() * (secondAcc + 1)) > Math.floor(Math.random() * def)) {
    damage += Math.floor(Math.random() * (max + 1));
  }
  return damage;
};

const clawSpec = (acc, def, max) => {
  let damage = 0;
  //first roll
  if (Math.floor(Math.random()*(acc +1)) > (Math.floor(Math.random() * def))) {
    let newMax = max - 1;
    const hit = Math.floor(
      Math.random() * (newMax - Math.floor(max / 2) + 1) + Math.floor(max / 2)
    );
    damage += hit; //first
    damage += Math.floor(hit / 2); //second
    damage += 2 * Math.floor(Math.floor(hit / 2) / 2); //third & 4th
    damage += Math.random() < 0.5 ? 1 : 0; //extra
  }
  //second roll
  else if (damage === 0 && Math.floor(Math.random()*(acc +1)) > (Math.floor(Math.random() * def))) {
    const hit = Math.floor(
      Math.random() *
        (Math.floor((max * 7) / 8) - Math.floor((max * 3) / 8 + 1)) +
        Math.floor((3 / 8) * max)
    );
    damage += hit; //first
    damage += 2 * Math.floor(hit / 2); //second & third
    damage += Math.random() < 0.5 ? 1 : 0; //extra
  }
  //third roll
  else if (damage === 0 && Math.floor(Math.random()*(acc +1)) > (Math.floor(Math.random() * def))) {
    const hit = Math.floor(
      Math.random() *
        (Math.floor((max * 3) / 4) - Math.floor((max * 1) / 4) + 1) +
        Math.floor((1 / 4) * max)
    );
    damage += 2 * hit; //first & second
    damage += Math.random() < 0.5 ? 1 : 0; //extra
  }
  //fourth roll
  else if (damage === 0 && Math.floor(Math.random()*(acc +1)) > (Math.floor(Math.random() * def))) {
    const hit = Math.floor(
      Math.random() *
        (Math.floor((max * 5) / 4) - Math.floor((max * 1) / 4) + 1) +
        Math.floor((max * 1) / 4)
    );
    damage = hit;
  }
  //fifth roll
  else if (damage === 0 && Math.random() <= 0.5) {
    damage += 2;
  }
  return damage;
};

const zcbSpec = (acc, def, max) => {
    let damage = 0;
    if (Math.floor(Math.random() * (acc + 1)) > (Math.floor(Math.random() * def))) {
        damage += max;
    } 
    return damage;
};

const attack = (acc, max) => {
  let damage = 0;
  if (Math.random() < acc) damage += Math.floor(Math.random() * (max + 1));
  return damage;
};

const naked = {
  112: {
    anguish: {
      tbow: {
        max: 73,
        roll: 28627,
      },
      bp: {
        max: 28,
        roll: 14768,
      },
      dart: {
        max: 24,
        roll: 10508,
      },
    },
    noAnguish: {
      tbow: {
        max: 70,
        roll: 25645,
      },
      bp: {
        max: 27,
        roll: 12638,
      },
      dart: {
        max: 22,
        roll: 8378,
      },
    },
  },
  110: {
    anguish: {
      tbow: {
        max: 70,
        roll: 28224,
      },
      bp: {
        max: 28,
        roll: 14560,
      },
      dart: {
        max: 23,
        roll: 10360,
      },
    },
    noAnguish: {
      tbow: {
        max: 68,
        roll: 25284,
      },
      bp: {
        max: 27,
        roll: 12460,
      },
      dart: {
        max: 22,
        roll: 8260,
      },
    },
  },
};
const masori = {
  112: {
    anguish: {
      tbow: {
        max: 77,
        roll: 46121,
      },
      bp: {
        max: 30,
        roll: 27264,
      },
      dart: {
        max: 25,
        roll: 23004,
      },
    },
    noAnguish: {
      tbow: {
        max: 73,
        roll: 43139,
      },
      bp: {
        max: 29,
        roll: 25134,
      },
      dart: {
        max: 24,
        roll: 20874,
      },
    },
  },
  110: {
    anguish: {
      tbow: {
        max: 75,
        roll: 45472,
      },
      bp: {
        max: 29,
        roll: 26880,
      },
      dart: {
        max: 25,
        roll: 22680,
      },
    },
    noAnguish: {
      tbow: {
        max: 73,
        roll: 42532,
      },
      bp: {
        max: 28,
        roll: 24780,
      },
      dart: {
        max: 24,
        roll: 20580,
      },
    },
  },
};

const eVoid = {
  112: {
    anguish: {
      tbow: {
        max: 81,
        roll: 32541,
      },
      bp: {
        max: 32,
        roll: 17004,
      },
      dart: {
        max: 26,
        roll: 12324,
      },
    },
    noAnguish: {
      tbow: {
        max: 79,
        roll: 29265,
      },
      bp: {
        max: 30,
        roll: 14664,
      },
      dart: {
        max: 25,
        roll: 9984,
      },
    },
  },
  110: {
    anguish: {
      tbow: {
        max: 79,
        roll: 32124,
      },
      bp: {
        max: 31,
        roll: 16786,
      },
      dart: {
        max: 26,
        roll: 12166,
      },
    },
    noAnguish: {
      tbow: {
        max: 77,
        roll: 28890,
      },
      bp: {
        max: 30,
        roll: 14476,
      },
      dart: {
        max: 25,
        roll: 9865,
      },
    },
  },
};

class Player {
    constructor() {
        this.scytheMax = [50, 25, 12];
        this.scytheRoll = 31439;
        this.clawMax = 46;
        this.clawRoll = 23542;
        this.challyMax = 67;
        this.challyRoll = 31439;
        this.bgsAcc = (34717 * 2);
        this.bgsMax = 77;
        this.zcbMax = 110;
        this.spec = 105;
        this.hp = 99;
    }
};

const player1 = new Player;
const player2 = new Player;
const player3 = new Player;
const player4 = new Player;
const player5 = new Player;

player1.zcbRoll = 29484 * 2;
player2.zcbRoll = 27144 * 2;
player3.zcbRoll = 29484 * 2;
player4.zcbRoll = 23998 * 2;
player5.zcbRoll = 23998 * 2;

player1.tbowMax = masori[112].anguish.tbow.max;
player2.tbowMax = masori[112].anguish.tbow.max;
player3.tbowMax = masori[112].anguish.tbow.max;
player4.tbowMax = naked[112].noAnguish.tbow.max;
player5.tbowMax = naked[112].noAnguish.tbow.max;


player1.tbowRoll = masori[112].anguish.tbow.roll; 
player2.tbowRoll = masori[112].anguish.tbow.roll;
player3.tbowRoll = masori[112].anguish.tbow.roll;
player4.tbowRoll = naked[112].noAnguish.tbow.roll;
player5.tbowRoll = naked[112].noAnguish.tbow.roll;

player1.bpMax = masori[112].anguish.dart.max;
player2.bpMax = masori[112].anguish.dart.max;
player3.bpMax = masori[112].anguish.bp.max;
player4.bpMax = naked[112].noAnguish.bp.max;
player5.bpMax = naked[112].noAnguish.bp.max;

player1.bpRoll = masori[112].anguish.dart.roll;
player2.bpRoll = masori[112].anguish.dart.roll;
player3.bpRoll = masori[112].anguish.bp.roll;
player4.bpRoll = naked[112].noAnguish.bp.roll;
player5.bpRoll = naked[112].noAnguish.bp.roll;

player1.sangMax = 43;
player2.sangMax = 43;
player3.sangMax = 36;
player4.sangMax = 36;
player5.sangMax = 36;

player1.sangAcc = .9245;
player2.sangAcc = .9245;
player3.sangAcc = .8526;
player4.sangAcc = .8526;
player5.sangAcc = .8526;

const godBoss = !true; //true = godboss, !true = reg boss



function nyloBoss() {
  player1.spec = 100; //set to 100 for bgs, 105 for no bgs bc im lazy
  player2.spec = 105;
  player3.spec = 105;
  player4.spec = 105;
  player5.spec = 105;
    player1.tick = 2;
    player2.tick = 2;
    player3.tick = 2;
    player4.tick = 2;
    player5.tick = 2;
    let phaseTick = 2;
    let phase = "melee";
    let hp = 2500;
    let nyloDef = 50;
    let nyloRoll = (nyloDef + 9) * 64;
    let timer = 2;
    let totalVeng = 8;
    let totalPhase = 1;

    function changePhase() {
      if (phase === "melee") {
        if (Math.random() > 0.5) {
          phase = "range";
        } else {
            if (godBoss) {
                phase = 'range';
            }
            else {
                phase = "mage";
            }
        }
      }
      else if (phase === "range") {
        if (Math.random() > 0.5) {
          phase = "melee";
        } else {
            if (godBoss) {
              phase = 'melee'
            } 
            else {
              phase = "mage";
            }
        }
      }
      else if (phase === "mage") {
        if (Math.random() > 0.5) {
          phase = "melee";
        } else {
          phase = "range";
        }
      }
    }

    player1.name = 'player1'
    player2.name = 'player2'
    player3.name = 'player3'
    player4.name = 'player4'
    player5.name = 'player5'

    while (hp > 0) {
        timer++;
        // console.log(`ticks since boss spawn : ${timer} | phaseTick : ${phaseTick}`);
        const team = [player1, player2, player3, player4, player5]
        if (phase === 'melee') {
            team.forEach((player) => {
                if (player.tick === phaseTick) {
                    if (player.spec === 100) {
                        let hit = attack((accuracy(player.bgsAcc, nyloRoll)), player.bgsMax);
                        hp -= hit;
                        nyloDef -= hit;
                        if (nyloDef < 0) {
                            nyloDef = 0;
                        };
                        player.tick += 6;
                        player.spec -= 50;
                        // console.log(`${player.name} BGS a ${hit} hp is now ${hp}`)
                    }
                    else if (player.spec === 50) {
                        if (nyloDef > 20) {
                            let hit = attack((accuracy(player.bgsAcc, nyloRoll)), player.bgsMax);
                            hp -= hit;
                            nyloDef -= hit;
                            if (nyloDef < 0) {
                                nyloDef = 0;
                            };
                            player.tick += 6;
                            player.spec -= 50;
                            // console.log(`${player.name} BGS a ${hit} hp is now ${hp}`);
                        }
                        else {
                            hp -= clawSpec(player.clawAcc, nyloRoll, player.clawMax);
                            player.spec -= 50;
                            player.tick += 4;
                            // console.log(
                            //   `${player.name} clawed! hp is now ${hp}`
                            // );
                        }
                    }
                    else if (player.spec === 105) {
                        hp -= challySpec(player.challyRoll, nyloRoll, player.challyMax)
                        player.spec -= 30;
                        player.tick += 7;
                        // console.log(`${player.name} challied! hp is now ${hp}`);
                    }
                    else {
                        hp -= scySwing(player.scytheRoll, nyloRoll, player.scytheMax)
                        player.tick += 5;
                        // console.log(`${player.name} scyhted! hp is now ${hp}`);
                    }
                    
                }
            })
            if (phaseTick === 4 || phaseTick === 8) {
              let target = team[Math.floor(Math.random() * team.length)];
              if (totalVeng > 0) {
                if (target.hp >= 75) {
                  let tanked = 0;
                  if (Math.random() < .8) {
                    tanked = Math.floor(Math.random() * 71);
                    }
                  target.hp -= tanked;
                  hp -= Math.floor((tanked * 3) / 4);
                    if (tanked > 0) {
                        totalVeng--;
                    }
                    // console.log(`tanked ${tanked} veng on melee : hp is now ${hp}`);
                }
              }
            }
            // if (hp < 0) {
            //   timer += 5;
            // }
            // if (hp === 0) {
            //   timer += 6;
            // }
        };
        if (phase === 'mage') {
            team.forEach((player) => {
                if (player.tick === phaseTick) {
                    hp -= attack(player.sangAcc, player.sangMax);
                    player.tick += 4;
                    // console.log(`${player.name} sang'd! hp is now ${hp}`);
                }
            })
            if (phaseTick === 4 || phaseTick === 8) {
              let target = team[Math.floor(Math.random() * team.length)];
              if (totalVeng > 0) {
                if (target.hp >= 75) {
                  let tanked = 0;
                  if (Math.random() < .8894) {
                    tanked = Math.floor(Math.random() * 62);
                    }
                  target.hp -= tanked;
                    hp -= Math.floor((tanked * 3) / 4);
                    // console.log(`tanked ${tanked} veng on mage : hp is now ${hp}`);
                  if (tanked > 0) {
                        totalVeng--;
                  }
                } else if (target.hp < 75 && target.hp > 20) {
                  let tanked = 0;
                  if (Math.random() < .8894) {
                    tanked = Math.floor(Math.random() * 17);
                    }
                  target.hp -= tanked;
                  hp -= Math.floor((tanked * 3) / 4);
                  // console.log(`tanked ${tanked} veng on mage : hp is now ${hp}`);
                  if (tanked > 0) {
                        totalVeng--;
                  }
                }
              }
            }
            // if (hp < 0) {
            //   timer += 6;
            // }
            // if (hp === 0) {
            //   timer += 7;
            // }
        };
        if (phase === 'range') {
            team.forEach((player) => {
                if (player.tick === phaseTick) {
                    if (phaseTick === 2 || phaseTick === 4 || phaseTick === 9) {
                        if (player.spec === 75) {
                            player.spec -= 75
                            hp -= zcbSpec(player.zcbRoll, nyloRoll, player.zcbMax);
                            player.tick += 5;
                            // console.log(
                            //   `${player.name} ZCBd! hp is now ${hp}`
                            // );
                        }
                        else {
                            hp -= attack(accuracy(player.tbowRoll, nyloRoll), player.tbowMax);
                            player.tick += 5;
                            // console.log(`${player.name} tbowed! hp is now ${hp}`);
                        }
                    }
                    else {
                        hp -= attack(accuracy(player.bpRoll, nyloRoll), player.bpMax)
                        player.tick += 2;
                        // console.log(`${player.name} bp'd! hp is now ${hp}`);
                    }
                }
            })
            if (phaseTick === 4 || phaseTick === 8) {
              let target = team[Math.floor(Math.random() * team.length)];
              if (totalVeng > 0) {
                if (target.hp >= 75) {
                  let tanked = 0;
                  if (Math.random() < .8) {
                    tanked = Math.floor(Math.random() * 71);
                    }
                  target.hp -= tanked;
                    hp -= Math.floor((tanked * 3) / 4);
                    // console.log(
                    //   `tanked ${tanked} veng on range : hp is now ${hp}`
                    // );
                  if (tanked > 0) {
                        totalVeng--;
                  }
                } else if (target.hp < 75 && target.hp > 20) {
                  let tanked = 0;
                  if (Math.random() < .8) {
                    tanked = Math.floor(Math.random() * 17);
                    }
                  target.hp -= tanked;
                    hp -= Math.floor((tanked * 3) / 4);
                    // console.log(`tanked ${tanked} veng on range : hp is now ${hp}`);
                  if (tanked > 0) {
                        totalVeng--;
                  }
                }
              }
            }
            // if (hp < 0) {
            //   timer += 6;
            // }
            // if (hp === 0) {
            //   timer += 7;
            // }
        }
        phaseTick++;
        if (phaseTick > 9) {
            phaseTick = 0;
            changePhase();
            totalPhase++;
            // console.log(` -------Phase changed to ${phase} , total phases: ${totalPhase}--------`);
            team.forEach((player) => {
                player.tick -= 10;
            })
        }
    }
    // console.log(totalPhase)
    return timer;
}


let sims = 10000000;
let killTime = 0;
let killArray = [];

for (let i = 0; i < sims; i++) {
  killArray.push(nyloBoss())
}


killArray.forEach((time , index)=> {
    killTime += time;
    while (time % 4 != 0) {
        time++
    }
    killArray[index] = time;
})

function killTimeCounts(array) {
    const counts = {};
    const totalCounts = array.length
    array.forEach((value) => {
        if (counts[value]) {
            counts[value]++;
        }
        else {
            counts[value] = 1;
        }
    })
    
    const percentages = {};

    for (const key in counts) {
        const perc = (counts[key] / totalCounts) * 100;
        percentages[key] = perc.toFixed(2) + '%';
    }

    return counts
    //return percentages
}

if (godBoss) {
  console.log(`Average time with god boss : ${killTime / sims} \n
Kill Times : \n`);
} else {
  console.log(`Average time without god boss : ${killTime / sims} \n
Kill Times : \n`);
}

console.log(killTimeCounts(killArray))

console.log(nyloBoss())
