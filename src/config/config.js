const MINE_RATE = 100;
const INITIAL_DIFFICULTY = 3;

const GENESIS_DATA = {// Stream case syntax hardcoded global value 
    timestamp : 1,
    lastHash: '-----',
    hash: 'hash-one',
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    data: []
}; 

module.exports = { GENESIS_DATA, MINE_RATE };